import React from "react";
import { InputProps } from "./input.types.ts";
import Style from "./input.module.css";

function Input({ type, placeholder, id, required, value }: InputProps) {

    return <input
        className={Style.input}
        id={id}
        name={type}
        type={type}
        placeholder={placeholder}
    />
}

export default Input;