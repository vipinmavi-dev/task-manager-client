import React from "react";
import { ROUTES } from "../../constants/routes.ts";
import {
    LoginHeader, 
    LoginForm, 
    LoginFooter 
} from "../../components/login/index.tsx";
import {
    Input,
    Label,
    SignUpPrompt
} from "../../components/UI_Elements/index.tsx";
function SingUp() {
    return (
        <>
            <LoginHeader pageTitle="Create an account" 
            subTitle="Enter your details to create your work ticket manager account"/>
            <LoginForm>
                <Label htmlFor="userName" value="Name" />
                <Input type="text" placeholder="Jhon smit" id="userName" isRequired={true} />
                <Label htmlFor="userEmail" value="Email" />
                <Input type="email" placeholder="your-id@example.com" id="userEmail" isRequired={true} />
                <Label htmlFor="userPassword" value="Password" />
                <Input type="password" placeholder="Password" id="userPassword" isRequired={true}/>
                <Label htmlFor="confirmPassword" value=" Confirm Password" />
                <Input type="password" placeholder="Confirm Your Password" id="confirmPassword" isRequired={true}/>
                <Input type="submit" id="loginSubmit" value="Create My Account"/>
            </LoginForm>
            <LoginFooter>
                <SignUpPrompt promptMessage="Already have an account?" linkName="Sign In" linkPath={ROUTES.LOGIN}/>
            </LoginFooter>
        </>
    );
}

export default SingUp;