import React from "react";
export interface LoginForm {
    email: string;
    password: string;
}
export interface SignupForm extends LoginForm {
    name: string;
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
    form: SignupForm | LoginForm;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    forgotPasswordProps?: ForgotPasswordProps;
    showPassword: boolean;
    onPointerDown: (e: React.PointerEvent<HTMLButtonElement>) => void;
    onPointerUp: (e: React.PointerEvent<HTMLButtonElement>) => void;
}
export interface User {
    name: string;
    email: string;
    phone: string | null;
    photo: string | null;
}

export interface LoginResponse {
success: boolean;
message: string;
data: User;
}
export interface LoginPageProps {
    handleChange: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    form: {
        email: string;
        password: string;
    },
    userLogin : (e: React.FormEvent<HTMLFormElement>)=>void;
    isSubmitting: boolean;
    showPassword: boolean;
    makePasswordVisible: () => void;
    makePasswordHidden: () => void;
}