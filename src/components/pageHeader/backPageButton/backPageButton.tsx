import React from "react";
import Style from "./backPageButton.module.css";
import { Link } from "react-router-dom";
function RedirectToBackPage() {
    return (
        <button className={Style.backButton} aria-label="Go back">
            <Link to="/">
                ←
            </Link>
        </button>
    )
}

export default RedirectToBackPage;