import React from "react";
import Style from "./authFooter.module.css";

function Footer({linkText, linkURL, labelMessage}: {linkText: string, linkURL: string, labelMessage?: string}) {
    return (
        <div className={Style.guestText}>
            {labelMessage && <span>{labelMessage}</span>}
            <a href={linkURL}>
                {linkText}
            </a>
        </div>
    )
}

export default Footer;