import React from "react";
import Style from "./loginHeader.module.css";

function LoginHeader({pageTitle, subTitle}: {pageTitle: string, subTitle: string}) {
    return (
        <header className={Style.pageHeading}>
            <h2>{pageTitle}</h2>
            <span>{subTitle}</span>
        </header>
    )
}

export default LoginHeader;