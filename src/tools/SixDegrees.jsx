import React, { useEffect, useState, useRef } from "react";

export default function SixDegrees() {
  const Ref = useRef(null);

  const [timer, setTimer] = useState("00:10:00");
  const [remainingTime, setRemainingTime] = useState(10000); // 10 minutes in milliseconds
  const [isPaused, setIsPaused] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

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

  useEffect(() => {
    clearTimer(remainingTime); // Start timer on page load
    return () => clearInterval(Ref.current); // Cleanup on unmount
  }, []);

  // Validation and UI logic remains unchanged
  const [answers, setAnswers] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
    fifth: "",
  });

  const [validity, setValidity] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
  });

  const validateAnswer = (value) => value.trim() !== ""; // Example validation

  const handleChange = (e) => {
    const { id, value } = e.target;

    setAnswers((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const checkAnswers = () => {
    pauseTimer(); // Explicitly pause the timer
    const newValidity = Object.fromEntries(
      Object.entries(answers).map(([key, value]) => [key, validateAnswer(value)])
    );
    setValidity(newValidity);
    setHasChecked(true); // Enable validation indicators
  };

  return (
    <div className="flex flex-col min-h-full p-6 m-auto">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl font-bold tracking-wide mb-6">
          Six Degrees of Separation Game
        </p>
      </div>

      {/* Actors to Compare */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
         {/* Actor Card 1 */}
         <div className="border border-black rounded-xl shadow-sm shadow-gray-600 dark:shadow-gray-900">
            <img 
                // src={imgUrl}
                src="public\assets\pug.svg"
                alt="portfolio"
                title="Show Details"
                className="w-full md:h-80 object-cover cursor-pointer"
                />
            <div className="w-full min-h-full p-4 rounded-b-xl
                bg-gradient-to-b from-slate-400 to-slate-400/80
                dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:via-gray-700 dark:to-gray-700/80
                ">
                <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold' >
                   {/* {name} */} Name
                  </h3>
                <p className='flex flex-wrap gap-2 flex-row items-center justify-start 
                    text-xs md:text-sm dark:text-white dark:black'>
                      
                      {/* Accordian Example */}
                      <div id="accordionExample" className="min-w-full">
                        <div
                          class="rounded-t-lg border border-neutral-200 dark:border-neutral-600 dark:bg-body-dark">
                          <h2 class="mb-0" id="headingOne">
                            <button
                              class="group relative flex w-full items-center rounded-lg border-0 px-5 py-4 text-left text-base text-neutral-800 transition bg-white"
                              type="button"
                              >
                              Number of Acting Credits
                              <span
                                class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 
                                group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor">
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                              </span>
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="hidden"
                            data-twe-collapse-item
                            data-twe-collapse-show
                            aria-labelledby="headingOne"
                            data-twe-parent="#accordionExample">
                            <div class="px-5 py-4">
                              <strong>This is the first item's accordion body.</strong> It is
                              shown by default, until the collapse plugin adds the appropriate
                              classes that we use to style each element. These classes control
                              the overall appearance, as well as the showing and hiding via CSS
                              transitions. You can modify any of this with custom CSS or
                              overriding our default variables. It's also worth noting that just
                              about any HTML can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                      </div>


                    {/* {stack.map(item => (
                        <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 bg-white dark:bg-gray-500 dark:border-gray-400 rounded-md'>
                        {item}
                        </span>
                        ))} */}
                </p>
            </div>
          </div>

         {/* Actor Card 2 */}
         <div className="border border-black rounded-xl shadow-sm shadow-gray-600 dark:shadow-gray-900">
            <img 
                // src={imgUrl}
                src="public\assets\pug.svg"
                alt="portfolio"
                title="Show Details"
                className="w-full md:h-80 object-cover cursor-pointer"
                />
            <div className="w-full min-h-full p-4 rounded-b-xl
                bg-gradient-to-b from-slate-400 to-slate-400/80
                dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:via-gray-700 dark:to-gray-700/80
                ">
                <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>
                   {/* {name} */} Name
                  </h3>
                <p className='flex flex-wrap gap-2 flex-row items-center justify-start 
                    text-xs md:text-sm dark:text-white dark:black'>
                      
                      {/* Accordian Example */}
                      <div id="accordionExample" className="min-w-full">
                        <div
                          class="rounded-t-lg border border-neutral-200 dark:border-neutral-600 dark:bg-body-dark">
                          <h2 class="mb-0" id="headingOne">
                            <button
                              class="group relative flex w-full items-center rounded-lg border-0 px-5 py-4 text-left text-base text-neutral-800 transition bg-white"
                              type="button"
                              >
                              Number of Acting Credits
                              <span
                                class="-me-1 ms-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 
                                group-data-[twe-collapse-collapsed]:rotate-0 motion-reduce:transition-none [&>svg]:h-6 [&>svg]:w-6">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor">
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                              </span>
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            className="hidden"
                            data-twe-collapse-item
                            data-twe-collapse-show
                            aria-labelledby="headingOne"
                            data-twe-parent="#accordionExample">
                            <div class="px-5 py-4">
                              <strong>This is the first item's accordion body.</strong> It is
                              shown by default, until the collapse plugin adds the appropriate
                              classes that we use to style each element. These classes control
                              the overall appearance, as well as the showing and hiding via CSS
                              transitions. You can modify any of this with custom CSS or
                              overriding our default variables. It's also worth noting that just
                              about any HTML can go within the <code>.accordion-body</code>,
                              though the transition does limit overflow.
                            </div>
                          </div>
                        </div>
                      </div>


                    {/* {stack.map(item => (
                        <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 bg-white dark:bg-gray-500 dark:border-gray-400 rounded-md'>
                        {item}
                        </span>
                        ))} */}
                </p>
            </div>
          </div>
       
      </div>


      {/* Area to enter answers */}
        {/* Player enters actor name, API returns photo and accordian with list of movies.
        If actor has an acting credit that matches previous actor or one of the two 6D actors show green checkmark, else red X  */}
      
      <div className="w-full max-w-xl my-6 mx-auto shadow-sm shadow-gray-600 dark:shadow-gray-900 rounded-xl p-8 pt-6 pb-8 mb-4
          bg-gradient-to-b from-slate-400 to-slate-400/80 border border-black
          dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:to-gray-700/80">

      <form className="w-full max-w-xl">

      {/* Map the form fields */}
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
                  {hasChecked && (
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
                />
              </div>
            ))}
          </div>
        ))}

        
        <div className="flex flex-col sm:flex-row justify-between items-center sm:text-lg font-bold tracking-wide mb-4">
          <button
            className="flex flex-wrap block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
              focus:outline-none focus:shadow-outline"
            type="button"
            onClick={checkAnswers}
          >
            Check Answers
          </button>
          <div className="flex ">
            {timer === "00:00:00" ? <span className=" uppercase text-red-500">Time's up!</span> :
            <span className="text-lg font-bold">Timer: {timer} seconds</span>}
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
      
      
      
      
      
      
      
      
      
      {/* <div className='flex flex-col md:flex-row items-center justify-center scroll-p-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {movies.map((movie, index) => (
                <MovieItem
                    key={index}
                    imgUrl={movie.imgUrl}
                    title={movie.title}
                    actors={movie.actors}
                    link={movie.link}
                />    
            ))}
        </div>
      </div> */}


    </div>
  );
}