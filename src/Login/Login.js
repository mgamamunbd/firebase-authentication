/** @format */

import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../src/firebase.init";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  return (
    <div>
      <h1>Login</h1>
      <div className='log-in'>
        <button onClick={() => signInWithGoogle()}>Sign in with Google</button>
      </div>
      <form>
        <input type='email' placeholder='Email' />
        <input type='password' name='' id='' placeholder='Password' />
        <input type='submit' value='Login' />
      </form>
    </div>
  );
};

export default Login;
