import React from "react";
import Style from "./formPasswordField.module.css";
import { Input, Label } from "../../../UI_Elements/index.tsx";
import { ForgotPassword } from "../../index.tsx";
import { Eye, EyeOff } from "lucide-react";
import { type PasswordFieldWrapperProps } from "../../../../types/auth.ts";

function PasswordFieldWrapper({
    id,
    form,
    handleChange,
    forgotPasswordProps = { willShow: false },
    showPassword,
    onPointerDown,
    onPointerUp
}: PasswordFieldWrapperProps) {
    return (
        <div className={Style.formGroup}>
            {/* Forgot password button */}
            <div className={Style.passwordHeader}>
                <Label 
                    htmlFor="password" 
                    text="Password" 
                    showRequiredSign={false}
                />

                {forgotPasswordProps.willShow && <ForgotPassword 
                                                    linkURL={forgotPasswordProps.linkURL} 
                                                 />}
            </div>
            {/* Password input field with show & hide toggle button */}
            <div className={Style.passwordInput}>
                <Input
                    type={showPassword? "text":"password"}
                    placeholder="••••••••"
                    id={id}
                    required={true}
                    value={form?.[id]} 
                    handleChange={handleChange} 
                />

                <button
                    id={id}
                    type="button"
                    className={Style.passwordToggle}
                    aria-label="Show password"
                    onPointerDown={onPointerDown}
                    onPointerUp={onPointerUp}
                    onPointerLeave={onPointerUp}

                > 
                    {true ?
                        <Eye size={16} />:
                        <EyeOff size={16} />
                    }
                </button>
            </div>
        </div>
    )
}

export default PasswordFieldWrapper;