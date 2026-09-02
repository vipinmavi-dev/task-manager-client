import React from "react";
import Style from "./authLayout.module.css";

function LoginLayout({children}: {children?: React.ReactNode}) {
    return (
        <main className={Style.page}>
            <section className={Style.loginContainer}>
                {children}
            </section>
        </main>
    )
}
export default LoginLayout;