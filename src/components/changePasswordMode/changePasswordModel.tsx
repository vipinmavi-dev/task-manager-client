import React from "react";
import Style from "./changePasswordModel.module.css";
import { Input, Label } from "../UI_Elements/index.tsx";
import {
    X,
    Eye,
    EyeOff,
    LockKeyhole,
    CheckCircle2,
} from "lucide-react";

interface ChangePasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
    changePasswordData: {
        currentPassword: string;
        newPassword: string;
        confirmNewPassword: string;
    };
    handleChangePasswordData: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangePasswordSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function ChangePasswordModal({
    isOpen,
    onClose,
    changePasswordData,
    handleChangePasswordData,
    handleChangePasswordSubmit
}: ChangePasswordModalProps) {

    if (!isOpen) return null;

    return (
        <div className={Style.overlay}>

            <div
                className={Style.modal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="change-password-title"
            >

                {/* Header */}
                <div className={Style.modalHeader}>

                    <div className={Style.titleWrapper}>
                        <div className={Style.titleIcon}>
                            <LockKeyhole size={20} />
                        </div>

                        <div>
                            <h2 id="change-password-title">
                                Change Password
                            </h2>

                            <p>
                                Update your password to keep your account secure.
                            </p>
                        </div>
                    </div>

                    <button
                        type="button"
                        className={Style.closeButton}
                        onClick={onClose}
                        aria-label="Close"
                    >
                        <X size={20} />
                    </button>

                </div>
                <form onSubmit={handleChangePasswordSubmit}>
                    {/* Body */}
                    <div className={Style.modalBody}>

                        {/* Current Password */}
                        <div className={Style.formGroup}>
                            <Label 
                                htmlFor="currentPassword"
                                text="Current Password"
                                showRequiredSign={true}
                            />

                            <div className={Style.inputWrapper}>
                                <LockKeyhole size={17} />
                                <Input
                                    id="currentPassword"
                                    type="password"
                                    placeholder="Enter current password"
                                    value={changePasswordData.currentPassword}
                                    required={true}
                                    handleChange={handleChangePasswordData}
                                />

                                <button
                                    type="button"
                                    className={Style.passwordToggle}
                                    aria-label="Show password"
                                >
                                    <Eye size={17} />
                                </button>
                            </div>
                        </div>


                        {/* New Password */}
                        <div className={Style.formGroup}>
                            <Label 
                                htmlFor="newPassword"
                                text="New Password"
                                showRequiredSign={true}
                            />

                            <div className={Style.inputWrapper}>
                                <LockKeyhole size={17} />

                                <Input 
                                    id="newPassword"
                                    type="password"
                                    placeholder="Enter new password"
                                    value={changePasswordData.newPassword}
                                    required={true}
                                    handleChange={handleChangePasswordData}
                                />

                                <button
                                    type="button"
                                    className={Style.passwordToggle}
                                    aria-label="Show password"
                                >
                                    <Eye size={17} />
                                </button>
                            </div>
                        </div>


                        {/* Confirm Password */}
                        <div className={Style.formGroup}>
                            <Label
                                htmlFor="confirmNewPassword"
                                text="Confirm New Password"
                                showRequiredSign={true}
                            />

                            <div className={Style.inputWrapper}>
                                <LockKeyhole size={17} />

                                <Input 
                                    id="confirmNewPassword"
                                    type="password"
                                    placeholder="Confirm new password"
                                    value={changePasswordData.confirmNewPassword}
                                    required={true}
                                    handleChange={handleChangePasswordData}
                                />

                                <button
                                    type="button"
                                    className={Style.passwordToggle}
                                    aria-label="Show password"
                                >
                                    <Eye size={17} />
                                </button>
                            </div>
                        </div>


                        {/* Password Requirements */}
                        <div className={Style.passwordRequirements}>

                            <div className={Style.requirementTitle}>
                                <CheckCircle2 size={15} />
                                Password requirements
                            </div>

                            <ul>
                                <li>At least 8 characters</li>
                                <li>At least one uppercase & lowercase letter</li>
                                <li>At least one number</li>
                                <li>At least one special symbole</li>
                            </ul>

                        </div>

                    </div>


                    {/* Footer */}
                    <div className={Style.modalFooter}>

                        <button
                            type="button"
                            className={Style.cancelButton}
                            onClick={onClose}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className={Style.updateButton}
                        >
                            Update Password
                        </button>

                    </div>
                </form>
            </div>

        </div>
    );
}

export default ChangePasswordModal;