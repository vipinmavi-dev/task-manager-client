import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginPage } from "../pages/index.tsx";
import { loginUser } from "../services/auth.service.ts";
import { SuccessToast, FailedToast } from "../utils/toast.ts";
import { ROUTES } from "../constants/routes.ts";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/auth/auth.ts";
import { type LoginForm } from "../types/auth.ts";

function Login_controller() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const hasShown = useRef<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [form, setForm] = useState<LoginForm>({
        email: "",
        password: "",
    });

    useEffect(() => {
        if (location.state?.message && !hasShown.current) {
          SuccessToast(location.state.message);
          hasShown.current = true;
        }
    },[location.state]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setForm((prev)=>({
            ...prev,
            [id]: value,
        }));
    }
    
    const userLogin = async (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();

        if(isSubmitting) return; // Prevent multiple submissions
        setIsSubmitting(true);

        try {
            const user= await loginUser(form);
            
            dispatch(loginSuccess({
                data: user.data.data
            }));
            localStorage.setItem("User", JSON.stringify({
                data: user.data.data,
                isAuthenticated: true
            }));
            
            navigate(ROUTES.LIST, {
                state: { message: "Login successful! Welcome back."}
            })
        } catch (error) {
            let err = error?.response?.data?.message ||
                      error.message || 
                      "An error occurred during login.";

            FailedToast(err);
        }finally{
            setIsSubmitting(false);
        }
    }
    
    return <LoginPage 
                handleChange={handleChange} 
                form={form} 
                userLogin={userLogin}
                isSubmitting={isSubmitting}
                showPassword={showPassword}
                makePasswordVisible={()=>setShowPassword(true)}
                makePasswordHidden={()=>setShowPassword(false)}
            />
}

export default Login_controller;