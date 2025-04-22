import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider } from "react-router";
import { router } from "./router/router.js";

ReactDOM.createRoot(document.getElementById('root')).
render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
