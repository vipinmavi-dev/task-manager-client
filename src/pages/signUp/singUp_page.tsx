import React from "react";
// import { ROUTES } from "../../constants/routes.ts";
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

function SingUp({ form, handleChange, signUpUser }: 
    { 
        form: any, 
        handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
        signUpUser: (e: React.FormEvent<HTMLFormElement>) => void
    }) {
    return (
        <>
            <Header pageTitle={"Create an account"} subTitle={"Join Productivity Hub for free"} />
            <Form
                submitHandler={signUpUser}
                formContent={
                    <>
                        <InputFieldWrapper> {/* Full name */}
                            <Label htmlFor="fullName" text="Full name" />
                            <Input 
                                type="text" 
                                placeholder="Jane Doe" 
                                id="name" 
                                required={true} 
                                value={form?.name} 
                                handleChange={handleChange} 
                            />
                        </InputFieldWrapper>

                        <InputFieldWrapper> {/* Email */}
                            <Label htmlFor="userEmail" text="Email address" />
                            <Input 
                                type="email" 
                                placeholder="you@example.com" 
                                id="email" 
                                required={true} 
                                value={form?.email} 
                                handleChange={handleChange} 
                            />
                        </InputFieldWrapper>

                        {/* Password */}
                        <PasswordFieldWrapper 
                            id="password"
                            form={form}
                            handleChange={handleChange}
                        /> 

                        {/* Confirm Password */}
                        <PasswordFieldWrapper 
                            id="confirmPassword"
                            form={form}
                            handleChange={handleChange}
                        /> 
                        <SubmitButton text="Create account" icon="♙" /> {/* Sign In */}
                    </>
                }
                loginPrompt={
                    <>
                        <Prompt message="Already have an account?" linkText="Sign in" linkTo="/auth/login" /> {/* Register */}
                    </>
                }
            />
            <Footer /> {/* Guest */}
        </>
    );
}

export default SingUp;