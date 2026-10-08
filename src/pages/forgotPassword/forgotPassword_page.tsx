import React from "react";
import { ROUTES } from "../../constants/routes.ts";
import {
  Header,
  Form,
  InputFieldWrapper,
  SubmitButton,
  Footer,
} from "../../components/auth/index.tsx";
import { Input, Label } from "../../components/UI_Elements/index.tsx";

function ForgotPasswordPage({
  email,
  setEmail,
  handleForgotPassword,
}: {
  email: string;
  setEmail: (email: string) => void;
  handleForgotPassword: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <>
      {/* Heading with Logo */}
      <Header
        pageTitle="Forgot password?"
        subTitle="Enter your email and we'll verify your account."
      />
      <Form
        submitHandler={handleForgotPassword}
        formContent={
          <>
            <InputFieldWrapper>
              {" "}
              {/* Email */}
              <Label
                htmlFor="forgotEmail"
                text="Email address"
                showRequiredSign={false}
              />
              <Input
                type="email"
                placeholder="you@example.com"
                id="forgotEmail"
                required={true}
                value={email}
                handleChange={(e) => setEmail(e.target.value)}
              />
            </InputFieldWrapper>
            <SubmitButton text="Continue" icon="✉️" /> {/* Sign In */}
          </>
        }
      />
      <Footer linkURL={ROUTES.LOGIN} linkText="← Back to Sign In" />{" "}
      {/* Guest */}
    </>
  );
}

export default ForgotPasswordPage;
