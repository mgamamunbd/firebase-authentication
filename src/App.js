/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import "./App.css";
import app from "./firebase.init";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        // console.error('error', error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setUser({});
      });
  };
  return (
    <div className='App log-in-form'>
      <h1>Firebase Authentication</h1>
      {user.uid ? (
        <button className='btn btn-info' onclick={handleSignOut}>
          Sign Out
        </button>
      ) : (
        <>
          <button className='btn btn-info' onClick={handleGoogleSignIn}>
            Google Sign In
          </button>
        </>
      )}
      <h2>Name: {user.displayName}</h2>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt='profile' />
    </div>
  );
}
export default App;
