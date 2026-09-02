import React from "react";
import Style from "./authHeader.module.css";

function AuthHeader({ pageTitle, subTitle }: { pageTitle: string, subTitle: string }) {
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