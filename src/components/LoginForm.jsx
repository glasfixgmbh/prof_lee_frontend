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
import { useState } from "react";

function LoginForm(props) {
  const [myText, SetMyTExt] = useState("Hallo Welt");
  return (
    <FormWrapper name="Einloggen">
      <div>
        What we type:{myText}
      </div>
     <TextInput placeholder="Geben Sie bitte Ihre E-Mail ein" labelName="Email" onKeyUp={(e) => SetMyTExt(e.target.value)}>
      
            <EmailIcon/>
          </TextInput>

      <PasswordInput placeholder="Geben Sie bitte Ihr Passwort ein" labelName="Passwort">
            <PasswordIcon/>
          </PasswordInput>
      <Button text="Senden" onClick={(e) => props.setClickCounter("it is clicked")}> 
        
          </Button>
           <LinkText prefixText="Haben Sie noch kein Konto?"
          link="/Register"
          linkText="Registrierung" >
        </LinkText>
        

    </FormWrapper>
  );
}

export default LoginForm;