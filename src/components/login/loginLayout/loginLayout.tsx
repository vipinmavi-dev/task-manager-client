import React from "react";
import Style from "./loginLayout.module.css";

// import { todo: Delete this after Singup and Login page are rendered successfulley
//     LoginHeader, 
//     LoginForm, 
//     LoginFooter 
// } from "../index.tsx";

function LoginLayout({children}: {children?: React.ReactNode}) {
    return (
        <div className={Style.container}>
            <div className={Style.subContainer}>
                {children}
            </div>
        </div>
    )
}
export default LoginLayout;