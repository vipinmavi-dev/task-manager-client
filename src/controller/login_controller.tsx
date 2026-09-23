import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginPage } from "../pages/index.tsx";
import { loginUser } from "../services/auth.service.ts";
import { SuccessToast, FailedToast } from "../utils/toast.ts";
import { ROUTES } from "../constants/routes.ts";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/auth/auth.ts";

function Login_controller() {
    const dispatch = useDispatch();
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
            const user = await loginUser(payload);
            dispatch(loginSuccess({
                data: user.data?.data
            }));
            localStorage.setItem("User", JSON.stringify({
                data: user.data?.data,
                isAuthenticated: true
            }));
            
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