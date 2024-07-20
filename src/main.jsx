import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page";
import Root from "./routes/root"
import Main from "./components/main";
import StateItem, { loader as stateLoader}  from "./components/StateItem";
import Tools from "./components/Tools";
import Contacts, { loader as rootLoader } from "./components/Contacts";
import Disclaimer from "./components/Disclaimer"

import './styles/tailwind.css'
import RandomNumber from "./tools/RandomNumber";
import WheelOfChoices from "./tools/WheelOfChoices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index:true, element: <Main /> },
          {
            path: '/US-Gray-Market-Laws/',
            element: <Contacts />,
            errorElement: <ErrorPage />,
            loader: rootLoader,
            children: [
              {
              errorElement: <p>Opps, this content is not available yet. Check back soon!</p> ,
              children: [
                { index: true, element: <Disclaimer /> },
                {
                  path: '/US-Gray-Market-Laws/:slug',
                  element: <StateItem />,
                  loader: stateLoader,
                },
              ],
            },
            ],
          },
        ],
      },
      {
        errorElement: <ErrorPage />,
        children: [
          { index:true, element: <Main /> },
          {
            path: '/Tools/',
            element: <Tools />,
            errorElement: <ErrorPage />,
            loader: rootLoader,
            children: [
              {
              errorElement: <p>Opps, this content is not available yet. Check back soon!</p> ,
              children: [
                { index: true, element: <RandomNumber /> },
                {
                  path: '/Tools/Random-Number',
                  element: <RandomNumber />,
                  // loader: stateLoader,
                },
                {
                  path: '/Tools/Wheel-of-Choices',
                  element: <WheelOfChoices />,
                  // loader: stateLoader,
                },
              ],
            },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
