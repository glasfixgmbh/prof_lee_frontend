import React from "react";

function FormWrapper(props) {
  return (
    <div class="flex flex-col w-full md:w-1/2 xl:w-2/5 2xl:w-2/5 3xl:w-1/3 mx-auto bg-gray-50 p-8 md:p-10 2xl:p-12 3xl:p-14 rounded-2xl shadow-xl">
      <h1 class="text-3xl font-bold text-[#4B5563] text-[#4B5563] my-auto">
        {props.name}
      </h1>
      <div class="text-sm font-light text-[#6B7280] pb-8 ">
        {props.description}
      </div>

      {props.children}
    </div>
  );
}

export default FormWrapper;
