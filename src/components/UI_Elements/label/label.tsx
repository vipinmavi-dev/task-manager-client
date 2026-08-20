import React from "react";
import Style from "./label.module.css";

interface LabelProps {
    value: string;
    htmlFor: string;
}

function Label({ htmlFor, value }: LabelProps) {
    return (
        <label className={Style.label} htmlFor={htmlFor}>{value}</label>
    )
}

export default Label;