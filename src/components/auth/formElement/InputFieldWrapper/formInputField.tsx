import React from "react";
import Style from "./formInputField.module.css";

function FormInputFieldWrapper({children}: {children?: React.ReactNode}) {
    return (
        <div className={Style.formGroup}>
            {children}
        </div>
    )
}

export default FormInputFieldWrapper;