import React, {useState} from 'react'

const RandomNumber = () => {
    const [num, setNum] = useState(0);

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);
    
    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };
 
    const handleClick = () => {
        setNum(randomNumberInRange(minValue, maxValue));
    };
 
    return (
        <div className="wrapper flex flex-col mx-auto">
            <div className='flex justify-center text-center p-4 text-4xl font-semibold'>Random Number Generator</div>
            <div className='flex flex-col sm:flex-row justify-center'>
                <div className='flex flex-col justify-center'>
                    <span>Minimum</span>
                    <input 
                        type="number" 
                        value={minValue} 
                        onChange={(e) => setMinValue(Number(e.target.value))} 
                        className='flex px-2 py-1 m-2 bg-gray-50 dark:bg-gray-900 border-2 border-slate-400 dark:border-gray-600 rounded-md font-semibold'
                        />
                </div>

                <div className='flex flex-col justify-center'>
                    <span>Maximum</span>
                    <input 
                        type="number" 
                        value={maxValue} 
                        onChange={(e) => setMaxValue(Number(e.target.value))} 
                        className='flex px-2 py-1 m-2 bg-gray-50 dark:bg-gray-900 border-2 border-slate-400 dark:border-gray-600 rounded-md font-semibold'
                        />
                </div>

            </div>
            <button 
                className='flex justify-center mx-auto py-2 px-4 
                bg-gradient-to-b from-slate-400 via-slate-300 via-slate-300 to-slate-400/80
                    dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:via-gray-700 dark:to-gray-700/80
                    rounded-lg border-2 border-slate-400 dark:border-gray-600 font-semibold
                    hover:bg-slate-700 dark:hover:bg-slate-300
                rounded-md font-semibold'
                onClick={handleClick}>
                Generate Number
            </button>

            <div className='flex items-baseline m-4'>
                <p
                    className='flex align-text-bottom text-xl font-semibold'>
                        Your number is: 
                </p>
                <p
                    className='flex align-text-bottom text-3xl font-bold pl-4'> 
                        {num}
                </p>

            </div>
        </div>
    );
};
 
export default RandomNumber;