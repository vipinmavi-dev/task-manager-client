import React from "react";
import Style from "./authForm.module.css";

interface FormProps {
    formContent?: React.ReactNode, 
    loginPrompt?: React.ReactNode,
    signUpUser?: (e: React.FormEvent<HTMLFormElement>) => void
}

function Form({formContent, loginPrompt, signUpUser}: FormProps) {
    return (
        <div className={Style.loginCard}>
            <form onSubmit={signUpUser}>
                {formContent}
            </form>
            {loginPrompt}
        </div>

    )
}
export default Form;