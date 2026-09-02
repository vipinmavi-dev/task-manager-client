import React from "react";
import Style from "./forgotPassword.module.css";

function ForgotPassword() {
    return (
        <a href="/forgot" className={Style.forgotLink}>
            Forgot password?
        </a>
    )
}
export default ForgotPassword;