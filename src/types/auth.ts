import React from "react";

export interface SignupForm {
    name: string;
    email: string;
    pasword: string;
    confirmPassword: string;
}
type ForgotPasswordProps = {
    willShow: true;
    linkURL: string;
} | {
    willShow: false;
}
type ShowPassword = {
    password: boolean;
    confirmPassword: boolean;
}
export interface SignUpPageProps {
    form: SignupForm;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    signUpUser: (e: React.FormEvent<HTMLFormElement>) => void;
    isSubmitting: boolean;
    showPassword: ShowPassword;
    makePasswordVisible: (e: React.PointerEvent<HTMLButtonElement>) => void;
    makePasswordHidden: (e: React.PointerEvent<HTMLButtonElement>) => void;
}
export interface PasswordFieldWrapperProps {
    id: string;
    form: SignupForm;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    forgotPasswordProps?: ForgotPasswordProps;
    showPassword: boolean;
    onPointerDown: (e: React.PointerEvent<HTMLButtonElement>) => void;
    onPointerUp: (e: React.PointerEvent<HTMLButtonElement>) => void;
}