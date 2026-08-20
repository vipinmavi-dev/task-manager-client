import React from "react";
import Style from "./loginLayout.module.css";
import { 
    LoginHeader, 
    LoginForm, 
    LoginFooter 
} from "../index.tsx";

function LoginLayout() {
    return (
        <div className={Style.container}>
            <div className={Style.subContainer}>
                <LoginHeader/>
                <LoginForm/>
                <LoginFooter/>
            </div>
        </div>
    )
}
export default LoginLayout;