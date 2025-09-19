import React, { Fragment, useState} from 'react';
import Hello from "../components/Hello";
import Goodbye from '../components/Goodbye';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';
import ShoppingCart from '../components/ShoppingCart';

function Login() {
  const [clickCounter, setClickCounter]=useState(0);
  return (
    <Fragment>
    <div className='h-6 mt-6 mb-6 mr-6 ml-6'>Login</div>
    <ShoppingCart myCounter={clickCounter}/>
    <div className ='min-h-screnn bg-gray-50 flex items-center justify-center'></div>
    <LoginForm clickCounter ={clickCounter} setClickCounter={setClickCounter}/>
    <Goodbye/>
    </Fragment>
  )
}

export default Login