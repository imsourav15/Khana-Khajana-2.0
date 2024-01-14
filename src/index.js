"use client"
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppLayout from './App';
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';

const appRouter = createBrowserRouter ([
  {
    path : "/",
    element : <AppLayout />,
    children : [
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/contact",
        element : <Contact />
      },
      {
        path : "/restaurants/:resId",
        element : <RestaurantMenu />
      }
    ],
    errorElement : <Error/>
  },
])



ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={appRouter}
    fallbackElement={<AppLayout/>}
  />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
