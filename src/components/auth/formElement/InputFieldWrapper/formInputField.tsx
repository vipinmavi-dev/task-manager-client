import React from "react";
import Style from "./formInputField.module.css";
import {Input, Label} from "../../../UI_Elements/index.tsx";

function FormInputFieldWrapper({children}: {children?: React.ReactNode}) {
    return (
        <div className={Style.formGroup}>
            {children}
        </div>
    )
}

export default FormInputFieldWrapper;