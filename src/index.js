/** @format */

import React from "react";
<<<<<<< HEAD
import { createRoot } from "react-dom";
import { BrowserRouter } from "react-router-dom";
=======
import { createRoot } from "react-dom/client";
>>>>>>> 3576959a20b6756c2df0896265d3d8688b2293ad
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
<<<<<<< HEAD
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
=======
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> 3576959a20b6756c2df0896265d3d8688b2293ad
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
