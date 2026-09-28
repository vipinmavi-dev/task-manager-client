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
import { UserRound } from "lucide-react";
import { type SignUpPageProps } from "../../types/auth.ts";
function SingUp(
    { 
        form, 
        handleChange, 
        signUpUser ,
        isSubmitting,
        showPassword,
        makePasswordVisible,
        makePasswordHidden
    } : SignUpPageProps) {
    return (
        <>
            <Header 
                pageTitle={"Create an account"} 
                subTitle={"Join Productivity Hub for free"} 
            />
            <Form
                submitHandler={signUpUser}
                formContent={
                    <>  {/* Full name */}
                        <InputFieldWrapper> 
                            <Label 
                                htmlFor="fullName" 
                                text="Full name"
                                showRequiredSign={false} 
                            />
                            <Input 
                                type="text" 
                                placeholder="Jane Doe" 
                                id="name" 
                                required={true} 
                                value={form?.name} 
                                handleChange={handleChange} 
                            />
                        </InputFieldWrapper>

                        {/* Email */}
                        <InputFieldWrapper> 
                            <Label 
                                htmlFor="userEmail" 
                                text="Email address" 
                                showRequiredSign={false}
                            />
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
                            showPassword={showPassword.password}
                            onPointerDown={makePasswordVisible}
                            onPointerUp={makePasswordHidden}
                        /> 
                        {/* Confirm Password */}
                        <PasswordFieldWrapper 
                            id="confirmPassword"
                            form={form}
                            handleChange={handleChange}
                            showPassword={showPassword.confirmPassword}
                            onPointerDown={makePasswordVisible}
                            onPointerUp={makePasswordHidden}
                        /> 
                        {/* Sign In button */}
                        <SubmitButton 
                            text={isSubmitting? "Creating..." : "Create account" }
                            icon={<UserRound size={16}/>} 
                            disabled={isSubmitting}
                        /> 
                    </>
                }
                loginPrompt={
                    <>
                        <Prompt message="Already have an account?" linkText="Sign in" linkTo="/auth/login" /> {/* Register */}
                    </>
                }
            />
            {/* Guest */}
            <Footer 
                labelMessage="Just browsing?"
                linkText="Continue as Guest" 
                linkURL={ROUTES.LIST}  
            />
        </>
    );
}

export default SingUp;