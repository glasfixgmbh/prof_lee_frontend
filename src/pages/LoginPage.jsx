import React, { Fragment, useState } from "react";

import LoginForm from "../components/LoginForm";
import Shopping from "../components/Shopping";
import UsersList from "../components/UsersList";
function LoginPage() {
  const [clickCounter,setClickCounter]=useState(5);
  return (
    <Fragment>
      <Shopping clickCounter={clickCounter}/>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoginForm clickCounter={clickCounter}  setClickCounter={setClickCounter} />
      </div>
      <UsersList counter="1"/>
    </Fragment>
  );
}

export default LoginPage;
