import React, {Fragment, useRef, useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'

function RandomNumber() {
    const [choices, setChoices] = useState('');
    const [shuffledChoices, setShuffledChoices] = useState([]);
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [numberRange, setNumberRange] = useState('');
    const cancelButtonRef = useRef(null)
    
    // Generate a number range from 1 to the input number
    const generateNumberRange = () => {
        const num = parseInt(numberRange);
        if (!isNaN(num) && num > 0) {
            const range = Array.from({ length: num }, (_, i) => (i + 1).toString());
            setChoices(range.join('\n'));
            setNumberRange(''); // Clear the input after generating
        }
    };
    
    // Split and filter choices, also removes any empty lines
    const getValidChoices = () => {
        return choices.split('\n').filter(choice => choice.trim() !== '');
    };

    // Shuffle choices user adds into input field
    const shuffleChoices = () => {
        const choiceArray = getValidChoices();
        const shuffled = [...choiceArray].sort(() => Math.random() - 0.5);
        setShuffledChoices(shuffled);

        // Update textarea with shuffled choices
        setChoices(shuffled.join('\n'));  // Update the choices state with the shuffled array
    };


    // Select a random choice from the shuffleChoices array
    const pickRandomChoice = () => {
        if (shuffledChoices.length > 0) {
        const randomIndex = Math.floor(Math.random() * shuffledChoices.length);
        setSelectedChoice(shuffledChoices[randomIndex]);
        setShowModal(true);
        }
    };

    // Remove selected choice from shuffledChoices
    const removeSelectedChoice = () => {
        const updatedChoices = shuffledChoices.filter(choice => choice !== selectedChoice);
        setShuffledChoices(updatedChoices);
        setChoices(updatedChoices.join('\n')); // Update textarea with remaining choices
        setShowModal(false);
    };

    // Check if there are at least 2 valid choices
    const hasEnoughChoices = getValidChoices().length >= 2;
 
    return (
        <div className="wrapper flex flex-col mx-auto">
            <div className='flex justify-center text-center p-4 text-4xl font-semibold'>
                    Random Choice Generator
                </div>
            <div className='flex flex-col sm:flex-row justify-center'>
                <div className='flex flex-col justify-center w-full'>

            {/* Text Area for Choices */}
                    <label className='text-lg font-semibold'>
                            Enter Choices
                        </label>
                    <textarea
                            className="p-3 bg-gray-50 dark:bg-gray-900 border-2 border-slate-400 dark:border-gray-600
                                rounded-md w-full focus:outline-none"
                            rows="10"
                            placeholder="Enter each choice on a new line"
                            value={choices}
                            onChange={(e) => setChoices(e.target.value)}
                        />
                </div>
            </div>
        
            {/* Shuffle Button */}
            <button className="mt-3 inline-block justify-center text-center py-2 px-4
                    bg-gradient-to-b from-slate-400 via-slate-300 via-slate-300 to-slate-400/80
                    dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:via-gray-700 dark:to-gray-700/80
                    rounded-lg border-2 border-slate-400 dark:border-gray-600 font-semibold
                    hover:bg-slate-700 dark:hover:bg-slate-300" 
                    onClick={shuffleChoices} disabled={!hasEnoughChoices}>
                Shuffle
            </button>

            {/* Random Choice Button */}
            <button className="mt-3 inline-block justify-center text-center py-2 px-4
                    bg-gradient-to-b from-slate-400 via-slate-300 via-slate-300 to-slate-400/80
                    dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:via-gray-700 dark:to-gray-700/80
                    rounded-lg border-2 border-slate-400 dark:border-gray-600 font-semibold
                    hover:bg-slate-700 dark:hover:bg-slate-300" 
                    onClick={pickRandomChoice} disabled={shuffledChoices.length === 0}>
                Random Choice
            </button>
            
            {/* Number Range Generator */}
            <div className='flex flex-row justify-center gap-2 mt-3'>
                <input
                    type="number"
                    className="p-2 w-24 bg-gray-50 dark:bg-gray-900 border-2 
                        border-slate-400 dark:border-gray-600 rounded-md focus:outline-none"
                    placeholder="Enter #"
                    value={numberRange}
                    onChange={(e) => setNumberRange(e.target.value)}
                    min="1"
                />
                <button 
                    className="inline-block justify-center text-center py-2 px-4
                        bg-gradient-to-b from-slate-400 via-slate-300 via-slate-300 to-slate-400/80
                        dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:via-gray-700 dark:to-gray-700/80
                        rounded-lg border-2 border-slate-400 dark:border-gray-600 font-semibold
                        hover:bg-slate-700 dark:hover:bg-slate-300"
                    onClick={generateNumberRange}
                    disabled={!numberRange}>
                    Generate Range
                </button>
            </div>


            {/* Modal for displaying the random choice */}
            <Transition.Root show={showModal} as={Fragment}>
                <Dialog as="div" className="relative z-40" initialFocus={cancelButtonRef} onClose={() => setShowModal(false)}>
                    <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>
                        <div className="fixed inset-0 z-40 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    >
                                
            {/* Begin Dialog Box */}
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white dark:bg-gray-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className=" text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base dark:text-white font-semibold leading-6 text-gray-900">
                                                Random Choice
                                            </Dialog.Title>
                                            <div className="mt-2 text-center">
                                                <p className="text-gray-500 dark:text-gray-200">
                                                    {selectedChoice}
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-200 dark:bg-gray-600 p-2 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md bg-purple-500 dark:bg-orange-500 px-3 py-2 m-1 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            onClick={() => setShowModal(false)}
                                            ref={cancelButtonRef}
                                            >
                                                Close
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md bg-purple-500 dark:bg-orange-500 px-3 py-2 m-1 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            onClick={removeSelectedChoice}
                                            >
                                                Remove from List
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </div>
    );
};
 
export default RandomNumber;