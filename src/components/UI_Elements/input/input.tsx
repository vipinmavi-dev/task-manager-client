import React from "react";
import { InputProps } from "./input.types.ts";
import Style from "./input.module.css";

function Input({ type, placeholder, id, required, value, handleChange }: InputProps) {

    return <input
        className={Style.input}
        id={id}  // id is the field name, used for form data binding
        name={type}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
    />
}

export default Input;