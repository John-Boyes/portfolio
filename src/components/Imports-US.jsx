import React from "react"
import { Form, Link } from "react-router-dom"
import { matchSorter } from "match-sorter"
import sortBy from "sort-by"

import importsUS from "../data/imports-us"
import StateItem from "./StateItem"
import Contact from "../routes/contact"

const data = importsUS

export default function ImportsUS() {
    // const url ='https://johnboyes.dev/posts/wp-json/wp/v2/posts/?'
    // const states = useLoaderData();
    //console.log(states)
    const states = data

    return (
        <>
        <div id="sidebar" className="flex flex-col md:flex-row justify-center my-10">
        <h1>Importing Vehicles - US State</h1>
        <div className="flex flex-col md:flex-row justify-center my-10">
          <Form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search states"
              placeholder="Search"
              type="search"
              name="q"
              className='p-2 bg-white dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300'
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </Form>
        </div>
        <nav>
        {states.length ? (
            <ul>
              {states.map((state) => (
                <li key={state.slug}>
                  <Link 
                    to={`/US-Gray-Market-Laws/${state.slug}`}
                    className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                    >
                        {state.title.rendered}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>Error loading data</i>
            </p>
          )}
        </nav>
      </div>

      <div id="detail" className="flex column">
        <div className="flex flex-col md:flex-row justify-center my-10 ">
        <div className="w-full md:w-7/12">
            <Contact />
            
            {/* {states.map(item => (
            <StateItem 
                modified={item.modified}
                title={item.title.rendered}
                content={item.content.rendered}
                id={item.id}
                key={item.slug}
            />
            ))} */}
        </div>
        </div>
      </div>
    </>
    )
}
    