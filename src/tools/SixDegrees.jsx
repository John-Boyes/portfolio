import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';

export default function SixDegrees() {
  const Ref = useRef(null);

  const [guessCount, setGuessCount] = useState(0); // Track the number of guesses
  const [timer, setTimer] = useState("00:10:00");
  const [remainingTime, setRemainingTime] = useState(10000); // 10 minutes in milliseconds
  const [isPaused, setIsPaused] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);
  const [actor1Credits, setActor1Credits] = useState([]);
  const [actor2Credits, setActor2Credits] = useState([]);

  // API for getting Actor Data
  const actorList = [
    'Jack Black', 'Tom Hardy', 'Tom Holland', 'Jessica Biel', 
    'Mark Wahlberg', 'Jeff Bridges', 'Kit Harington', 'Mark Ruffalo', 
    'Tony Danza', 'Tim Allen', 'Selena Gomez', 'Mel Gibson', 
    'Martin Short', 'Peter Dinklage', 'Sylvester Stallone', 'Steve Martin'
  ];
  const [choices, setChoices] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchActorData = async (actorName) => {
    try {
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
      let selectedActors = [];
      let credits1, credits2;
      let titles1 = [];
      let titles2 = [];
      let attempts = 0;
      let maxAttempts = 10; // Maximum retry attempts to avoid infinite loop
  
      let actorsSelected = false; // Flag to indicate whether valid actors are selected
  
      while (!actorsSelected && attempts < maxAttempts) {
        // Randomly shuffle the actor list and select two actors
        const shuffledList = [...actorList].sort(() => 0.5 - Math.random());
        actor1 = shuffledList[0];
        actor2 = shuffledList[1];
  
        console.log("Selected Actors:", actor1, actor2);
  
        if (!actor1 || !actor2) {
          console.error("Actor selection failed, actor1 or actor2 is undefined:", actor1, actor2);
          return;
        }
  
        // Fetch data for both actors
        try {
          const [actor1Response, actor2Response] = await Promise.all([
            fetchActorData(actor1),
            fetchActorData(actor2)
          ]);
  
          console.log("Actor 1 Response:", actor1Response.data);
          console.log("Actor 2 Response:", actor2Response.data);
  
          // Check if the data exists for both actors
          if (!actor1Response.data || !actor2Response.data) {
            console.error("API response is missing for one or both actors.");
            return;
          }
  
          credits1 = actor1Response.data.acting_credits || [];
          credits2 = actor2Response.data.acting_credits || [];

          // Set the credits into state for future validation
          setActor1Credits(credits1);
          setActor2Credits(credits2);
  
          if (!credits1 || !credits2) {
            console.error("Actor credits not found for", actor1, actor2);
            return;
          }
  
          // Extract movie titles from credits
          titles1 = credits1.map((movie) => movie.title.toLowerCase());
          titles2 = credits2.map((movie) => movie.title.toLowerCase());
  
          console.log("Actor 1 Titles:", titles1);
          console.log("Actor 2 Titles:", titles2);
  
          // Check if there are overlapping movies
          let overlapMovies = titles1.filter((title) => titles2.includes(title));
  
          if (overlapMovies.length > 0) {
            console.log(`Overlap found between ${actor1} and ${actor2}:`, overlapMovies);
            attempts++; // Increment attempts if overlap is found
            console.log("Overlap found. Retrying...");
          } else {
            // If no overlap, select the actors and exit the loop
            const actor1Data = actor1Response.data || {};
            const actor2Data = actor2Response.data || {};
  
            // Get the image URL if it exists, or use a default value
            const actor1ImageUrl = actor1Data.image_url || 'default_image_url';
            const actor2ImageUrl = actor2Data.image_url || 'default_image_url';
  
            // Add the actors to the respective degree arrays
            selectedActors.push({ name: actor1, credits: credits1, imageUrl: actor1ImageUrl });
            selectedActors.push({ name: actor2, credits: credits2, imageUrl: actor2ImageUrl });
  
            actorsSelected = true; // Set actors as selected
          }
        } catch (error) {
          console.error("Error during actor data fetching:", error);
          return;
        }
      }
  
      // Set results into state to map to components
      setResults(selectedActors); // For example, setting selected actors to the results
  
      setLoading(false); // End loading
    } catch (error) {
      console.error("Error in fetching actor data:", error);
      setLoading(false); // End loading if an error occurs
    }
  };
  
  

  // Timer logic remains unchanged
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
          clearInterval(id);
          setTimer("00:00:00");
          return 0;
        }
        const updatedTime = prev - 1000;
        startTimer(updatedTime);
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

  const [answers, setAnswers] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
  });
  const [validity, setValidity] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);

  // Handle changes in the input fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: value
    }));
  };

  // Validation during checkAnswers function
  const checkAnswers = async () => {
    if (gameOver) return;
  
    let currentValidity = {};
    let previousMovies = [];
    let connectedActor = null;
    let isGameOver = false;
  
    try {
      for (const degree of Object.keys(answers)) {
        const actorName = answers[degree];
        if (!actorName) break;
  
        const response = await axios.get(`http://localhost:5000/api/search/${actorName}`);
        const actorMovies = response.data.acting_credits || [];
  
        // Extract only movie titles for validation
        const actorMovieTitles = actorMovies.map((movie) => movie.title);
        const actor1MovieTitles = actor1Credits.map((movie) => movie.title);
        const actor2MovieTitles = actor2Credits.map((movie) => movie.title);
        const previousMovieTitles = previousMovies.map((movie) => movie.title);
  
        console.log("Actor Movies:", actorMovies);
        console.log("Actor1 Movie Titles:", actor1MovieTitles);
        console.log("Actor2 Movie Titles:", actor2MovieTitles);
        console.log("Previous Movie Titles:", previousMovieTitles);
  
        // Validate against actor1Credits and actor2Credits
        if (degree === "first" || degree === "second") {
          const matchesActor1 = actorMovieTitles.some((title) => actor1MovieTitles.includes(title));
          const matchesActor2 = actorMovieTitles.some((title) => actor2MovieTitles.includes(title));
  
          if (matchesActor1 && matchesActor2) {
            // Successfully connected both actors
            currentValidity[degree] = true;
            setGameOver(true);
            setWinner(true);
            return;
          }
  
          if (matchesActor1 || matchesActor2) {
            currentValidity[degree] = true;
            connectedActor = matchesActor1 ? "actor2" : "actor1";
            previousMovies = actorMovies;
          } else {
            currentValidity[degree] = false;
            break;
          }
        } else {
          // If the first degree matches actor1
          if (connectedActor === "actor1") {
            // Check if the next degree matches actor2 and the last degree
            const matchesActor2 = actorMovieTitles.some((title) => actor2MovieTitles.includes(title));
            const matchesLastDegree = actorMovieTitles.some((title) => previousMovieTitles.includes(title));
  
            if (matchesActor2 && matchesLastDegree) {
              currentValidity[degree] = true;
              setGameOver(true);
              setWinner(true);
              return;
            }
          }
  
          // If the first degree matches actor2
          if (connectedActor === "actor2") {
            // Check if the next degree matches actor1 and the previous degree
            const matchesActor1 = actorMovieTitles.some((title) => actor1MovieTitles.includes(title));
            const matchesPreviousDegree = actorMovieTitles.some((title) => previousMovieTitles.includes(title));
  
            if (matchesActor1 && matchesPreviousDegree) {
              currentValidity[degree] = true;
              setGameOver(true);
              setWinner(true);
              return;
            }
          }
  
          // Continue validating against previous degree's movies
          const matchesPrevious = actorMovieTitles.some((title) => previousMovieTitles.includes(title));
          const matchesRemainingActor = actorMovieTitles.some((title) =>
            connectedActor === "actor1" ? actor1MovieTitles.includes(title) : actor2MovieTitles.includes(title)
          );
  
          if (!matchesPrevious) {
            currentValidity[degree] = false;
            isGameOver = true;
            break;
          }
  
          if (matchesRemainingActor) {
            currentValidity[degree] = true;
            setGameOver(true);
            setWinner(true);
            return;
          }
  
          currentValidity[degree] = true;
          previousMovies = actorMovies;
        }
      }
  
      // Update guess count and game state
      setGuessCount((prevGuessCount) => {
        const nextGuessCount = prevGuessCount + 1;
        if (nextGuessCount >= 10) {
          setGameOver(true);
          setWinner(false);
        }
        return nextGuessCount;
      });
  
      setValidity(currentValidity);
      if (isGameOver) setGameOver(true);
    } catch (error) {
      console.error("Error validating answers:", error);
    }
  };
  
  

  const resetGame = () => {
    setGuessCount(0);
    setGameOver(false);
    setWinner(false);
    setAnswers({
      first: "",
      second: "",
      third: "",
      fourth: "",
      fifth: ""
    });
    setValidity({
      first: undefined,
      second: undefined,
      third: undefined,
      fourth: undefined,
      fifth: undefined
    });

    onClickReset();
    handleFetchData();
  };

  // Timer effect
  useEffect(() => {
    let timerInterval;
    if (!gameOver && timer > 0) {
      timerInterval = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else if (gameOver || timer <= 0) {
      clearInterval(timerInterval); // Stop the timer when the game ends or timer reaches 0
    }

    // Cleanup interval on component unmount or gameOver change
    return () => clearInterval(timerInterval);
  }, [gameOver, timer]); // Depend on gameOver and timer

  return (
    <div className="flex flex-col p-6 m-auto overflow-auto">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl font-bold tracking-wide mb-6">
          Six Degrees of Separation Game
        </p>
      </div>

      {/* Display Actors to Solve */}
      <button className='pb-2' onClick={resetGame} disabled={loading}>
        {loading ? 'Loading...' : 'Click to Load New Actors'}
      </button>
      
      <div className="flex flex-col sm:flex-row justify-center gap-12 overflow-hidden">
      {results.map((actor, index) => (
          <div key={index} className="rounded-xl border border-black md:max-w-xs xl:max-w-md
            bg-gradient-to-b from-slate-400 to-slate-400/80 
            dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:via-gray-700 dark:to-gray-700/80
            shadow-sm shadow-gray-600 dark:shadow-gray-900">
            
            <img 
              src={actor.imageUrl} 
              alt={actor.name} 
              title="Show Details" 
              className="w-96 object-cover cursor-pointer rounded-t-xl md:max-h-80"
            />
            
            <div className="w-full p-4 rounded-b-xl">
              <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>
                {actor.name}
              </h3>
              
              {/* Display error message if actor data fetch failed */}
              {actor.error ? (
                <p style={{ color: 'red' }}>Error fetching data</p>
              ) : (
                <div className="rounded-xl border border-neutral-200 dark:border-neutral-600 dark:bg-body-dark">
                  <div className="">
                    <button
                      onClick={(e) => {
                        const creditsDiv = e.target.nextElementSibling;
                        creditsDiv.style.display =
                          creditsDiv.style.display === 'none' ? 'block' : 'none';
                      }}
                      className="p-2"
                    >
                      Show Acting Credits - {actor.credits.length}
                    </button>
                    
                    <div style={{ display: 'none' }}>
                      <ul className="p-2 text-sm">
                        {actor.credits.map((credit, idx) => (
                          <li key={idx} className="pt-1 px-2">
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

                {/* Show the timer and controls */}
                <div className="flex flex-col sm:flex-row justify-between items-center sm:text-lg font-bold tracking-wide mb-4">
          {!gameOver ? (
            <>
              <button
                className="flex flex-wrap block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
                  focus:outline-none focus:shadow-outline"
                type="button"
                onClick={checkAnswers}
              >
                Check Answers
              </button>
              <div className="flex items-center space-x-4">
                <span className="text-lg font-bold">Timer: {timer}s</span>
                <span className="text-lg font-bold">Guesses: {guessCount}/10</span>
              </div>
            </>
          ) : (
            <div className="text-center">
              <h2 className={`text-2xl font-bold ${winner ? "text-green-500" : "text-red-500"}`}>
                {winner ? "You Win!" : "Game Over: You Lose!"}
              </h2>
            </div>
          )}
        </div>
      </form>
    </div>

    </div>
  );
}