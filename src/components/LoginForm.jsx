import React, { Fragment } from "react";

function LoginForm() {
  return (
    <Fragment>
      <div className="mb-4 w-full">
        <label for="5d040c62-206a-4178-8905-005b8e0bb000"></label>
        <input
          placeholder="Your email address"
          type="email"
          id="5d040c62-206a-4178-8905-005b8e0bb000"
          class="w-full block rounded-lg border dark:border-none dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      <div className="mb-4 w-full">
        <label for="08f1297d-ffc5-4dcc-ae98-69babe65c4b3"></label>
        <input
          placeholder="Your password"
          type="password"
          id="08f1297d-ffc5-4dcc-ae98-69babe65c4b3"
          class="w-full block rounded-lg border dark:border-none dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="block mb-4 w-full rounded-full bg-blue-500 text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-blue-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
      >
        senden
      </button>
    </Fragment>
  );
}

export default LoginForm;
