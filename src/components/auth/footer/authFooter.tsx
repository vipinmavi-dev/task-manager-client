import React from "react";
import Style from "./authFooter.module.css";

interface FooterProps {
    linkText: string;
    linkURL: string;
    labelMessage: string;
}
function Footer(
    {linkText, linkURL, labelMessage}: FooterProps) 
{
    return (
        <div className={Style.guestText}>
            {labelMessage && <span>{labelMessage}</span>}
            <a href={linkURL}>
                {linkText}
            </a>
        </div>
    );
}

export default Footer;