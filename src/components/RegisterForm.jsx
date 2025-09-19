import React, { Fragment } from "react";
import FormWrapper from "./FormWrapper";
import NameIcon from "../ui/NameIcon";
import EmailIcon from "../ui/EmailIcon";
import TextInput from "../ui/TextInput";
import PasswordInput from "../ui/PasswordInput";
import Button from "../ui/Button";
import PasswordIcon from "../ui/PasswordIcon";
import SocialMediaButtons from "../ui/SocialMediaButtons";
import GitHubIcon from "../ui/GitHubIcon";
import TwitterIcon from "../ui/TwitterIcon";
import LinkText from "../ui/LinkText";
function RegisterForm() {
  return (
    <FormWrapper name="Registrierung" description="Erstellen Sie Ihr Konto">

      <form className="flex flex-col">


        <TextInput placeholder="Geben Sie bitte Ihren Namen ein" labelName="Name">
          <NameIcon />
        </TextInput>
        <TextInput placeholder="Geben Sie bitte Ihre E-Mail ein" labelName="Email">
          <EmailIcon />
        </TextInput>
        <PasswordInput placeholder="Geben Sie bitte Ihr Passwort ein" labelName="Passwort">
          <PasswordIcon />
        </PasswordInput>
        <PasswordInput placeholder="Passwort wiederholen" labelName="Passwortbestätigung">
          <PasswordIcon />
        </PasswordInput>
        <Button text="Anmelden">
        </Button>
        <LinkText prefixText="Haben Sie schon ein Konto?"
          link="/login"
          linkText="Login" >
        </LinkText>
      
      </form>
      <div className="relative flex py-8 items-center">
        <div className="grow border-t border-[1px] border-gray-200"></div>{" "}
        <span className="shrink mx-4 font-medium text-gray-500">OR</span>
        <div className="grow border-t border-[1px] border-gray-200"></div>
      </div>
      <form>
        <div className="flex flex-row gap-2 justify-center">
          <SocialMediaButtons>
            <GitHubIcon />
          </SocialMediaButtons>
          <SocialMediaButtons>
            <TwitterIcon />
          </SocialMediaButtons>
        </div>
      </form>


    </FormWrapper>
  );
}

export default RegisterForm;