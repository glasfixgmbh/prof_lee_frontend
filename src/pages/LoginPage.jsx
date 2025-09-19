import React, { Fragment, useState } from "react";

import LoginForm from "../components/LoginForm";
import Shopping from "../components/Shopping";
function LoginPage() {
  const [clickCounter, setClickCounter] = useState(500);
  return (
    <Fragment>
      <Shopping clickCounter={clickCounter}/>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoginForm  clickCounter={clickCounter} setClickCounter={setClickCounter}/>
      </div>
    </Fragment>
  );
}

export default LoginPage;