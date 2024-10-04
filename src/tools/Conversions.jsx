import React, {useState} from 'react'

const Conversions = () => {
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
            <div className='flex justify-center text-center p-4 text-4xl font-semibold'>Conversions</div>
            <div className='flex flex-col sm:flex-row justify-center'>
                <div className='flex flex-col justify-center'>
                    <span>This</span>
                    <input 
                        type="number" 
                        value={minValue} 
                        onChange={(e) => setMinValue(Number(e.target.value))} 
                        className='flex px-2 py-1 m-2 bg-gray-50 dark:bg-gray-800 rounded-md font-semibold'
                        />
                </div>

                <div className='flex flex-col justify-center'>
                    <span>That</span>
                    <input 
                        type="number" 
                        value={maxValue} 
                        onChange={(e) => setMaxValue(Number(e.target.value))} 
                        className='flex px-2 py-1 m-2 bg-gray-50 dark:bg-gray-800 rounded-md font-semibold'
                        />
                </div>

            </div>
            <button 
                className='flex justify-center mx-auto py-2 px-4 bg-gray-50 dark:bg-gray-800 rounded-md font-semibold'
                onClick={handleClick}>
                Convert
            </button>

        </div>
    );
};
 
export default Conversions;

// Common Unit Conversion Equivalencies
// U.S. Customary System
//   Length
//     1 ft  =  12 in
//     1 yd  =  3 ft
//     1 mi  =  5280 ft

//   Weight (Mass)
//     1 lb  =  16 oz
//     1 tn  =  2000 lb

//   Temperature
//     32°F  =  freezing point of water
//     212°F  =  boiling point of water	 Volume (Capacity)
//    1 c  =  8 oz
//    1 pt  =  16 oz
//    1 qt  =  32 oz
//    1 gal  =  4 qt

//  Time
//    1 min  =  60 sec
//    1 hr  =  60 min
//    1 day  =  24 hr
//    1 wk  =  7 days
//    1 yr  ~  365.25 days 

// Metric (SI) System
//   Length
//     1 mm  =  1/1000 m
//     1 cm  =  1/100 m  =  10 mm
//     1 km  =  1000 m

//   Weight (Mass)
//    1 mg  =  1/1000 g
//    1 kg  =  1000 g
//    1 t  =  1000 kg

//   Temperature
//     0°C  =  freezing point of water
//     100°C  =  boiling point of water	 Volume (Capacity)
//     1 mL  =  1/1000 L  =  1 cc 
//     1 kL  =  1000 L



//  Time
//    1 msec  =  1/1000 sec
//    1 min  =  60 sec
//    1 hr  =  60 min
//    1 day  =  24 hr
//    1 wk  =  7 days
//    1 yr  ~  365.25 days

// U.S. Customary System  « — »  Metric System
//   Length
//     1 in  =  2.54 cm 
//     1 mi  ~  1.61 km

//   Weight (Mass)
//     1 oz  ~  28.4 g
//     1 kg  ~  2.2 lb	  Volume (Capacity)
//     1 oz  ~  29.6 mL
//     1 gal  ~  3.8 L

//   Temperature
//     #°F  =  9(#°C)/5 + 32  
//     #°C  =  5(#°F - 32)/9 