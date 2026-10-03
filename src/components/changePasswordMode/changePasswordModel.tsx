import React from "react";
import Style from "./changePasswordModel.module.css";
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
}

function ChangePasswordModal({
    isOpen,
    onClose,
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

                {/* Body */}
                <div className={Style.modalBody}>

                    {/* Current Password */}
                    <div className={Style.formGroup}>
                        <label htmlFor="currentPassword">
                            Current Password
                        </label>

                        <div className={Style.inputWrapper}>
                            <LockKeyhole size={17} />

                            <input
                                id="currentPassword"
                                type="password"
                                placeholder="Enter current password"
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
                        <label htmlFor="newPassword">
                            New Password
                        </label>

                        <div className={Style.inputWrapper}>
                            <LockKeyhole size={17} />

                            <input
                                id="newPassword"
                                type="password"
                                placeholder="Enter new password"
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
                        <label htmlFor="confirmPassword">
                            Confirm New Password
                        </label>

                        <div className={Style.inputWrapper}>
                            <LockKeyhole size={17} />

                            <input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm new password"
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
                            <li>At least one uppercase letter</li>
                            <li>At least one number</li>
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
                        type="button"
                        className={Style.updateButton}
                    >
                        Update Password
                    </button>

                </div>

            </div>

        </div>
    );
}

export default ChangePasswordModal;