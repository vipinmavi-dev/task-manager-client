import React from "react";
import Style from "./loginHeader.module.css";

function LoginHeader() {
    return (
        <header className={Style.pageHeading}>
            <h2>Sign In - Work Manager</h2>
            <span>Sign in to your account to manage your work tickets</span>
        </header>
    )
}

export default LoginHeader;