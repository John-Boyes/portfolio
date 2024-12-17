import React from "react";
import { Outlet, Link, useNavigation } from "react-router-dom";
import { Disclosure } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import RandomNumber from "../tools/RandomNumber";
import RandomChoice from "../tools/RandomChoice";
import SixDegrees from "../tools/SixDegrees";
import TMDB from "../tools/tmdb";


export default function Tools() {
    const navigation = useNavigation();

    const tools = [
      {
        "id": 1,
        "slug": "Random-Number",
        "title": {
            "rendered": "Random Number Generator"
        },
        "content": <RandomNumber />,
      },
      {
        "id": 2,
        "slug": "Random-Choice",
        "title": {
            "rendered": "Random Choice Generator"
        },
        "content": <RandomChoice />,
      },
      {
        "id": 3,
        "slug": "Six-Degrees",
        "title": {
            "rendered": "Six Degrees"
        },
        "content": <SixDegrees />,
      },
      // {
      //   "id": 4,
      //   "slug": "TMDB",
      //   "title": {
      //       "rendered": "The Movie Database Test"
      //   },
      //   "content": <TMDB />,
      // }
    ]


    return (
      <>
{/* Screen Styling */}
      <div as="nav" className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-700 z-40 w-screen h-screen sm:h-[calc(100vh-64px)]">

{/* Sidebar/Drawer Content */}
      <Disclosure as="nav">
            {({ open, close }) => (
        <>
{/* Mobile menu button*/}
          <div className="flex items-center sm:hidden">
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 
                text-slate-600 dark:text-orange-500 w-full
                hover:bg-slate-500 hover:text-white">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-8 w-8 absolute inset-y-10 right-8 font-bold" />
              ) : (
                <button data-drawer-target="tools-menu" data-drawer-toggle="tools-menu" aria-controls="tools-menu" type="button" 
                    className="inline-flex items-center p-4 mt-5 w-11/12 mx-auto justify-center 
                        text-lg font-semibold rounded-lg border-2 border-slate-400 dark:border-gray-600
                        bg-gradient-to-b from-slate-400 via-slate-300 via-slate-300 to-slate-400/80
                        dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:via-gray-700 dark:to-gray-700/80
                        focus:outline-none focus:ring-2 focus:ring-gray-200 
                        dark:text-gray-400 dark:bg-gray-600 dark:focus:ring-gray-600">
                  <span class="sr-only">Open Tools Menu</span>
                  More Tools
                </button>
              )}
            </Disclosure.Button>
          </div>
{/* Start Mobile Menu */}
        <Disclosure.Panel className='sm:hidden' aria-label="Tool Menu">
          <div className="px-3 py-5 m-2 rounded-md self-start overflow-y-auto
           bg-gray-50 dark:bg-gray-800">
            <nav className="overflow-visible">

            {tools.length ? (
              <ul>
                {tools.map((tool) => (
                  <li key={tool.id}
                  
                  className="rounded-md p-2 text-lg font-semibold
                  dark:text-gray-400"
                  >
                    <Link to={`${tool.slug}`}
                      onClick={close}
                    >
                        {tool.slug ? (
                          <>
                            {tool.title.rendered}
                        </>
                        ) : (
                          <i>No Name</i>
                        )}
                    </Link>
                    </li>
                ))}
                </ul>
            ) : (
              <p>
                <i>Error Fetching Data</i>
                </p>
            )}
            </nav>
          </div>
        </Disclosure.Panel>
        </>
      )}
      </Disclosure>

{/* Sidebar Navigation on full screen */}
      <div className="w-max ml-5 my-5 p-3 rounded-lg self-start 
           overflow-y-auto w-full h-[calc(100vh-104px)] hidden md:flex
           bg-gradient-to-tr from-rose-200 via-sky-200 to-rose-200 text-stone-900
            dark:from-sky-900 dark:to-stone-800 dark:text-gray-400
           ">
            <nav className="overflow-visible">

            {tools.length ? (
              <ul>
                {tools.map((tool) => (
                  <li key={tool.id}
                    className="hover:bg-sky-100 active:bg-sky-100 
                      rounded-md p-2 text-lg font-semibold
                      dark:hover:bg-gray-700 dark:text-gray-400"
                    >
                    <Link to={`${tool.slug}`}
                    >
                        {tool.slug ? (
                          <>
                            {tool.title.rendered}
                        </>
                        ) : (
                          <i>No Name</i>
                        )}
                    </Link>
                    </li>
                ))}
                </ul>
            ) : (
              <p>
                <i>Error Fetching Data</i>
                </p>
            )}
            </nav>
          </div>

{/* Outlet/Main Window */}
        <div id="detail" className={
          navigation.tool === "loading" ? "loading" : 
          "flex p-5 w-full bg-gray-100 dark:bg-gray-700" }>

          <div className="flex p-3 
            bg-gradient-to-tr from-sky-200 via-rose-200 to-sky-200 text-stone-900
            dark:from-stone-800 dark:to-sky-900 dark:text-gray-300
            w-full rounded-lg overflow-auto">
              <Outlet />
          </div>
        </div>
      </div>
    </>
    );
  }