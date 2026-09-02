import React from "react";
import { ROUTES } from "../../constants/routes.ts";
import {
    Header,
    Form,
    InputFieldWrapper,
    PasswordFieldWrapper,
    SubmitButton,
    Prompt,
    Footer
} from "../../components/auth/index.tsx";
import { 
    Input, 
    Label 
} from "../../components/UI_Elements/index.tsx";
function LoginPage() {
    return (
        <>
            {/* Heading with Logo */}
            <Header pageTitle={"Welcome back"} subTitle={"Sign in to your Productivity Hub"} />

            {/* Login Card */}
            <Form
                formContent={
                    <>
                        <InputFieldWrapper> {/* Email */}
                            <Label htmlFor="userEmail" text="Email address" />
                            <Input type="email" placeholder="you@example.com" id="userEmail" required={true} />
                        </InputFieldWrapper> 
                        <PasswordFieldWrapper labelText={"Password"} id="password1" required={true} showForgot={true} /> {/* Password */}
                        <SubmitButton text="Sign in" icon="↪" /> {/* Sign In */}
                    </>
                }
                loginPrompt={
                    <>
                        <Prompt /> {/* Register */}
                    </>
                }
            />
            <Footer /> {/* Guest */}
        </>
    )
}

export default LoginPage;