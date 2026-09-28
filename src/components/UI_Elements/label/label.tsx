import React from "react";
import Style from "./label.module.css";

interface LabelProps {
    text: string;
    htmlFor: string;
    required?: boolean;
}

function Label({ htmlFor, text, required=false }: LabelProps) {
    return (
        <label className={Style.label} htmlFor={htmlFor}>
            {text} {required && <span className={Style.required}>*</span>}
        </label>
    )
}

export default Label;