import React from "react";
import Style from "./navButton.module.css";
import { useNavigate } from "react-router-dom";
interface NavButtonProps {
  buttonText: string;
  redirectTo: string;
  className: string;
  // className: "signIn" | "getStarted"; TODO: will work on this letter as its throw error
}
interface NavButtonsProps {
  navButtons: NavButtonProps[];
}
function NavButton({ navButtons }: NavButtonsProps) {
  const navigate = useNavigate();
  return (
    <div className={Style.navActions}>
      {navButtons.map((button) => (
        <span
          key={button.redirectTo}
          onClick={() => {navigate(button.redirectTo)}}
          className={Style[button.className]}
        >
          {button.buttonText}
        </span>
      ))}
    </div>
  )
}

export default NavButton;