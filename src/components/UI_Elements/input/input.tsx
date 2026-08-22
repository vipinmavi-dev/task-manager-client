import React from "react";
import { InputProps } from "./input.types.ts";
import Style from "./input.module.css";

function Input({ type, placeholder, id, isRequired, value }: InputProps) {

    return <input className={type === "submit" ? Style.submit : Style.text} type={type}
        placeholder={placeholder} name={type} value={value} id={id} required={isRequired} autoComplete="off" />
}

export default Input;