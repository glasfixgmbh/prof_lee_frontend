import React from "react";
import FormWrapper from "./FormWrapper";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
/**
 * when we want to use core function behind react components
 * we shall write useXcomponent , then we have access to core function of components creator.
 * exactly like useNavigate in line 3! if you look at App.js , you can see 
 * there we extract NavigateComponent in line 2 in import! 
 * and functions ALWAYS are camelCase and Components are PascalCase!
 */

/**
 * Wenn man die Kernfunktion einer React-Komponente nutzen will, schreibt man `useXcomponent`.
 * Dadurch erhält man Zugriff auf die Hauptfunktion des Komponentenerstellers.
 * Genauso wie `useNavigate` in Zeile 3!
 * Schau dir `App.js` an: Dort importieren wir in Zeile 2 die `MapsComponent`.
 * Und denk daran: Funktionen schreibt man IMMER in camelCase und Komponenten in PascalCase!
 */
function LoginForm(props) {
  const [myText, setMyText] = useState("oooooo");
  const ali = useNavigate();
  const goToDashboard = ()=>{
      ali("/dashboard");
  }
  return (
    <FormWrapper name="einloggen">
      <div>what we type:{myText}</div>
      <div className="mb-4 w-full">
        <label for="5d040c62-206a-4178-8905-005b8e0bb000"></label>
        <input
          placeholder="Your email address"
          type="email"
          id="5d040c62-206a-4178-8905-005b8e0bb000"
          class="w-full block rounded-lg border dark:border-none dark:bg-neutral-600 py-[9px] px-3 pr-4 text-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
          onKeyUp={(e) => setMyText(e.target.value)}
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
        onClick={(e) => goToDashboard()}
      >
        senden
      </button>
      <p className="mt-6 text-center text-sm text-gray-600">
        haben Sie Kein Konto?
        {
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Register
          </Link>
        }
      </p>
    </FormWrapper>
  );
}

export default LoginForm;
