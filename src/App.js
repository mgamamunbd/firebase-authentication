/** @format */

<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import { getAuth } from "./firebase/auth";
const auth = getAuth();

function App() {
  const handleGoogleSignIn = () => {
    console.log("working");
=======
import { getAuth, GoogleAuthProvided, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import "./App.css";
import app from "./firebase.init";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvided();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(result.user);
      })
      .catch((error) => {
        console.error("error", error);
      });
>>>>>>> 3576959a20b6756c2df0896265d3d8688b2293ad
  };
  return (
    <div className='App'>
      <h1>Firebase Authentication</h1>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
