


// Game description
const gameDescription = (
    <div className="w-full max-w-xl my-6 mx-auto shadow-sm shadow-gray-600 dark:shadow-gray-900 rounded-xl p-8 pt-6 pb-8 mb-4
        bg-gradient-to-b from-slate-300 to-slate-300/80 border border-black
        dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:to-gray-700/80">
      <span className='text-lg font-bold tracking-wide'>Game Description</span>
      <p className='p-2'>
        <ol>
          <li className="py-1">
            Welcome to the game! Your task is to connect two actors through a series of movie co-stars. 
          </li>
          <li className="py-1">
            The goal is to connect the actors in under six degrees of separation. The first degree must be an actor who was on screen
            with either Actor 1 or Actor 2, and if they were on screen with both you win the game. 
          </li>
          <li className="py-1">
            Each subsequent degree you use must connect to the previous degree, and game ends when a connection is also made to the actor that was not tied to the first degree.
          </li>
          <li className="py-2">
            <strong>Example:</strong><br></br>
             Actor 1 &gt; First Degree &gt; Second Degree &gt; Third Degree &gt; Actor 2
          </li>
          <li className="py-2">
            <strong>Example:</strong><br></br> 
            Actor 2 &gt; First Degree &gt; Second Degree &gt; Actor 1
          </li>
        </ol>
      </p>
      <button 
        onClick={startGame} 
        className="my-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Start Game
      </button>
    </div>
    );