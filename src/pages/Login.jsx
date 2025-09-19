import React, { Fragment } from "react";

import LoginForm from "../components/LoginForm";
function Login() {
  return (
    <Fragment>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <LoginForm />
      </div>
    </Fragment>
  );
}

export default Login;