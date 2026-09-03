import React from "react";
import Style from "./forgotPassword.module.css";

function ForgotPassword({linkURL}: {linkURL: string}) {
    return (
        <a href={linkURL} className={Style.forgotLink}>
            Forgot password?
        </a>
    )
}
export default ForgotPassword;