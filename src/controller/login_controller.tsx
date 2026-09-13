import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginPage } from "../pages/index.tsx";
import { loginUser } from "../services/auth.service.ts";
import { SuccessToast, FailedToast } from "../utils/toast.ts";
import { ROUTES } from "../constants/routes.ts";

function Login_controller() {
    const location = useLocation();
    const navigate = useNavigate();
    const hasShown = useRef(false);
    type LoginForm = {
        email: string;
        password: string;
    };

    useEffect(() => {
        if (location.state?.message && !hasShown.current) {
          SuccessToast(location.state.message);
          hasShown.current = true;
        }
    });
    const [form, setForm] = useState<LoginForm>({
        email: "",
        password: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setForm({
            ...form,
            [id]: value,
        });
    }
    const userLogin = async (e)=> {
        e.preventDefault();

        let payload = {
            email: form?.email,
            password: form?.password
        }
        try {
            await loginUser(payload);
            // TODO: Store user and continue to Task operation
            navigate(ROUTES.LIST, {
                state: { message: "Login successful! Welcome back."}
            })
        } catch (error) {
            if(error?.response) FailedToast(error.response.data.message)
            else FailedToast(error.message);
        }
    }
    
    return <LoginPage handleChange={handleChange} form={form} userLogin={userLogin}/>
}

export default Login_controller;