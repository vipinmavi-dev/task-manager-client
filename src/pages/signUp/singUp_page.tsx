import React from "react";
import { 
    LoginLayout,
    LoginHeader, 
    LoginForm, 
    LoginFooter
} from "../../components/login/index.tsx";
function SingUp() {
    return (
        <LoginLayout>
            <LoginHeader/>
            <LoginForm/>
            <LoginFooter/>
        </LoginLayout>
    );
}

export default SingUp;