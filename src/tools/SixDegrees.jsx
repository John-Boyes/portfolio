import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';

export default function SixDegrees() {
  const Ref = useRef(null);

  const [guessCount, setGuessCount] = useState(0); // Track the number of guesses
  const [timer, setTimer] = useState("00:10:00");
  const [remainingTime, setRemainingTime] = useState(10000); // 10 minutes in milliseconds
  const [isPaused, setIsPaused] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);
  
  // API for getting Actor Data
  const actorList = ['Jack Black', 'Tom Hardy', 'Tom Holland', 'Jessica Biel', 'Mark Wahlberg', 'Jeff Bridges', 'Kit Harington', 'Mark Ruffalo', 'Tony Danza', 'Tim Allen', 'Selena Gomez', 'Mel Gibson', 'Martin Short', 'Peter Dinklage', 'Sylvester Stallone', 'Steve Martin']
  const [choices, setChoices] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchActorData = async (actorName) => {
    try {
      // const response = await axios.get(`/api/actor`, { params: { name: actorName } });
      const response = await axios.get(`http://localhost:5000/api/search/${actorName}`);
      return { name: actorName, data: response.data };
    } catch (error) {
      console.error(`Error fetching data for ${actorName}:`, error);
      return { name: actorName, data: null, error: true };
    }
  };

  const handleFetchData = async () => {
    setLoading(true);
    setResults([]); // Clear previous results
  
    try {
      let actor1, actor2;
      let actor1Credits, actor2Credits;
  
      // Continue selecting until two actors with no overlapping movies are found
      do {
        // Randomly shuffle and select two actors
        const shuffledList = [...actorList].sort(() => 0.5 - Math.random());
        actor1 = shuffledList[0];
        actor2 = shuffledList[1];
  
        // Fetch movie credits for both actors
        const [actor1Response, actor2Response] = await Promise.all([
          axios.get(`http://localhost:5000/api/search/${actor1}`), // Replace with actual endpoint
          axios.get(`http://localhost:5000/api/search/${actor2}`),
        ]);
  
        actor1Credits = actor1Response.data.acting_credits || [];
        actor2Credits = actor2Response.data.acting_credits || [];
  
      } while (actor1Credits.some((movie) => actor2Credits.includes(movie)));
  
      // Set the validated choices
      setChoices([actor1, actor2]);
  
      // Add credit counts to the results
      const actorResults = [
        {
          name: actor1,
          creditsCount: actor1Credits.length,
          credits: actor1Credits,
        },
        {
          name: actor2,
          creditsCount: actor2Credits.length,
          credits: actor2Credits,
        },
      ];
  
      // Fetch additional actor data for display
      const promises = [fetchActorData(actor1), fetchActorData(actor2)];
      const detailedResults = await Promise.all(promises);
  
      // Combine credit counts with detailed results
      const finalResults = detailedResults.map((result, index) => ({
        ...result,
        creditsCount: actorResults[index].creditsCount,
        credits: actorResults[index].credits,
      }));
  
      setResults(finalResults);
      console.log(finalResults);
  
    } catch (error) {
      console.error('Error during actor selection or fetching data:', error);
    } finally {
      setLoading(false);
    }

    onClickReset();
  };
  

  // Create timer
  const getTimeRemaining = (time) => {
    const total = time;
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return { total, hours, minutes, seconds };
  };

  const startTimer = (time) => {
    const { total, hours, minutes, seconds } = getTimeRemaining(time);
    if (total >= 0) {
      setTimer(
        `${hours > 9 ? hours : "0" + hours}:${
          minutes > 9 ? minutes : "0" + minutes
        }:${seconds > 9 ? seconds : "0" + seconds}`
      );
    }
  };

  const clearTimer = (time) => {
    if (Ref.current) clearInterval(Ref.current);

    const id = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 0) {
          clearInterval(id); // Ensure the timer stops exactly at 0
          setTimer("00:00:00"); // Set display to zero
          return 0;
        }
        const updatedTime = prev - 1000;
        startTimer(updatedTime); // Update the displayed time
        return updatedTime;
      });
    }, 1000);

    Ref.current = id;
  };

  const onClickReset = () => {
    setIsPaused(false);
    setRemainingTime(600000); // Reset to 10 minutes
    clearTimer(600000); // Start fresh timer
  };

  const pauseTimer = () => {
    if (Ref.current) {
      clearInterval(Ref.current);
      Ref.current = null;
      setIsPaused(true);
    }
  };

  const resumeTimer = () => {
    if (isPaused && remainingTime > 0) {
      setIsPaused(false);
      clearTimer(remainingTime);
      setHasChecked(false);
    }
  };


  // Validation and UI logic remains unchanged
  const [answers, setAnswers] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
  });
  const [validity, setValidity] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false); // Indicates if the user succeeded
  
  const handleChange = (event) => {
    const { id, value } = event.target;
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };
  
  const checkAnswers = async () => {
    if (gameOver) return; // Prevent further checks if the game is over
  
    let currentValidity = {};
    let previousMovies = []; // Tracks the movies of the last valid input
    let connectedActor = null; // Tracks the remaining actor not connected yet
    let isGameOver = false;
  
    try {
      // Iterate through each degree and validate
      for (const degree of Object.keys(answers)) {
        const actorName = answers[degree];
        if (!actorName) break;
  
        // Fetch the actor's movie credits
        const response = await axios.get(`http://localhost:5000/api/search/${actorName}`);
        const actorMovies = response.data.credits || [];
  
        // First degree validation
        if (degree === "first" || degree === "second") {
          const matchesActor1 = actorMovies.some((movie) => actor1Credits.includes(movie));
          const matchesActor2 = actorMovies.some((movie) => actor2Credits.includes(movie));
  
          if (matchesActor1 && matchesActor2) {
            // Game ends successfully if both actors are connected
            setGameOver(true);
            setWinner(true);
            currentValidity[degree] = true;
            break;
          }
  
          // Continue the game if only one actor is matched
          if (matchesActor1 || matchesActor2) {
            currentValidity[degree] = true;
            connectedActor = matchesActor1 ? "actor2" : "actor1"; // Track the remaining actor
            previousMovies = actorMovies; // Update the valid movie list
          } else {
            // No connection to either actor ends the game unsuccessfully
            currentValidity[degree] = false;
            isGameOver = true;
            break;
          }
        } else {
          // Subsequent degrees validation
          const matchesPrevious = actorMovies.some((movie) => previousMovies.includes(movie));
          const matchesRemainingActor = actorMovies.some((movie) =>
            connectedActor === "actor1" ? actor1Credits.includes(movie) : actor2Credits.includes(movie)
          );
  
          if (!matchesPrevious) {
            // No match with the previous degree ends the game
            currentValidity[degree] = false;
            isGameOver = true;
            break;
          }
  
          if (matchesRemainingActor) {
            // Game ends successfully if the remaining actor is matched
            currentValidity[degree] = true;
            setGameOver(true);
            setWinner(true);
            break;
          }
  
          // Update for the next iteration
          currentValidity[degree] = true;
          previousMovies = actorMovies;
        }
      }
  
      // Increment guess count and check if max guesses are reached
      setGuessCount((prev) => {
        if (prev + 1 >= 10) {
          setGameOver(true);
          setWinner(false); // Game ends unsuccessfully
        }
        return prev + 1;
      });
  
      // Update validity and game state
      setValidity(currentValidity);
      if (isGameOver) setGameOver(true);
    } catch (error) {
      console.error("Error validating answers:", error);
    }
  };
  
  useEffect(() => {
    if (gameOver) return;

    if (timer === "00:00:00") {
      setGameOver(true);
      setWinner(false); //Game ends unsuccessfully
    }

    return () => clearInterval(Ref.current); // Cleanup on unmount
  }, [timer, gameOver]);

  

  return (
    <div className="flex flex-col p-6 m-auto overflow-auto">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl font-bold tracking-wide mb-6">
          Six Degrees of Separation Game
        </p>
      </div>

      {/* Display Actors to Solve */}
      <button className='pb-2' onClick={handleFetchData} disabled={loading}>
        {loading ? 'Loading...' : 'Click to Load New Actors'}
      </button>
      
      <div className="flex flex-col sm:flex-row justify-center gap-12 overflow-hidden">
      {results.map((result, index) => (
        <div key={index} className="rounded-xl border border-black md:max-w-xs xl:max-w-md
        bg-gradient-to-b from-slate-400 to-slate-400/80 
        dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:via-gray-700 dark:to-gray-700/80
            shadow-sm shadow-gray-600 dark:shadow-gray-900">
            <img 
                src={result.data.image_url}
                alt={result.name}
                title="Show Details"
                className="w-96 object-cover cursor-pointer rounded-t-xl md:max-h-80"
                />
            <div className="w-full p-4 rounded-b-xl
                
                ">
                <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold' >
                  {result.name}
                </h3>
          {result.error ? (
            <p style={{ color: 'red' }}>Error fetching data</p>
          ) : (
            <div
              class="rounded-xl border border-neutral-200 dark:border-neutral-600 dark:bg-body-dark">
                <div className="">
                    <button
                      onClick={(e) => {
                        const creditsDiv = e.target.nextElementSibling;
                        creditsDiv.style.display =
                        creditsDiv.style.display === 'none' ? 'block' : 'none';
                      }}
                      className="p-2"
                      >
                        Show Acting Credits - {result.data.acting_credits.length}
                    </button>
                    <div style={{ display: 'none' }}>
                        <ul className="p-2 text-sm">
                          {result.data.acting_credits.map((credit, idx) => (
                            <li 
                              key={idx}
                              className="pt-1 px-2"
                              >
                                  {credit.title} ({credit.release_date}) - {credit.character}
                              </li>
                          ))}
                        </ul>
                    </div>
                </div>
              </div>
            )}
          </div>
        </div>
        ))}
      </div>


      {/* Area to enter answers */}
        {/* Player enters actor name, API returns photo and accordian with list of movies.
        If actor has an acting credit that matches previous actor or one of the two 6D actors show green checkmark, else red X  */}
      
      <div className="w-full max-w-xl my-6 mx-auto shadow-sm shadow-gray-600 dark:shadow-gray-900 rounded-xl p-8 pt-6 pb-8 mb-4
          bg-gradient-to-b from-slate-400 to-slate-400/80 border border-black
          dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:to-gray-700/80">

      <form className="w-full max-w-xl">
        {[
          ["first", "second"],
          ["third", "fourth"],
          ["fifth"],
        ].map((pair, rowIndex) => (
          <div className="flex flex-wrap -mx-3 mb-6" key={`row-${rowIndex}`}>
            {pair.map((degree) => (
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" key={degree}>
                <label
                  className="tracking-wide block text-sm font-bold mb-2"
                  htmlFor={degree}
                >
                  {degree.charAt(0).toUpperCase() + degree.slice(1)} Degree
                  {validity[degree] !== undefined && (
                    validity[degree] ? (
                      <span style={{ color: "green" }}>&#x2713;</span> // Green check mark
                    ) : (
                      <span style={{ color: "red" }}>&#x2717;</span> // Red X mark
                    )
                  )}
                </label>
                <input
                  className="shadow appearance-none block border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id={degree}
                  type="text"
                  placeholder="Search Actor"
                  value={answers[degree]}
                  onChange={handleChange}
                  disabled={gameOver} // Disable inputs if the game is over
                />
              </div>
            ))}
          </div>
        ))}

        <div className="flex flex-col sm:flex-row justify-between items-center sm:text-lg font-bold tracking-wide mb-4">
          {!gameOver ? (
            <button
              className="flex flex-wrap block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
                focus:outline-none focus:shadow-outline"
              type="button"
              onClick={checkAnswers}
            >
              Check Answers
            </button>
          ) : (
            <span className={`text-lg font-bold ${winner ? "text-green-500" : "text-red-500"}`}>
              {winner ? "Game Over: You Win!" : "Game Over: You Lose!"}
            </span>
          )}
          <div className="flex">
            {timer === "00:00:00" ? (
              <span className="uppercase text-red-500">Time's up!</span>
            ) : (
              <span className="text-lg font-bold">Timer: {timer} seconds</span>
            )}
          </div>
        </div>
      </form>

        {/* Show the timer and controls */}
        <div className="flex flex-col sm:flex-row justify-end sm:text-lg font-bold tracking-wide mb-4">

          <div className="flex gap-6 font-bold tracking-wide">
            {isPaused ? (
              <button onClick={resumeTimer}>Resume</button>
            ) : (
              <button onClick={pauseTimer}>Pause</button>
            )}
            <button onClick={onClickReset}>Reset</button>
          </div>
        </div>
    </div>

    </div>
  );
}