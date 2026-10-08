import React from "react";
import { KeyRound } from "lucide-react";
import {
  Header,
  Form,
  PasswordFieldWrapper,
  SubmitButton,
  Prompt,
} from "../../components/auth/index.tsx";
import { ROUTES } from "../../constants/routes.ts";

function ResetPassword_page({
  form,
  handleFormChange,
  showPassword,
  handleShowPassword,
  handleFormSubmit,
}: {
  form: { password: string; confirmPassword: string };
  handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showPassword: { password: boolean; confirmPassword: boolean };
  handleShowPassword: (obj: any) => void;
  handleFormSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <>
      <Header
        pageTitle={"Reset your password"}
        subTitle={"Enter your new password below."}
      />
      <Form
        submitHandler={handleFormSubmit}
        formContent={
          <>
            {/* Password */}
            <PasswordFieldWrapper
              labelText="Password"
              id="password"
              form={form}
              handleChange={handleFormChange}
              showPassword={showPassword.password}
              onPointerDown={() => handleShowPassword({ password: true })}
              onPointerUp={() => handleShowPassword({ password: false })}
            />
            {/* Confirm Password */}
            <PasswordFieldWrapper
              labelText="Confirm Password"
              id="confirmPassword"
              form={form}
              handleChange={handleFormChange}
              showPassword={showPassword.confirmPassword}
              onPointerDown={() =>
                handleShowPassword({ confirmPassword: true })
              }
              onPointerUp={() => handleShowPassword({ confirmPassword: false })}
            />
            {/* Sign In button */}
            <SubmitButton
              text={false ? "Reseting..." : "Reset Password"}
              icon={<KeyRound size={16} />}
              disabled={false}
            />
          </>
        }
        loginPrompt={
          <>
            <Prompt
              message=""
              linkText="← Back to Login"
              linkTo={ROUTES.LOGIN}
            />
          </>
        }
      />
    </>
  );
}

export default ResetPassword_page;
