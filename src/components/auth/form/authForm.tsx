import React from "react";
import Style from "./authForm.module.css";

interface FormProps {
    formContent?: React.ReactNode, 
    loginPrompt?: React.ReactNode,
    submitHandler?: (e: React.FormEvent<HTMLFormElement>) => void
}

function Form({formContent, loginPrompt, submitHandler}: FormProps) {
    return (
        <div className={Style.loginCard}>
            <form onSubmit={submitHandler}>
                {formContent}
            </form>
            {loginPrompt}
        </div>

    )
}
export default Form;