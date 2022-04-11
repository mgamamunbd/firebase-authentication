/** @format */

import { getAuth } from "firebase/auth";
import React from "react";
import { Form } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../src/firebase.init";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  return (
    <div className='container p-5'>
      <h1 className='text-primary'>Login</h1>
      <div className='log-in container border rounded p-3'>
        <button
          className='btn btn-primary p-2'
          onClick={() => signInWithGoogle()}>
          Sign in with Google
        </button>
        <Form className='p-2'>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          <button className='btn btn-primary' type='submit'>
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
