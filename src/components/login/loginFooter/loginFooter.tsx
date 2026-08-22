import React from "react";
import Style from "./loginFooter.module.css";

function LoginFooter({children}:{children?: React.ReactNode}) {
    return (
        <div className={Style.guestLogin}>
            {children}
        </div>
    )
}

export default LoginFooter;