import React from "react";
import {
    ThematicBreak,
    OtherLoginBtn,
    SignUpPrompt
} from "../../UI_Elements/index.tsx";
import Style from "./loginFooter.module.css";

function LoginFooter() {
    return (
        <div className={Style.guestLogin}>
            {/*Thematic break will be here*/}
            <ThematicBreak/>
            {/* Other login buttons will be here */}
            <OtherLoginBtn value="Login With Google"/>
            <OtherLoginBtn value="Continue as Guest"/>
            {/* Login up prompt will be here */}
            <SignUpPrompt/>
        </div>
    )
}

export default LoginFooter;