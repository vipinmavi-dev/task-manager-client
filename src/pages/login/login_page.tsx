import React from "react";
// import { ROUTES } from "../../constants/routes.ts";
// import {
//     LoginHeader,
//     LoginForm,
//     LoginFooter
// } from "../../components/login/index.tsx";
// import {
//     Input,
//     Label,
//     ThematicBreak,
//     OtherLoginBtn,
//     SignUpPrompt
// } from "../../components/UI_Elements/index.tsx";
import Style from "./loginPage.module.css";
function LoginPage() {
    return (
        <main className={Style.page}>
            <section className={Style.loginContainer}>
                {/* Logo */}
                <div className={Style.logo}>
                    <div className={Style.logoIcon}>ϟ</div>
                </div>

                {/* Heading */}
                <div className={Style.heading}>
                    <h1>Welcome back</h1>

                    <p>Sign in to your Productivity Hub</p>
                </div>

                {/* Login Card */}
                <div className={Style.loginCard}>
                    <form>
                        {/* Email */}
                        <div className={Style.formGroup}>
                            <label htmlFor="email">
                                Email address
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Password */}
                        <div className={Style.formGroup}>
                            <div className={Style.passwordHeader}>
                                <label htmlFor="password">
                                    Password
                                </label>

                                {/* <a href="#">
                                    Forgot password?
                                </a> */}
                                <span>
                                    Forgot password?
                                </span>
                            </div>

                            <div className={Style.passwordInput}>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="••••••••"
                                />

                                <button
                                    type="button"
                                    className={Style.passwordToggle}
                                    aria-label="Show password"
                                >
                                    ◉
                                </button>
                            </div>
                        </div>

                        {/* Sign In */}
                        <button
                            type="submit"
                            className={Style.signInButton}
                        >
                            <span>↪</span>
                            Sign in
                        </button>
                    </form>

                    {/* Register */}
                    <div className={Style.registerText}>
                        <span>Don't have an account?</span>

                        {/* <a>
                            Create one
                        </a> */}
                        <span>
                            Create one
                        </span>
                    </div>
                </div>

                {/* Guest */}
                <div className={Style.guestText}>
                    <span>Just browsing?</span>

                    {/* <a>
                        Continue as Guest
                    </a> */}
                    <span>
                        Create one
                    </span>
                </div>
            </section>
        </main>
    )
}

export default LoginPage;