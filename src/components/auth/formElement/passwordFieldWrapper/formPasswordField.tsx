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
    id: string,
    form: any,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    forgotPasswordProps?: ForgotPasswordProps
}
function PasswordFieldWrapper({
    id,
    forgotPasswordProps = { willShow: false },
    form,
    handleChange
}: PasswordFieldWrapperProps) {
    return (
        <div className={Style.formGroup}>
            {/* Forgot password button */}
            <div className={Style.passwordHeader}>
                <Label htmlFor="password" text="Password" />

                {forgotPasswordProps.willShow && <ForgotPassword linkURL={forgotPasswordProps?.linkURL} />}
            </div>
            {/* Password input field with show & hide toggle button */}
            <div className={Style.passwordInput}>
                <Input
                    type="password"
                    placeholder="••••••••"
                    id={id}
                    required={true}
                    value={form?.[id]} 
                    handleChange={handleChange} 
                />

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