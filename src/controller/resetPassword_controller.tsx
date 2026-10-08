import React, { useState, useEffect } from "react";
import { ResetPasswordPage } from "../pages/index.tsx";
import { matchPasswords } from "../utils/matchPasswords.ts";
import { validatePassword } from "../utils/validationPassword.ts";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../services/auth.service.ts";
import { FailedToast, SuccessToast } from "../utils/toast.ts";
import { ROUTES } from "../constants/routes.ts";

const ResetPasswordController = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [form, setform] = useState({
    token: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get("token");
    setform((prevForm) => ({
      ...prevForm,
      token: token || "",
    }));
  }, []);
  const handleShowPassword = (obj) => {
    setShowPassword((prevShowPassword) => ({
      ...prevShowPassword,
      ...obj,
    }));
  };
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    const input = event.currentTarget;
    setform((prevForm) => ({
      ...prevForm,
      [id]: value,
    }));

    id === "password" && validatePassword(form.password, input);
    id === "confirmPassword" && matchPasswords(form.password, value, input);
  };
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const { confirmPassword, ...payload } = form;
      const res = await resetPassword(payload);
      if (res.data.success) {
        SuccessToast(res.data.message);
        navigate(ROUTES.LOGIN);
      } else {
        FailedToast(res.data.message);
        throw new Error(res.data.message);
      }
    } catch (error) {
      console.log("Error resetting password:", error);
    }
  };
  return (
    <ResetPasswordPage
      showPassword={showPassword}
      handleShowPassword={handleShowPassword}
      handleFormChange={handleFormChange}
      handleFormSubmit={handleFormSubmit}
      form={form}
    />
  );
};
export default ResetPasswordController;
