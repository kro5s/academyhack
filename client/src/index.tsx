import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import RootRoute from "./routes/RootRoute";
import ExampleRoute from "./routes/ExampleRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />
  },
  {
    path: '/example',
    element: <ExampleRoute />
  },
  {
    path: "/*",
    element: <Navigate to="/" replace />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
