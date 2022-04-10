/** @format */

import React from "react";

const Register = () => {
  return (
    <div>
      <h3>Please Register now...</h3>
      <form>
        <input type='text' placeholder='Name' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />
        <input type='submit' value='Register' />
      </form>
    </div>
  );
};

export default Register;
