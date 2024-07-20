import React, {useState} from 'react'

const RandomNumber = () => {
    const [num, setNum] = useState(0);
    
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
 
    const handleClick = () => {
        setNum(randomNumberInRange(1, 20));
    };
 
    return (
        <div className="wrapper">
            <h1>Random Number Generator</h1>
            <h2>Number is: {num}</h2>

            <button onClick={handleClick}>
                Generate Number
            </button>
        </div>
    );
};
 
export default RandomNumber;