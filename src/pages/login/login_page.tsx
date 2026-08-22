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
    ThematicBreak,
    OtherLoginBtn,
    SignUpPrompt
} from "../../components/UI_Elements/index.tsx";
function LoginPage() {
    return(
        <>
            <LoginHeader pageTitle="Work Ticket Manager - Login" 
            subTitle="Sign in to your account to manage your work tickets"/>
            <LoginForm>
                <Label htmlFor="loginEmail" value="Email" />
                <Input type="email" placeholder="your-id@example.com" id="loginEmail" isRequired={true} />
                <Label htmlFor="loginPassword" value="Password" />
                <Input type="password" placeholder="Password" id="loginPassword" isRequired={true}/>
                <Input type="submit" id="loginSubmit" value="Log In"/>
            </LoginForm>
            <LoginFooter>
                <ThematicBreak/>
                <OtherLoginBtn value="Login With Google"/>
                <OtherLoginBtn value="Continue as Guest"/>
                <SignUpPrompt promptMessage="Don't have an account?" linkName="Create one" linkPath={ROUTES.SIGNUP}/>
            </LoginFooter>
        </>
    )
}

export default LoginPage;