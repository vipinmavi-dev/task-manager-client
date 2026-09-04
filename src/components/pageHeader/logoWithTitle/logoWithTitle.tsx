import React from "react";
import Style from "./logoWithTitle.module.css";

function LogoWithTitle({siteName}: {siteName: string}) {
    return (
        <>
            <div className={Style.logo}>
                <span>✓</span>
            </div>

            <h1 className={Style.pageTitle}>{siteName}</h1>
        </>
    )
}

export default LogoWithTitle;