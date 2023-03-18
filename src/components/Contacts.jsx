import { Outlet, Link, useLoaderData } from "react-router-dom";
import { getContacts } from "../contacts";

export async function loader() {
    const contacts = await getContacts();
    return { contacts };
  }

export default function Contacts() {
    const { contacts } = useLoaderData();

    return (
      <>
      <div className="flex bg-gray-100 fixed z-40 h-screen w-screen">
        <div id="sidebar" 
            className="bg-red-100 w-1/3 items-center p-2 text-sm 
            text-gray-500 hover:bg-gray-100 focus:outline-none 
            focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
            dark:hover:bg-gray-700 dark:focus:ring-gray-600 
            border-r-2 border-black">
          <h1 className="mb-3 text-lg border-b-2 border-purple-500 dark:border-orange-500 ">React Router Contacts</h1>
          <div>
            <form id="search-form" role="search" className="flex flex-col w-full ">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                className="p-2 bg-white dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300"
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
            </form>
          </div>

          <div className="px-3 py-4 my-5 rounded-md overflow-y-auto
           bg-gray-50 dark:bg-gray-800">
            <nav>

            {contacts.length ? (
                <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                    <Link to={`${contact.slug}`}>
                        {contact.slug ? (
                            <>
                            {contact.slug}
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
        <div id="detail" className="flex p-5 w-full bg-gray-200">
            <div className="flex p-5 scroll-p-8 bg-gray-50 w-full
             rounded-lg ">
                <Outlet />
            </div>
        </div>
        </div>
    </>
    );
  }