import React, { Fragment  } from 'react';
 
import LoginForm from '../components/LoginForm';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <Fragment>

    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">einloggen</h2>
        <LoginForm />
        <p className="mt-6 text-center text-sm text-gray-600">
          haben Sie Kein Konto?{<Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">Register</Link>}
        </p>
      </div>
    </div>
    </Fragment>
  )
}

export default Login