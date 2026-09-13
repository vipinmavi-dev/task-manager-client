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
function LoginPage({handleChange, form, userLogin}: {
    handleChange: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    form: {
        email: string;
        password: string;
    },
    userLogin : (e: React.FormEvent<HTMLFormElement>)=>void
}) {
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
                submitHandler={userLogin}
                formContent={
                    <>
                        <InputFieldWrapper> {/* Email */}
                            <Label htmlFor="email" text="Email address" />
                            <Input 
                                type="email" 
                                placeholder="you@example.com" 
                                id="email" 
                                required={true} 
                                value={form.email} 
                                handleChange= {handleChange}
                            />
                        </InputFieldWrapper>
                        <PasswordFieldWrapper 
                            id="password" 
                            form={form}
                            handleChange={handleChange}
                            forgotPasswordProps={forgotPasswordProps} 
                        /> {/* Password */}
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