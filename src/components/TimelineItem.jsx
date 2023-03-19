import React, { Component, useEffect } from 'react'

function TimelineItem ({ year, title, duration, details }) {
    if ( year === 'Today') {
        
        return (
            <ol className="flex flex-col md:flex-row relative border-l border-violet-400 dark:border-orange-700">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-violet-200 rouded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-sky-700" />
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                    <span className="inline-block px-2 py1 font-semibold text-stone-900 
                    dark:text-stone-800 bg-sky-500 dark:bg-orange-700 rounded-md
                    ">
                        {year}
                    </span>
                    <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                        {title}
                    </h3>
                    <div className='my-1 text-sm font-normal leading-none text-stone-500 dark:text-stone-500'>
                        {duration}
                    </div>
                </p>
                <p className='my-2 text-base font-normal text-stone-600 dark:text-stone-400'>
                    {details}
                </p>
            </li>
        </ol>
        )
    }
     else {
        return (
            <ol className="flex flex-col md:flex-row relative border-l border-violet-400 dark:border-orange-700">
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-violet-200 rouded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-sky-700" />
                    <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                        <span className="inline-block px-2 py1 font-semibold text-white 
                        dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md
                        ">
                            {year}
                        </span>
                        <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                            {title}
                        </h3>
                        <div className='my-1 text-sm font-normal leading-none text-stone-500 dark:text-stone-500'>
                            {duration}
                        </div>
                    </p>
                    <p className='my-2 text-base font-normal text-stone-600 dark:text-stone-400'>
                        {details}
                    </p>
                </li>
            </ol>
        )
    }   
}

export default TimelineItem