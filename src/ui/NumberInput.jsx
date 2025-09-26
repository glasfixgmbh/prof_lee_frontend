import React from "react";

function NumberInput(props) {
  return (
    <div className="pb-2">
      <label
        className="block mb-2 text-sm font-medium text-[#111827]"
      >
        {props.lableName}
      </label>
      <div className="relative text-gray-400">
        <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
          {props.children}
        </span>
        <input
          type="number"
          name={props.name}
          className="pl-12 mb-2 bg-gray-50 text-gray-600 border focus:border-transparent border-gray-300 sm:text-sm rounded-lg ring-3 ring-transparent focus:ring-1 focus:outline-hidden focus:ring-gray-400 block w-full p-2.5 rounded-l-lg py-3 px-4"
          placeholder={props.placeholder}
          value={props.value}
          onKeyUp={props.onKeyUp}
        />
      </div>
    </div>
  );
}

export default NumberInput;
