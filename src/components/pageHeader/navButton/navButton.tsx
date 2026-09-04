import React from "react";
import Style from "./navButton.module.css";

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
  console.log(navButtons);
  return (
    <div className={Style.navActions}>
      {navButtons.map((button) => (
        <a
          key={button.redirectTo}
          href={button.redirectTo}
          className={Style[button.className]}
        >
          {button.buttonText}
        </a>
      ))}
    </div>
  )
}

export default NavButton;