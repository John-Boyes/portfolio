

 // End Game Screen
 const endGame = (
    <div className="w-full max-w-xl my-6 mx-auto shadow-sm shadow-gray-600 dark:shadow-gray-900 rounded-xl p-8 pt-6 pb-8 mb-4
        bg-gradient-to-b from-slate-300 to-slate-300/80 border border-black
        dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:to-gray-700/80">
      <span className='text-lg font-bold tracking-wide'>
        {gameOver || timeUp ? "Game Over" : "You Won"}
      </span>
      <p className='p-2'>
        <ol>
          <li className="py-1">
            The game has ended! { winner ? "You Won!" : "You didn't make the connections. Try Again!"}
          </li>
          <li className="py-1">
            Time: { timer }
          </li>
          <li className="py-1">
            Guesses: { guessCount } / 10
          </li>
        </ol>
      </p>
      <button 
        onClick={startGame} 
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Restart Game
      </button>
    </div>
    );