import React, {useState} from "react";
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

function SingUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
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
                        
                        <PasswordFieldWrapper/> {/* Password */}
                        <PasswordFieldWrapper/> {/* Password */}
                        <SubmitButton text="Sign in" icon="↪"/> {/* Sign In */}
                    </>
                }
                loginPrompt= {
                    <>
                        <Prompt/> {/* Register */}
                    </>
                }
            />
            <Footer/> {/* Guest */}
        </>
        // <>
        //     <LoginHeader pageTitle="Create an account" 
        //     subTitle="Enter your details to create your work ticket manager account"/>
        //     <LoginForm>
        //         <Label htmlFor="userName" text="Name" />
        //         <Input type="text" placeholder="Jhon smit" id="userName" isRequired={true} />
        //         <Label htmlFor="userEmail" text="Email" />
        //         <Input type="email" placeholder="your-id@example.com" id="userEmail" isRequired={true} />
        //         <Label htmlFor="userPassword" text="Password" />
        //         <Input type="password" placeholder="Password" id="userPassword" isRequired={true}/>
        //         <Label htmlFor="confirmPassword" text=" Confirm Password" />
        //         <Input type="password" placeholder="Confirm Your Password" id="confirmPassword" isRequired={true}/>
        //         <Input type="submit" id="loginSubmit" value="Create My Account"/>
        //     </LoginForm>
        //     <LoginFooter>
        //         <SignUpPrompt promptMessage="Already have an account?" linkName="Sign In" linkPath={ROUTES.LOGIN}/>
        //     </LoginFooter>
        // </>
        // <div className={Style.page}>
        //     <main className={Style.container}>
        //         {/* Logo */}
        //         <div className={Style.logo}>
        //             <div className={Style.logoIcon}>ϟ</div>
        //         </div>

        //         {/* Heading */}
        //         <div className={Style.heading}>
        //             <h1>Create an account</h1>

        //             <p>Join Productivity Hub for free</p>
        //         </div>

        //         {/* Register Card */}
        //         <section className={Style.card}>
        //             <form>
        //                 {/* Full Name */}
        //                 <div className={Style.formGroup}>
        //                     <label htmlFor="fullName">
        //                         Full name
        //                     </label>

        //                     <input
        //                         id="fullName"
        //                         type="text"
        //                         placeholder="Jane Doe"
        //                         className={Style.input}
        //                     />
        //                 </div>

        //                 {/* Email */}
        //                 <div className={Style.formGroup}>
        //                     <label htmlFor="email">
        //                         Email address
        //                     </label>

        //                     <input
        //                         id="email"
        //                         type="email"
        //                         placeholder="you@example.com"
        //                         className={Style.input}
        //                     />
        //                 </div>

        //                 {/* Password */}
        //                 <div className={Style.formGroup}>
        //                     <label htmlFor="password">
        //                         Password
        //                     </label>

        //                     <div className={Style.passwordWrapper}>
        //                         <input
        //                             id="password"
        //                             type={
        //                                 showPassword
        //                                     ? "text"
        //                                     : "password"
        //                             }
        //                             placeholder="Min. 8 characters"
        //                             className={Style.input}
        //                         />

        //                         <button
        //                             type="button"
        //                             className={Style.eyeButton}
        //                             onClick={() =>
        //                                 setShowPassword(
        //                                     !showPassword
        //                                 )
        //                             }
        //                             aria-label={
        //                                 showPassword
        //                                     ? "Hide password"
        //                                     : "Show password"
        //                             }
        //                         >
        //                             {showPassword ? "◉" : "◉"}
        //                         </button>
        //                     </div>
        //                 </div>

        //                 {/* Confirm Password */}
        //                 <div className={Style.formGroup}>
        //                     <label htmlFor="confirmPassword">
        //                         Confirm password
        //                     </label>

        //                     <div className={Style.passwordWrapper}>
        //                         <input
        //                             id="confirmPassword"
        //                             type={
        //                                 showConfirmPassword
        //                                     ? "text"
        //                                     : "password"
        //                             }
        //                             placeholder="Repeat your password"
        //                             className={Style.input}
        //                         />

        //                         <button
        //                             type="button"
        //                             className={Style.eyeButton}
        //                             onClick={() =>
        //                                 setShowConfirmPassword(
        //                                     !showConfirmPassword
        //                                 )
        //                             }
        //                             aria-label={
        //                                 showConfirmPassword
        //                                     ? "Hide password"
        //                                     : "Show password"
        //                             }
        //                         >
        //                             {showConfirmPassword ? "◉" : "◉"}
        //                         </button>
        //                     </div>
        //                 </div>

        //                 {/* Create Account */}
        //                 <button
        //                     type="submit"
        //                     className={Style.createButton}
        //                 >
        //                     <span className={Style.buttonIcon}>
        //                         ♙
        //                     </span>

        //                     Create account
        //                 </button>

        //                 {/* Sign In */}
        //                 <p className={Style.signInText}>
        //                     Already have an account?{" "}
        //                     {/* <a href="#">
        //                         Sign in
        //                     </a> */}
        //                     <span>Sign in</span>
        //                 </p>
        //             </form>
        //         </section>

        //         {/* Guest */}
        //         <p className={Style.guestText}>
        //             Just browsing?{" "}
        //             {/* <a href="#">
        //                 Continue as Guest
        //             </a> */}
        //             <span>Continue as Guest</span>
        //         </p>
        //     </main>
        // </div>
    );
}

export default SingUp;