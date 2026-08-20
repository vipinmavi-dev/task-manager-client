import React from "react";
import Style from "./loginLayout.module.css";

function LoginLayout() {
    return (
        <div className={Style.container}>
            <div className={Style.subContainer}>
                {/* Header will be here */}
                <form className={Style.loginForm}>
                    {/* form elements will be here */}
                </form>
                <div className={Style.guestLogin}>
                    {/*Thematic break will be here*/}
                    {/* Other login buttons will be here */}
                    <p>Don't have an account?<span> Sign Up</span>.</p>
                </div>
            </div>
        </div>
    )
}
export default LoginLayout;