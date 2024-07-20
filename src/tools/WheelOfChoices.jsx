import React, {useState} from 'react'

const WheelOfChoices = () => {
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
            <h1>Wheel Of Choices</h1>
        </div>
    );
};
 
export default WheelOfChoices;