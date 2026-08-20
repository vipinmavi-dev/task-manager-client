import React from "react";
import Style from "./otherLoginBtn.module.css";

function OtherLoginBtn({value}: {value: string}) {
    return (
        <button className={Style.Guest_button}>{value}</button>
    )
}

export default OtherLoginBtn;