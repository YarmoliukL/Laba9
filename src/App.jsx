import TrafficLight from "./components/TrafficLight";
import "./App.css";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const config = {
  red: {
    duration: 4000,
    backgroundColor: "red",
    next: "green",
  },
  yellow: {
    duration: 500,
    backgroundColor: "yellow",
    next: "red",
  },
  green: {
    duration: 3000,
    backgroundColor: "green",
    next: "yellow",
  },
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="App">
          <Header />
          <div className="container">
            <Outlet />
          </div>
        </div>
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "vertical",
        element: (
          <div className="traffic-light-vertical">
            <TrafficLight config={config} />
          </div>
        ),
      },
      {
        path: "horizontal",
        element: (
          <div className="traffic-light-horizontal ">
            <TrafficLight config={config} />
          </div>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </>
  );
}


export default App;
