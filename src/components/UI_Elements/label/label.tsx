import React from "react";
import Style from "./label.module.css";

function Label({htmlFor, value }: 
    {htmlFor: string, value:string}) {
    return (
        <>
            <label className={Style.label} htmlFor={htmlFor}>{value}</label>
        </>
    )
}

export default Label;