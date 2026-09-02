import React from "react";
import Style from "./authPrompt.module.css";

function AuthPrompt() {
    return (
        <div className={Style.registerText}>
            <span>Don't have an account?</span>

            <a href="/singup">
                Create one
            </a>
        </div>
    )
}
export default AuthPrompt;