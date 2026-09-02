import React from "react";
import Style from "./submitButton.module.css";

function SubmitButton({ text, icon }: { text: string, icon: string }) {
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