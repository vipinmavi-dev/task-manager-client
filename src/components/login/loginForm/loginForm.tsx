import React from "react";
import {
    Input,
    Label,
} from "../../UI_Elements/index.tsx";
import Style from "./loginForm.module.css";

function LoginForm() {
    return (
        <form className={Style.loginForm}>
            <Label htmlFor="loginEmail" value="Email" />
            <Input type="email" placeholder="your-id@example.com" id="loginEmail" isRequired={true} />
            <Label htmlFor="loginPassword" value="Password" />
            <Input type="password" placeholder="Password" id="loginPassword" isRequired={true}/>
            <Input type="submit" id="loginSubmit" value="Log In"/>
        </form>
    )
}
export default LoginForm;