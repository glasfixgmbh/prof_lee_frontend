import React from 'react'

function FormWrapper(props) {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">{props.name}</h2>
        {props.children}
    </div>
  )
}

export default FormWrapper