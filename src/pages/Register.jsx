import React, { Fragment } from 'react';
import Hello from '../components/Hello';
import Goodbye from '../components/Goodbye';
import RegisterForm from '../components/RegisterForm';

function Register() {
  return (
    <Fragment>
    <div>Register</div>
    <Hello/>
    <RegisterForm/>
    <Goodbye/>
    </Fragment>
  )
}

export default Register