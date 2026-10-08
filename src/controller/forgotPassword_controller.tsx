import React, { useState } from "react";
import { ForgotPasswordPage } from "../pages/index.tsx";
import { forgotPasswordService } from "../services/forgotPassword_service.ts";
import { FailedToast, SuccessToast } from "../utils/toast.ts";

function ForgotPasswordController() {
  const [email, setEmail] = useState<string>("");
  const handleForgotPassword = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    try {
      event.preventDefault();
      const response = await forgotPasswordService({ email });
      console.log("Forgot password response:", response);
      if (response.data.success) {
        SuccessToast("Password reset email sent successfully.");
      } else throw new Error("Failed to send password reset email.");
    } catch (error) {
      console.error("Error sending forgot password request:", error);
      FailedToast("Failed to send password reset email.");
    }
  };
  return (
    <ForgotPasswordPage
      email={email}
      setEmail={setEmail}
      handleForgotPassword={handleForgotPassword}
    />
  );
}

export default ForgotPasswordController;
