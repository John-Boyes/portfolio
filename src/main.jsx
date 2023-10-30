import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "./error-page";
import Root from "./routes/root"
import Main from "./components/main";
import ImportsUS from "./components/Imports-US";
import StateItem, { loader as stateLoader}  from "./components/StateItem";
import Contact, { loader as contactLoader} from "./routes/contact";
import Contacts, { loader as rootLoader } from "./components/Contacts";
import Disclaimer from "./components/Disclaimer"

import './styles/tailwind.css'

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);