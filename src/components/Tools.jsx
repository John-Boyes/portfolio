import { Outlet, Link, useNavigation, Form, useSubmit, redirect } from "react-router-dom";
import { useEffect } from "react";
import RandomNumber from "../tools/RandomNumber";
import WheelOfChoices from "../tools/WheelOfChoices";
import Conversions from "../tools/Conversions";


export default function Tools() {
    const navigation = useNavigation();
    const submit = useSubmit();

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
        "slug": "Wheel-of-Choices",
        "title": {
            "rendered": "Wheel of Choices"
        },
        "content": <WheelOfChoices />,
      },
      {
        "id": 3,
        "slug": "Conversions",
        "title": {
            "rendered": "Conversions"
        },
        "content": <Conversions />,
      },
    ]


    return (
      <>
      <div className="flex bg-gray-100 fixed z-40 w-screen h-[calc(100vh-64px)] ">
        <div id="sidebar" 
            className="overflow-y-auto bg-gray-200  items-center p-2 text-sm 
            text-gray-500 focus:outline-none min-w-400
            focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
            dark:bg-gray-700 dark:focus:ring-gray-600 
            border-r-2 border-black">


          <div className="px-3 py-4 mt-5 mb-3 rounded-md self-start overflow-y-auto
           bg-gray-50 dark:bg-gray-800">
            <nav className="overflow-visible">

            {tools.length ? (
                <ul>
                {tools.map((tool) => (
                    <li key={tool.id}
                    
                      className="hover:bg-sky-100 active:bg-sky-100 rounded-md p-1
                      dark:hover:bg-gray-700"
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
        </div>
        <div id="detail" className={
          navigation.tool === "loading" ? "loading" : 
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