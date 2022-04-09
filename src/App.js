/** @format */

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
  };
  return (
    <div className='App'>
      <h1>Firebase Authentication</h1>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
