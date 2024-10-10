import { Outlet, Link, useLoaderData, useNavigation, Form, useSubmit } from "react-router-dom";
import { getContacts } from "../contacts";
import { useEffect } from "react";


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
      <div className="flex bg-gray-100 fixed z-40 w-screen h-[calc(100vh-64px)] ">
        <div id="sidebar" 
            className="flex-none w-64 lg:w-max bg-gray-200 h-[calc(100vh-64px)] overflow-hidden
            items-center p-3 text-sm text-gray-500 focus:outline-none
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
                defaultValue={q}
                onChange={(event) => {
                  const isFirstSearch = q == null;
                  submit(event.currentTarget.form, {
                    replace: !isFirstSearch,
                  });}}
                className="p-2 bg-white dark:bg-gray-900 border-2 rounded-md focus:outline-none shadow-sm shadow-purple-500 dark:shadow-orange-300"
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

          <div className="flex px-3 py-5 rounded-md self-start
            bg-gray-50 dark:bg-gray-800  
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
        <div id="detail" className={
          navigation.state === "loading" ? "loading" : 
          "flex p-5 w-full bg-gray-200 dark:bg-gray-700 " }>
          <div className="flex p-5 
            bg-gradient-to-tr from-sky-50 via-rose-100 to-sky-200 text-stone-900
            dark:from-stone-800 dark:to-sky-900 dark:text-gray-400
            w-full rounded-lg">
              <Outlet />
          </div>
        </div>
        </div>
    </>
    );
  }