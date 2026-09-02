import React from "react";
import Style from "./authForm.module.css";

function Form({formContent, loginPrompt}: {formContent?: React.ReactNode, loginPrompt?: React.ReactNode}) {
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