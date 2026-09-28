import React from "react";
import Style from "./submitButton.module.css";

interface SubmitButtonProps { 
    text: string, 
    afterSubmitText?: string,
    icon: React.ReactNode,
    isSubmitting?: boolean
}

function SubmitButton(
    { text, icon, isSubmitting, afterSubmitText }: SubmitButtonProps) 
{
    return (
        <button
            type="submit"
            className={Style.signInButton}
            disabled={isSubmitting}
        >
            {icon}
            {isSubmitting ? afterSubmitText : text }
        </button>
    )
}

export default SubmitButton;