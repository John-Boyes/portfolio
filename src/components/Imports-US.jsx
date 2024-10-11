import React, { useEffect, useState } from "react";
import { Outlet, Link, useLoaderData, useNavigation, Form, useSubmit } from "react-router-dom";
import { Disclosure } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { getContacts } from "../states";


export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const states = await getContacts(q);
  return { states, q };
}

export default function Imports() {
    const { states, q } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();

    useEffect(() => {
      document.getElementById("q").value = q;
    }, [q]);


    const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );

    return (
      <>
{/* Sidebar/Drawer Content */}
      <Disclosure as="nav">
            {({ open, close }) => (
        <>
{/* Mobile menu button*/}
      <div className="flex items-center sm:hidden">
        <Disclosure.Button
            className="inline-flex items-center justify-center p-2 
                  text-slate-600 dark:text-orange-500 w-full
                  bg-white dark:bg-gray-700">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XMarkIcon className="block h-8 w-8 absolute inset-y-20 right-8 font-bold" />
                ) : (
                  <button data-drawer-target="states-menu" data-drawer-toggle="states-menu" aria-controls="states-menu" type="button" 
                      className="inline-flex items-center p-4 mt-5 w-11/12 mx-auto justify-center 
                          text-lg font-semibold rounded-lg border-2 border-slate-400 dark:border-gray-600
                          bg-gradient-to-b from-slate-400 via-slate-300 via-slate-300 to-slate-400/80
                          dark:bg-gradient dark:from-gray-800 dark:via-gray-700 dark:via-gray-700 dark:to-gray-700/80
                          focus:outline-none focus:ring-2 focus:ring-gray-200 
                          dark:text-gray-400 dark:bg-gray-600 dark:focus:ring-gray-600">
                    <span class="sr-only">Open States Menu</span>
                    Find Your State
                  </button>
                )}
              </Disclosure.Button>
            </div>
{/* Start Mobile Menu */}
        <Disclosure.Panel className='sm:hidden' aria-label="states-menu">
          <div id="sidebar" 
              className="flex flex-col w-full lg:w-max h-[calc(100vh-64px)]
              p-3 text-sm text-gray-500 bg-gray-200 focus:outline-none
              focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
              dark:bg-gray-700 dark:focus:ring-gray-600 
              ">
            <h1 className="mb-3 text-xl border-b-2 border-purple-500 dark:border-orange-500 ">Find Your State</h1>
            <div>
              <Form id="search-form" role="search" className="flex flex-col w-full ">
                <input
                  id="q"
                  aria-label="Search states"
                  placeholder="Search"
                  type="search"
                  name="q"
                  defaultValue={q}
                  onChange={(event) => {
                    const isFirstSearch = q == null;
                    submit(event.currentTarget.form, {
                      replace: !isFirstSearch,
                    });}}
                  className="p-2 bg-white text-lg dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300"
                />
                <div
                  id="search-spinner"
                  aria-hidden
                  hidden={!searching}
                />
                <div
                  className="sr-only"
                  aria-live="polite"
                ></div>
              </Form>
            </div>

            <div className="flex px-3 py-5 rounded-md
              bg-gray-50 dark:bg-gray-800 
              max-h-[calc(100vh-210px)] overflow-hidden">
              <nav className="w-full text-lg">

              {states.length ? (
                  <ul className="max-h-full overflow-y-auto">
                  {states.map((state) => (
                      <li key={state.id}
                      className="hover:bg-sky-100 active:bg-sky-100 rounded-md p-4
                      dark:hover:bg-gray-700"
                      >
                      <Link to={`${state.slug}`}
                        onClick={close}
                      >
                          {state.slug ? (
                          <>
                              {state.title.rendered}
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
          </div>
          </Disclosure.Panel>
          </>
          )}
        </Disclosure>

{/* Normal Screen View */}
      <div className="flex bg-gray-100 z-40 h-fit">
        <div id="sidebar" 
            className="hidden sm:flex flex-col w-64 lg:w-max bg-white h-[calc(100vh-64px)] overflow-hidden
            items-center p-3 text-sm text-gray-500 focus:outline-none
            focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
            dark:bg-gray-700 dark:focus:ring-gray-600 
            border-r-2 border-gray-300 dark:border-black">
          <h1 className="w-full mb-3 text-lg border-b-2 border-purple-500 dark:border-orange-500 ">Find Your State</h1>
          <div className="w-full">
            <Form id="search-form" role="search" className="flex flex-col w-full ">
              <input
                id="q"
                aria-label="Search states"
                placeholder="Search"
                type="search"
                name="q"
                defaultValue={q}
                onChange={(event) => {
                  const isFirstSearch = q == null;
                  submit(event.currentTarget.form, {
                    replace: !isFirstSearch,
                  });}}
                className="w-full p-2 bg-white mx-auto dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={!searching}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </Form>
          </div>
{/* Render list of states */}
          <div className="flex px-3 py-5 rounded-md self-start
            bg-gradient-to-tr from-rose-200 via-sky-200 to-rose-200 text-stone-900
            dark:from-sky-900 dark:to-stone-800 dark:text-gray-400  
            max-h-[calc(100vh-190px)] overflow-hidden">
            <nav>

            {states.length ? (
                <ul className="max-h-full overflow-y-auto">
                {states.map((state) => (
                    <li key={state.id}
                    
                      className="hover:bg-sky-100 active:bg-sky-100 rounded-md p-1
                      dark:hover:bg-gray-700"
                    >
                    <Link to={`${state.slug}`}
                    >
                        {state.slug ? (
                        <>
                            {state.title.rendered}
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
        </div>
{/* Outlet/Main section */}
        <div id="detail" className={
          navigation.state === "loading" ? "loading" : 
          "flex p-5 w-screen sm:w-fit bg-white dark:bg-gray-700" }>

          <div className="flex p-5 rounded-lg w-full
            bg-gradient-to-tr from-sky-200 via-rose-200 to-sky-200 text-stone-900
            dark:from-stone-800 dark:to-sky-900 dark:text-gray-400
            ">
              <Outlet />
          </div>
        </div>
        </div>
    </>
    );
  }