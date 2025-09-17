import React, { Fragment } from 'react'
import HelloComponent from "../components/Hello";
import GoodByeComponent from "../components/GoodBye"; 
import NavbarComponent from "../components/Navbar";

function Register() {
  return (
    <Fragment>
      <NavbarComponent/>
      <div>Register</div>
      <HelloComponent/>
      <GoodByeComponent/>
    </Fragment>
  )
}

export default Register