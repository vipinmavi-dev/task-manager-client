import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SingUpPage } from "../pages/index.tsx";
import { validatePassword } from "../utils/validationPassword.ts";
import { signupUser } from "../services/auth.service.ts";
import { FailedToast } from "../utils/toast.ts";
import { ROUTES } from "../constants/routes.ts";
import { type SignupForm } from "../types/auth.ts";

function SingUpController() {
  const navigate = useNavigate();
  const [form, setFormData] = useState<SignupForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const makePasswordVisible = (e: React.PointerEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    setShowPassword({
      ...showPassword,
      [id]: true,
    });
  };
  const makePasswordHidden = (e: React.PointerEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    setShowPassword({
      ...showPassword,
      [id]: false,
    });
  };
  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const input = e.currentTarget;

    setFormData((form) => ({
      // update the form state
      ...form,
      [id]: value,
    }));

    clearTimeout(timerRef.current); // clear the previous timer if it exists
    timerRef.current = setTimeout(() => {
      // debounce
      if (id === "password") validatePassword(value, input); // validate password
      if (id === "confirmPassword")
        input.setCustomValidity(
          // match confirm password with password
          value === form.password ? "" : "Passwords do not match"
        );
    }, 500);
  };
  const signUpUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { confirmPassword, ...payload } = form;

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      await signupUser(payload);
      navigate(ROUTES.LOGIN, {
        state: { message: "Account created successfully! Please login." },
      });
    } catch (error) {
      let err =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong!";
      FailedToast(err);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SingUpPage
      form={form}
      handleChange={handleChange}
      signUpUser={signUpUser}
      isSubmitting={isSubmitting}
      showPassword={showPassword}
      makePasswordVisible={makePasswordVisible}
      makePasswordHidden={makePasswordHidden}
    />
  );
}

export default SingUpController;
