import React from "react";
import Style from "./label.module.css";

interface LabelProps {
    text: string;
    htmlFor: string;
    showRequiredSign: boolean;
}

function Label(
    { htmlFor, text, showRequiredSign }: LabelProps) {
    return (
        <label className={Style.label} htmlFor={htmlFor}>
            {text} {showRequiredSign && <span className={Style.required}>*</span>}
        </label>
    )
}

export default Label;