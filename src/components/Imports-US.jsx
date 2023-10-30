import React from "react"
import { Form, Link, useLoaderData, useNavigation, Outlet } from "react-router-dom"
import { getContacts } from "../contacts";

// import { matchSorter } from "match-sorter"
// import sortBy from "sort-by"

// import importsUS from "../data/imports-us"
// import StateItem from "./StateItem"

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const states = await getContacts(q);
  return { states };
}

// const data = importsUS

export default function ImportsUS() {
    // const url ='https://johnboyes.dev/posts/wp-json/wp/v2/posts/?'
    const { states } = useLoaderData();
    const navigation = useNavigation();
    console.log(states)

    

    return (
        <>
        <div className="flex bg-gray-100 fixed z-40 w-screen h-[calc(100vh-64px)] ">

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
        <nav className="overflow-visible">
          
        {states.length ? (
            <ul>
              {states.map((state) => (
                <li key={state.slug}
                  className='active:bg-gray-900 active:text-white text-gray-300 hover:bg-gray-700 hover:text-white
                      rounded-md px-3 py-2 text-sm font-medium'
                      >
                  <Link to={`/US-Gray-Market-Laws/${state.slug}`}>
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

      <div id="detail" className={
          navigation.state === "loading" ? "loading" : 
          "flex p-5 w-full bg-gray-200 " }>
        <div className="flex p-5 bg-gray-50 w-full
          rounded-lg">
            <Outlet />
        </div>
      </div>
      {/* <div id="detail" className="flex column">
        <div className="flex flex-col md:flex-row justify-center my-10 ">
        <div className="w-full md:w-7/12">
            
            {states.map(state => (
            <StateItem 
                modified={state.modified}
                title={state.title.rendered}
                content={state.content.rendered}
                id={state.id}
                key={state.slug}
            />
            ))}
        </div>
        </div>
      </div> */}
      </div>
    </>
    )
}
    