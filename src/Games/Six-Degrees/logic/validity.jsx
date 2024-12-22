import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';


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
    
        const response = await axios.get(`https://www.johnboyes.dev:5000/api/search/${actorName}`);
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
    setTimeUp(false);
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
    setGameStarted(true);
    };



// Handle start game
const startGame = () => {
setGameStarted(true); // Hide description and show the form
resetGame();
};

