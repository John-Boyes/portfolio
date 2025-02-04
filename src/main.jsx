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
import Imports, { loader as rootLoader } from "./components/Imports-US";
import Disclaimer from "./components/Disclaimer"


import Tools from "./components/Tools";
import RandomNumber from "./tools/RandomNumber";
import RandomChoice from "./tools/RandomChoice";
import SixDegrees from "./tools/SixDegrees";
import TMDB from "./tools/tmdb";
// import Conversions from "./tools/Conversions";

import './styles/tailwind.css'
import ImportsUs from "./data/imports-us";

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
            element: <Imports />,
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
                  element: <RandomNumber />
                },
                {
                  path: '/Tools/Random-Choice',
                  element: <RandomChoice />
                },
                {
                  path: '/Tools/Six-Degrees',
                  element: <SixDegrees />
                },
                {
                  path: '/Tools/TMDB',
                  element: <TMDB />
                },
                // {
                //   path: '/Tools/Conversions',
                //   element: <Conversions />
                // },
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
