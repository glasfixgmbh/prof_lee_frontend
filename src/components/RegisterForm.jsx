import React, { Fragment } from "react";
import FormWrapper from "./FormWrapper";
import EmailIcon from "../UI/EmailIcon";
import TextInput from "../UI/TextInput";
import PasswordIcon from "../UI/PasswordIcon";
import TwitterButton from "../UI/TwitterButton";
import GithubButton from "../UI/GithubButton";
import SubmitButton from "../UI/SubmitButton";
function RegisterForm() {
  return (
    <FormWrapper name="Registrierung" description="you can register yourself">
      <form class="flex flex-col">
        <TextInput placeholder="First Name" lableName="First Name">
          <EmailIcon />
        </TextInput>
        <TextInput placeholder="Last Name" lableName="Last Name">
          <EmailIcon />
        </TextInput>
        <TextInput placeholder="email@example.com" lableName="Email">
          <EmailIcon />
        </TextInput>
        <TextInput
          placeholder="********"
          lableName="Password "
          autocomplete="new password"
        >
          <PasswordIcon />
        </TextInput>
        <SubmitButton />
        <div class="text-sm font-light text-[#6B7280] ">
          Already have an account?{" "}
          <a href="#" class="font-medium text-[#4F46E5] hover:underline">
            Login
          </a>
        </div>
      </form>
      <div class=" relative flex py-8 items-center">
        <div class="grow border-t border-[1px] border-gray-200"></div>{" "}
        <span class="shrink mx-4 font-medium text-gray-500">OR</span>
        <div class="grow border-t border-[1px] border-gray-200"></div>
      </div>
      <form>
        <div class=" flex flex-row gap-2 justify-center">
          <GithubButton />
          <TwitterButton />
        </div>
      </form>
    </FormWrapper>
  );
}

export default RegisterForm;
