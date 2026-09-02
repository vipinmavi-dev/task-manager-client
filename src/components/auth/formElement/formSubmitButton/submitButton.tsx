import React from "react";
import Style from "./submitButton.module.css";

interface SubmitButtonProps { 
    text: string, 
    icon: string 
}

function SubmitButton({ text, icon }: SubmitButtonProps) {
    return (
        <button
            type="submit"
            className={Style.signInButton}
        >
            <span>{icon}</span>
            {text}
        </button>
    )
}

export default SubmitButton;