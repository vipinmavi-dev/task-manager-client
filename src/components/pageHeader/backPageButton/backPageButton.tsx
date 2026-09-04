import React from "react";
import Style from "./backPageButton.module.css";

function RedirectToBackPage() {
    return (
        <button className={Style.backButton} aria-label="Go back">
            <a href="/">
                ←
            </a>
        </button>
    )
}

export default RedirectToBackPage;