import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { LoginPage } from "../pages/index.tsx";
import { SuccessToast } from "../utils/toast.ts";

function Login_controller() {
    const location = useLocation();
    const hasShown = useRef(false);
    useEffect(() => {
        if (location.state?.message && !hasShown.current) {
          SuccessToast(location.state.message);
          hasShown.current = true;
        }
      }, []);
      
    return <LoginPage />
}

export default Login_controller;