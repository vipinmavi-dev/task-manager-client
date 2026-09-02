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

function SingUp() {
    return (
        <>
            <Header pageTitle={"Create an account"} subTitle={"Join Productivity Hub for free"}/>
            <Form
                formContent= {
                    <>
                        <InputFieldWrapper> {/* Full name */}
                            <Label htmlFor="fullName" text="Full name" />
                            <Input type="text" placeholder="Jane Doe" id="fullName" required={true} />
                        </InputFieldWrapper> 

                        <InputFieldWrapper> {/* Email */}
                            <Label htmlFor="userEmail" text="Email address" />
                            <Input type="email" placeholder="you@example.com" id="userEmail" required={true} />
                        </InputFieldWrapper> 
                        
                        <PasswordFieldWrapper labelText={"Password"} id="passwordSignUp" required={true} showForgot={false} /> {/* Password */}
                        <PasswordFieldWrapper labelText={"Confirm password"} id="confirmPassword" required={true} showForgot={false} /> {/* Password */}
                        <SubmitButton text="Create account" icon="♙"/> {/* Sign In */}
                    </>
                }
                loginPrompt= {
                    <>
                        <Prompt message="Already have an account?" linkText="Sign in" linkTo="/auth/login"/> {/* Register */}
                    </>
                }
            />
            <Footer/> {/* Guest */}
        </>
    );
}

export default SingUp;