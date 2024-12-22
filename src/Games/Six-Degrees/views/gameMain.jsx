import React, { useEffect, useState, useRef } from "react";

export default function GameMainScreen() {

  // Game State
  const [answers, setAnswers] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
  });

  
  // Handle changes in the input fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: value
    }));
  };


  // Main Game Screen
  const gameForm = (
    <div className="w-full my-6 shadow-sm shadow-gray-600 dark:shadow-gray-900 rounded-xl p-8 pt-6 pb-8 mb-4
    bg-gradient-to-b from-slate-300 to-slate-300/80 border border-black
    dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:to-gray-700/80">

      <form className="w-full mx-auto max-w-xl">
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
                  className="shadow appearance-none block border rounded w-full py-2 px-3 
                    leading-tight dark:bg-gray-200 dark:text-black
                    focus:outline-none focus:shadow-outline"
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
        <div className="sm:text-lg font-bold tracking-wide mb-4">
          {!gameOver ? (
            <div className="flex flex-col sm:flex-row w-full">
              <div className="flex flex-col pb-4 sm:pb-0">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 mx-auto
                      text-white font-bold py-2 px-4 rounded 
                      focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={checkAnswers}
                  >
                    Check Answers
                  </button>
                  <span className="text-xs italic text-center">You can check your answers at any time</span>
              </div>
              <div className="flex flex-col mx-auto items-center sm:items-end sm:justify-between sm:w-1/2 ">
                <span className="text-lg font-bold">Timer: {timer}s</span>
                <span className="text-xs font-bold">Guesses: {guessCount}/10</span>
              </div>
            </div>
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
  );



  return (
    <div className="flex flex-col p-6 mx-auto overflow-auto">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl font-bold tracking-wide mb-6">
          Six Degrees of Separation Game
        </p>
      </div>
      <div className="w-full mx-auto">

        {/* Show Game Description */}
          {!gameStarted ? gameDescription : null }

        {/* Display Actors to Solve */}
          { gameStarted ? chosenOnes : null}
          { gameStarted && !gameOver ? gameForm : null }
          
        {/* Show Game Over */}
          { !gameOver ? null : endGame }

      </div>
    </div>
  )
}
