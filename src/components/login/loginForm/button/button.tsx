import React from "react";
import Style from "./form.module.css";

function Button() {
    return (
        <>
            <input className={Style.button} type="submit" value="Sign In" />
        </>
    )
}

export default Button;