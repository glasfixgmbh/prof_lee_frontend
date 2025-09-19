import React from "react";
import FormWrapper from "./FormWrapper";
import { Link } from "react-router-dom";
import TextInput from "../ui/TextInput";
import EmailIcon from "../ui/EmailIcon";
import PasswordInput from "../ui/PasswordInput";
import PasswordIcon from "../ui/PasswordIcon";
import Button from "../ui/Button";
import SocialMediaButtons from "../ui/SocialMediaButtons";
import GitHubIcon from "../ui/GitHubIcon";
import TwitterIcon from "../ui/TwitterIcon";  
import LinkText from "../ui/LinkText";

function LoginForm() {
  return (
    <FormWrapper name="Einloggen">
     <TextInput placeholder="Geben Sie bitte Ihre E-Mail ein" labelName="Email">
            <EmailIcon/>
          </TextInput>

      <PasswordInput placeholder="Geben Sie bitte Ihr Passwort ein" labelName="Passwort">
            <PasswordIcon/>
          </PasswordInput>
      <Button text="Senden"> 
          </Button>
           <LinkText prefixText="Haben Sie noch kein Konto?"
          link="/Register"
          linkText="Registrierung" >
        </LinkText>
        

    </FormWrapper>
  );
}

export default LoginForm;