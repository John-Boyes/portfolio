import { Outlet, Link, useLoaderData, useNavigation, Form, redirect } from "react-router-dom";
import { getContacts } from "../contacts";

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const states = await getContacts(q);
  return { states };
}

export default function Contacts() {
    const { states } = useLoaderData();
    const navigation = useNavigation();


    return (
      <>
      <div className="flex bg-gray-100 fixed z-40 w-screen h-[calc(100vh-64px)] ">
        <div id="sidebar" 
            className="overflow-y-auto bg-red-100 w-1/3 items-center p-2 text-sm 
            text-gray-500 focus:outline-none 
            focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
            dark:bg-gray-700 dark:focus:ring-gray-600 
            border-r-2 border-black">
          <h1 className="mb-3 text-lg border-b-2 border-purple-500 dark:border-orange-500 ">Find Your State</h1>
          <div>
            <Form id="search-form" role="search" className="flex flex-col w-full ">
              <input
                id="q"
                aria-label="Search states"
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
            </Form>
          </div>

          <div className="px-3 pt-4 mt-5 mb-3 rounded-md self-start overflow-y-auto
           bg-gray-50 dark:bg-gray-800">
            <nav className="overflow-visible">

            {states.length ? (
                <ul>
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
        <div id="detail" className={
          navigation.state === "loading" ? "loading" : 
          "flex p-5 w-full bg-gray-200 " }>
          <div className="flex p-5 bg-gray-50 w-full
            rounded-lg">
              <Outlet />
          </div>
        </div>
        </div>
    </>
    );
  }