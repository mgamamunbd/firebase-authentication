/** @format */

import React from "react";
import "./App.css";
import app, { getAuth } from "./firebase.init";

app;
const auth = getAuth();

function App() {
  const [user, setUser] = React.useState({});
  const provider = new auth.GoogleAuthProvider();
  
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      setUser(user);
      console.log(user);
  });
  return (
    <div className='App'>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
