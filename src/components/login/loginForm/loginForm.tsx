import React from "react";
import Style from "./loginForm.module.css";

function LoginForm({children}: {children?: React.ReactNode}) {
    return (
        <form className={Style.loginForm} autoComplete="off">
            {children}
        </form>
    )
}
export default LoginForm;