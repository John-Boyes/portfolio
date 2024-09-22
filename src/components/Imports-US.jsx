import { Outlet, Link, useLoaderData, useNavigation, Form, useSubmit, redirect } from "react-router-dom";
import { getContacts } from "../contacts";
import { useEffect, useState, Fragment } from "react";
import { Disclosure, Menu, Transition } from '@headlessui/react'



export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const states = await getContacts(q);
  return { states, q };
}

export default function Contacts() {
    const { states, q } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();


    const [searchTerm, setSearchTerm] = useState('');

    const filteredStates = states.filter((state) =>
      state.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // useEffect(() => {
    //   document.getElementById("q").value = q;
    // }, [q]);


    const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );

    return (
      <>
      <div className=" flex flex-col bg-gray-300 dark:bg-slate-700 w-screen h-[calc(100vh-64px)]">

      <Menu as="div" className="static flex z-40 inline-block text-left 
            justify-center bg-slate-300 items-center pt-7 pb-2 text-sm 
            text-gray-500 focus:outline-none 
            focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
            dark:bg-gray-700 dark:focus:ring-gray-600 
            border-r-2 border-black
            overflow-y-auto text-wrap
        ">
        <div className="absolute mx-auto p-4 m-4">

          <Menu.Button
            type="button"
            className="mx-auto justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 
            bg-gray-100 text-sm font-medium text-gray-700 focus:outline-none
            dark:bg-slate-900 dark:text-slate-200 dark:border-slate-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            >
            Select a State or Topic
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          
        <Menu.Items className="h-56 mt-2 rounded-md
          bg-stone-200 overflow-y-auto origin-top
          dark:bg-gray-800 dark:text-white dark:shadow-orange-500 
          ring-1 ring-black ring-opacity-5 
          shadow-lg shadow-purple-500 
          focus:outline-none
          sm:static sm:inset-auto sm:ml-6 sm:pr-0
          ">

        <div className="p-2">
          <input
            id="q"
            aria-label="Search for your state"
            name="q"
            defaultValue={q}
            type="text"
            className="w-full border rounded-md p-2 text-black"
            placeholder="Search..."
            onChange={(e) => {
              setSearchTerm(e.target.value)

              const isFirstSearch = q == null;
              submit(e.currentTarget.form, {
                replace: !isFirstSearch,
              });
            }}
            />
        </div>
        <div className="py-1">
          {filteredStates.map((state) => (
            <Link
              to={state.slug}
              key={state.id}
              className="hover:bg-gray-300 dark:hover:bg-gray-600 block px-4 py-2 text-sm"
              role="menuitem"
              >
                {state.title.rendered}
            </Link>
          ))}
        </div>
        <div
          id="search-spinner"
          aria-hidden
          hidden={!searching}
          />
        <div
          className="sr-only"
          aria-live="polite"
          >

        </div>
            </Menu.Items>
        </Transition>
      </Menu>



        {/* Render menu selection */}
        
        <div id="detail" className={
          navigation.state === "loading" ? "loading" : 
          "flex p-5 z-10 w-full bg-slate-300 dark:bg-gray-700" }>
          <div className="flex p-5
            bg-gradient-to-b from-gray-100 to-gray-200 text-stone-900
            ddark:bg-gradient dark:from-gray-800 dark:to-slate-900 dark:text-gray-400
            w-full rounded-lg text-wrap">
              <Outlet />
          </div>
        </div>
        </div>
    </>
    );
  }