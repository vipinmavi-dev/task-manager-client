import React from "react";
import Style from "./formPasswordField.module.css";
import { Input, Label } from "../../../UI_Elements/index.tsx";
import { ForgotPassword } from "../../index.tsx";

function PasswordFieldWrapper({ labelText, id, required, showForgot=false }: 
    { labelText: string, id: string, required: boolean, showForgot: boolean }) {
        console.log("showForgot", showForgot)
        console.log("labelText", labelText)
        console.log("id", id)
    return (
        <div className={Style.formGroup}>
            <div className={Style.passwordHeader}>
                <Label htmlFor={id} text={labelText} />

                {showForgot && <ForgotPassword/>}
            </div>

            <div className={Style.passwordInput}>
                <Input type="password" placeholder="••••••••" id={id} required={required} />

                <button
                    type="button"
                    className={Style.passwordToggle}
                    aria-label="Show password"
                >
                    ◉
                </button>
            </div>
        </div>
    )
}

export default PasswordFieldWrapper;