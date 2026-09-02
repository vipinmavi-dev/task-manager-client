import React from "react";
import Style from "./authPrompt.module.css";

function AuthPrompt({message, linkText, linkTo}: 
    {message:string, linkText:string, linkTo:string}) {
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