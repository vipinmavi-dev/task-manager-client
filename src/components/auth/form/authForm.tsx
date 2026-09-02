import React from "react";
import Style from "./authForm.module.css";

interface FormProps {
    formContent?: React.ReactNode, 
    loginPrompt?: React.ReactNode
}

function Form({formContent, loginPrompt}: FormProps) {
    return (
        <div className={Style.loginCard}>
            <form>
                {formContent}
            </form>
            {loginPrompt}
        </div>

    )
}
export default Form;