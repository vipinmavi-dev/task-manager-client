import React from "react";
import Style from "./submitButton.module.css";

interface SubmitButtonProps { 
    text: string;
    icon: React.ReactNode;
    disabled: boolean;
}

function SubmitButton(
    { text, icon, disabled }: SubmitButtonProps) 
{
    return (
        
        <button
            type="submit"
            className={Style.signInButton}
            disabled={disabled}
        >
            {icon}
            { text }
        </button>
    )
}

export default SubmitButton;