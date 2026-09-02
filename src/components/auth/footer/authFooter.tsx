import React from "react";
import Style from "./authFooter.module.css";

function Footer() {
    return (
        <div className={Style.guestText}>
            <span>Just browsing?</span>
            <a href="/list">
                Continue as Guest
            </a>
        </div>
    )
}

export default Footer;