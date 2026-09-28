import React from "react";
import Style from "./formInputField.module.css";

function InputFieldWrapper({children}: {children?: React.ReactNode}) {
    return (
        <div className={Style.formGroup}>
            {children}
        </div>
    )
}

export default InputFieldWrapper;