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
    const forgotPasswordProps = {
        willShow: true,
        linkURL: ROUTES.FORGOT_PASSWORD
    }
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
                        <PasswordFieldWrapper labelText={"Password"} id="password" required={true} forgotPasswordProps={forgotPasswordProps} /> {/* Password */}
                        <SubmitButton text="Sign in" icon="↪" /> {/* Sign In */}
                    </>
                }
                loginPrompt={
                    <>
                        <Prompt message="Don't have an account?" linkText="Create one" linkTo={ROUTES.SIGNUP} /> {/* Register */}
                    </>
                }
            />
            <Footer linkText="Continue as Guest" linkURL={ROUTES.LIST} labelMessage="Just browsing?" /> {/* Guest */}
        </>
    )
}

export default LoginPage;