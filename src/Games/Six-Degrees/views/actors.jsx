import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';

export default function GetActors() {
  const Ref = useRef(null);

  // State to track if the game has started
  const [gameStarted, setGameStarted] = useState(false);
  const [guessCount, setGuessCount] = useState(0); // Track the number of guesses
  const [timer, setTimer] = useState("00:10:00");
  const [remainingTime, setRemainingTime] = useState(600000); // 10 minutes in milliseconds
  const [timeUp, setTimeUp] = useState(false); // track if timer === 0
  const [isPaused, setIsPaused] = useState(false);
  const [actor1Credits, setActor1Credits] = useState([]);
  const [actor2Credits, setActor2Credits] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [validity, setValidity] = useState({});
  const [winner, setWinner] = useState(false);

  const [answers, setAnswers] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
  });


// API for getting Actor Data
const actorList = [
  'Jack Black', 'Tom Hardy', 'Tom Holland', 'Jessica Biel', 
  'Mark Wahlberg', 'Jeff Bridges', 'Kit Harington', 'Mark Ruffalo', 
  'Tony Danza', 'Tim Allen', 'Selena Gomez', 'Mel Gibson', 
  'Timothy Olyphant', 'Emile Hirsch', 'Maggie Smith', 'Brad Pitt',
  'Denzel Washtington', 'Glen Powell', 'Tom Cruise', 'Chris Hemsworth',
  'Timothee Chalamet', 'Samuel L. Jackson', 'Austin Butler', 'Channing Tatum',
  'Zendaya', 'Chris Pratt', 'Sydney Sweeney', 'Dave Bautista', 'Willem Dafoe',
  'Margot Robbie', 'Florence Pugh', 'Jason Stathem', 'Joaquin Phoenix', 
  'Hugh Grant', 'Colin Farrell', 'Paul Dano', 'Miles Teller', 'Pedro Pascal',
  'Matt Damon', 'Ben Affleck', 'Rebecca Ferguson', 'Christin Milioti',
  'Kate Beckinsale', 'Marisa Tomei', 'Alan Ritchson', 'Ali Larter', 'Demi Moore',
  'Billy Bob Thornton', 'Jon Hamm', 'John Cena', 'Courteney Cox', 'David Arquette',
  'Martin Short', 'Peter Dinklage', 'Sylvester Stallone', 'Steve Martin', 'Daniel Radcliffe',
  'Julianne Nicholson', 'Keanu Reeves', 'Morgan Freeman', 'Nicolas Cage', 'Owen Wilson',
  'Dave Franco', 'James Franco', 'Zac Efron', 'Zach Galifianakis', 'Zachary Levi',
  'J.K. Simmons', 'Jude Law', 'Julia Roberts', 'Julianne Moore', 'Katherine Heigl',
  'Kevin Smith', 'Kevin Spacey', 'Kristen Bell', 'Kristen Stewart', 'Kristen Wiig',
  'Jennifer Aniston', 'Jennifer Connelly', 'Jennifer Garner', 'Jennifer Lawrence', 
  'Jennifer Lopez', 'Luke Wilson', 'Luke Evans', 'Luke Hemsworth', 
];
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchActorData = async (actorName) => {
    try {
      const response = await axios.get(`https://www.johnboyes.dev:5000/api/search/${actorName}`);
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
      let maxAttempts = 20; // Maximum retry attempts to avoid infinite loop
  
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

  const chosenOnes = (
    <div className="flex flex-col overflow-auto">
      <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col sm:flex-row justify-center gap-12 overflow-hidden">
        {results.map((actor, index) => (
          <div key={index} className="rounded-xl border border-black md:max-w-xs xl:max-w-md
            bg-gradient-to-b from-slate-300 to-slate-300/80 
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
      <button className='pt-2' onClick={resetGame} disabled={loading}>Click to Load New Actors</button>
    </div>
    </div>
  )

  return ( chosenOnes );
}