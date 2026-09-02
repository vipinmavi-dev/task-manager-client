import React from "react";
import Style from "./authFooter.module.css";

function Footer() {
    return (
        <div className={Style.guestText}>
            <span>Just browsing?</span>

            {/* <a>
                        Continue as Guest
                    </a> */}
            <span>
                Continue as Guest
            </span>
        </div>
    )
}

export default Footer;