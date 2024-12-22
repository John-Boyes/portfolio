import React from 'react'

export default function timer() {
    // Timer Related
    const formatTime = (time) => {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / 1000 / 60 / 60) % 24);
      return `${hours > 9 ? hours : "0" + hours}:${
        minutes > 9 ? minutes : "0" + minutes
      }:${seconds > 9 ? seconds : "0" + seconds}`;
    };
    
    useEffect(() => {
      setTimer(formatTime(remainingTime));
    }, [remainingTime]);
    
  
    useEffect(() => {
      if (gameStarted && remainingTime > 0 && !gameOver) {
        const timerInterval = setInterval(() => {
          setRemainingTime((prev) => prev - 1000);
        }, 1000);
    
        return () => clearInterval(timerInterval);
      }
    
      if (remainingTime <= 0 && !gameOver) {
        setGameOver(true);
        setTimeUp(true);
      }
    }, [gameStarted, remainingTime, gameOver]);
  
    // Use Effect Debugging
    // useEffect(() => {
    //   if (gameStarted && remainingTime > 0 && !gameOver) {
    //     console.log("Setting new interval"); // Debug log
    //     const timerInterval = setInterval(() => {
    //       setRemainingTime((prev) => Math.max(0, prev - 1000));
    //     }, 1000);
    
    //     return () => {
    //       console.log("Clearing interval"); // Debug log
    //       clearInterval(timerInterval);
    //     };
    //   }
    // }, [gameStarted, remainingTime, gameOver]);
    
  
    const getTimeRemaining = (time) => {
      const total = time;
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / 1000 / 60 / 60) % 24);
      return { total, hours, minutes, seconds };
    };
  
  
    const onClickReset = () => {
      setIsPaused(false);
      setRemainingTime(600000); // Reset to 10 minutes
      // setRemainingTime(10000)
      setTimer(formatTime(remainingTime));
    };
  
    return (
        <span className="text-lg font-bold">Timer: {timer}s</span>
  )
}
