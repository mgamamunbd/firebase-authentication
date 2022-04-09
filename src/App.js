/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { getAuth } from "./firebase/auth";
const auth = getAuth();

function App() {
  const handleGoogleSignIn = () => {
    console.log("working");
  };
  return (
    <div className='App'>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
