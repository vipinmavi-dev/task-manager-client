import React from "react";
import Style from "./navButton.module.css";

interface NavButtonProps {
  buttonText: string;
  method: () => void;
  className: string;
  // className: "signIn" | "getStarted"; TODO: will work on this letter as its throw error
}
interface NavButtonsProps {
  navButtons: NavButtonProps[];
}
function NavButton({ navButtons }: NavButtonsProps) {
  return (
    <div className={Style.navActions}>
      {navButtons.map((button) => (
        <span
          key={button.buttonText}
          onClick={button.method}
          className={Style[button.className]}
        >
          {button.buttonText}
        </span>
      ))}
    </div>
  )
}

export default NavButton;