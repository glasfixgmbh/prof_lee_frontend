import React, { Fragment} from 'react';
import Hello from "../components/Hello";
import Goodbye from '../components/Goodbye';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';

function Login() {
  return (
    <Fragment>
    <div className='h-6 mt-6 mb-6 mr-6 ml-6'>Login</div>
    <Hello/>
    <LoginForm/>
    <Goodbye/>
    </Fragment>
  )
}

export default Login