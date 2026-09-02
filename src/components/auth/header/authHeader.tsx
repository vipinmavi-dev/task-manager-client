import React from "react";
import Style from "./authHeader.module.css";

interface AuthHeaderProps { 
    pageTitle: string, 
    subTitle: string 
}

function AuthHeader({ pageTitle, subTitle }: AuthHeaderProps) {
    return (
        <>
            <div className={Style.logo}>
                    <div className={Style.logoIcon}>ϟ</div>
            </div>
            <div className={Style.heading}>
                <h1>{pageTitle}</h1>
                <p>{subTitle}</p>
            </div>
        </>
    )
}

export default AuthHeader;