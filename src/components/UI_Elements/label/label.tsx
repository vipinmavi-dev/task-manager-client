import React from "react";
import Style from "./label.module.css";

interface LabelProps {
    text: string;
    htmlFor: string;
}

function Label({ htmlFor, text }: LabelProps) {
    return (
        <label className={Style.label} htmlFor={htmlFor}>{text}</label>
    )
}

export default Label;