import React from "react";
import Style from "./signUpPrompt.module.css";
import {Link} from "react-router-dom";
// todo: define linkPath as union
interface SignUpPromptProps {
    promptMessage: string;
    linkName: string;
    linkPath: string;
}
function SignUpPrompt({ promptMessage, linkName, linkPath }: SignUpPromptProps) {   
    return (
        <p className={Style.LoginPrompt}>{promptMessage}<Link to={linkPath}>{linkName}</Link>.</p>
    )
}

export default SignUpPrompt;