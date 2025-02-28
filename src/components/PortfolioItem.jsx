import {React, Fragment, useRef, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'

//animate on scroll
import AOS from 'aos'
import "aos/dist/aos.css"


function PortfolioItem({ title, imgUrl, stack, link, blurb}) {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)

    useEffect(() => {
        AOS.init({duration:1200})
    })

  return (
    <>
        {/* Show Each Portfolio Item inside a button */}
        <button
            onClick={() => setOpen(true) }
            rel="noopener noreferrer"
            className='w-full bg-gray-50 dark:bg-gray-700 border-2 border-stone-900 
            dark:border-gray-400 rounded-md overflow-hidden shadow-sm 
            shadow-purple-500 dark:shadow-orange-500
            '
            data-aos="fade-up"
            >
        
        {/* Portfolio Card */}
            <div class="relative">
                <img 
                    src={imgUrl}
                    alt="portfolio"
                    title="Show Details"
                    className="w-full md:h-80 object-cover cursor-pointer"
                    />
            <div class="bg-gray-600 opacity-0 hover:opacity-90 duration-300 
                    absolute inset-0 z-10 flex justify-center items-center 
                    text-4xl font-semibold">
                        View Details
                    </div>
            </div>
            <div className="w-full min-h-full p-4
                bg-gradient-to-b from-slate-400 via-slate-300 via-slate-300 to-slate-400/80
                dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:via-gray-700 dark:to-gray-700/80
                ">
                <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold' dark:text-white>{title}</h3>
                <p className='flex flex-wrap gap-2 flex-row items-center justify-start 
                    text-xs md:text-sm dark:text-white dark:black'>
                    {stack.map(item => (
                        <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 bg-white dark:bg-gray-500 dark:border-gray-400 rounded-md'>
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </button>

        {/* Popup Modal Begin */}
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
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

                <div className="fixed inset-0 z-10 overflow-y-auto">
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

        {/* Popup Modal Layout */}
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white dark:bg-gray-700 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <Dialog.Title as="h3" className="text-base dark:text-white font-semibold leading-6 text-gray-900">
                                {title}
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500 dark:text-gray-200">
                                {blurb}
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="bg-gray-200 dark:bg-gray-600 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

        {/* Show button if portfolio item has a href */}
                        { link === '#' 
                        ? null
                        : <a
                        href={link}
                        target={ link === '#' ? "_self" : "_blank" }
                        className="inline-flex w-full justify-center rounded-md bg-purple-500 dark:bg-orange-500 px-3 py-2 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => setOpen(false)} >
                                Go To Website
                          </a>
                        }

        {/* Always show cancel button */}
                        <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                            >
                            Cancel
                        </button>
                        </div>
                    </Dialog.Panel>
                    </Transition.Child>
                </div>
                </div>
            </Dialog>
        </Transition.Root>
    </> 
  )
}

export default PortfolioItem