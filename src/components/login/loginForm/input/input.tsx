import React from "react";
import Style from "./form.module.css";

function Input() {
    return (
        <>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="name@example.com" name="email" id="email" required />
        </>
    )
}

export default Input;