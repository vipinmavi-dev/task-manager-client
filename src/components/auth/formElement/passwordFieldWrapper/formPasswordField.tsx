import React from "react";
import Style from "./formPasswordField.module.css";
import { Input, Label } from "../../../UI_Elements/index.tsx";
import { ForgotPassword } from "../../index.tsx";

type ForgotPasswordProps = {
    willShow: true,
    linkURL: string
} | {
    willShow: false
}
interface PasswordFieldWrapperProps { 
    labelText: string, 
    id: string, 
    required: boolean, 
    forgotPasswordProps: ForgotPasswordProps 
}
function PasswordFieldWrapper({ labelText, id, required, forgotPasswordProps={willShow:false} }: PasswordFieldWrapperProps) {
    return (
        <div className={Style.formGroup}>
            <div className={Style.passwordHeader}>
                <Label htmlFor={id} text={labelText} />

                {forgotPasswordProps.willShow && <ForgotPassword linkURL={forgotPasswordProps?.linkURL}/>}
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