import React from "react";
import Style from "./button.module.css";

function Button({type, value}: {type:string, value:string}) {
    return <input className={Style.button} type={type} value={value} />
}

export default Button;