import React, {useState, useRef, } from "react";
import {useNavigate} from "react-router-dom";
import { SingUpPage } from "../pages/index.tsx";
import { validatePassword } from "../utils/validation.ts";
import { signupUser } from "../services/auth.service.ts";
import { FailedToast } from "../utils/toast.ts";
import { ROUTES } from "../constants/routes.ts";

function SingUpController() {
    const [form, setFormData] = useState({});
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const navigate = useNavigate();

    // Handle input change    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        const input = e.currentTarget;

        setFormData((form) => ({ // update the form state
            ...form,
            [id]: value
        }));
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {

            // password validation with debounce
            if (id === "password") {
                var isValidated = validatePassword(value); //validate password
                if(!isValidated){
                    input.setCustomValidity(
                        `Password must:
                        • be 8+ characters long
                        • include uppercase and lowercase letters
                        • include a number and special character`
                    );
                }
                else input.setCustomValidity("");
            }
            if(id === "confirmPassword"){
                if(value !== form?.password) input.setCustomValidity("Passwords do not match");
                else input.setCustomValidity("");
            }
        },500);  
    }
    const signUpUser = async (e: React.FormEvent<HTMLFormElement>) => {
        // todo: Prevent the multiple request in very short time
        e.preventDefault();
        const {confirmPassword, ...payload} = form;
        var res;
        try {
            res = await signupUser(payload);
            navigate(ROUTES.LOGIN, {
                state: { message: "Account created successfully! Please login." }
            });
            console.log(res);
        } catch (error) {
            if(error?.response)FailedToast(error?.response?.data?.message || "Something went wrong!"); // Server respond with error status
            else FailedToast(error.message); // Network error
        }

    }
    return <SingUpPage form={form} handleChange={handleChange} signUpUser={signUpUser}/>
}

export default SingUpController