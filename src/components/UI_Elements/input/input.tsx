import React from "react";
import Style from "./input.module.css";

function Input({type, placeholder, id, isRequired, value }: 
    {type: string, placeholder?: string, id:string,  isRequired?: boolean, value?:string}) {
    
    return <input className={type=="submit" ? Style.submit : Style.text} type={type}
    placeholder={placeholder} name={type} value={value} id={id} required={isRequired} />
}

export default Input;