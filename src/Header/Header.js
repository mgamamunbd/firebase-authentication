/** @format */

import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../firebase.init";
import "./Header.css";

const auth = getAuth(app);

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className='header p-5'>
      <nav>
        <Link className='text-primary' to='/'>
          Home
        </Link>
        <Link className='text-primary' to='/products'>
          Products
        </Link>
        <Link className='text-primary' to='/orders'>
          Orders
        </Link>
        <Link className='text-primary' to='/register'>
          Register
        </Link>
        <span>{user?.displayName && user.displayName}</span>
        {user?.uid ? (
          <button onClick={() => signOut(auth)}>Logout</button>
        ) : (
          <Link className='text-primary' to='/login'>
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
