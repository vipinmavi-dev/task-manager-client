import React from "react";
import Style from "./authPrompt.module.css";

interface AuthPromptProps {
    message:string, 
    linkText:string, 
    linkTo:string
}

function AuthPrompt({message, linkText, linkTo}: AuthPromptProps) {
    return (
        <div className={Style.registerText}>
            <span>{message}</span>

            <a href={linkTo}>
                {linkText}
            </a>
        </div>
    )
}
export default AuthPrompt;