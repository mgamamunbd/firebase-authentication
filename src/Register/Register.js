/** @format */

import React from "react";
import { Form } from "react-bootstrap";

const Register = () => {
  return (
    <div className='container border rounded p-3'>
      <h3 className='text-primary'>Please Register now...</h3>
      <Form>
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
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' placeholder='Confirm Password' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <button className='btn btn-info' type='submit'>
          Submit
        </button>
      </Form>
    </div>
  );
};

export default Register;
