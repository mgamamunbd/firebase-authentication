/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import React from "react";
import "./App.css";
import app from "./firebase.init";

const auth = getAuth(app);

function App() {
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    console.log("working");
  };
  return (
    <div className='App'>
      <h1>Firebase Authentication</h1>
      <button className='btn btn-info' onClick={handleGoogleSignIn}>
        Google Sign In
      </button>
    </div>
  );
}

export default App;
