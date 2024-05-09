import React from "react";
import Input from "./input";
import App from "./App";
import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/start",
        element: <Input />,
      },
    ],
  },
]);
