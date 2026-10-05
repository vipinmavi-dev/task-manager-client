import React, { useEffect, useRef } from "react";
import Style from "./navButton.module.css";
import {
  User,
  UserRound,
  LogOut
} from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState, NavButtonsProps } from "../../../types/task.ts";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes.ts";
import { useLocation } from "react-router-dom";

function NavButton({ navButtonsData, handleLogout }: NavButtonsProps) {
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const userProfile:{ name: string, email: string} | null = useSelector((state: RootState) => state.User.data);
  const userName = userProfile?.name;
  const userPhoto = "https://avatars.githubusercontent.com/u/12345678?v=4";
  const userEmail = userProfile?.email;
  const profileRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className={Style.navActions}>
      {navButtonsData?.map((button) => (
        <span
          key={button.buttonText}
          onClick={button.method}
          className={Style[button.className]}
        >
          {button.buttonText}
        </span>
      ))}
      {/* Avatar */}

      {(location.pathname === ROUTES.LIST) && <div className={Style.profileWrapper}>
        {/* Avatar button */}
        {/* <button
          type="button"
          className={Style.avatarButton}
          onClick={()=>setIsProfileOpen(!isProfileOpen)}
          title={userName || "Guest"}
        >
          {userName ? (
            <span className={Style.avatarInitials}>
              {userName.split(" ").map((n) => n[0]).join("")}
            </span>
          ) : (
            <User size={18} />
          )}
        </button> */}
        {
            <div className={Style.profileAvatarSmall}
            onClick={() => setIsProfileOpen(!isProfileOpen)}>
              {userPhoto ? (
                <img
                  src={userPhoto}
                  alt={userName || "User"}
                />
              ) : (
                <span>
                  {userName.split(" ").map((n) => n[0]).join("")}
                  {/* {userName ? getInitials(userName) : <User size={28} />} */}
                </span>
              )}
            </div>
          }

        {/* Profile dropdown */}
        {/* {isProfileOpen && ( */}
        { isProfileOpen && (
          <div ref={profileRef}  className={Style.profileDropdown}>

            {/* Profile information */}
            <div className={Style.profileInfo}>

              <div className={Style.profileAvatar}>
                {userPhoto ? (
                  <img
                    src={userPhoto}
                    alt={userName || "User"}
                  />
                ) : (
                  <span>
                    {userName ? "VKM" : <User size={28} />}
                    {/* {userName ? getInitials(userName) : <User size={28} />} */}
                  </span>
                )}
              </div>

              <div className={Style.profileDetails}>
                <div className={Style.profileName}>
                  {userName || "Guest"}
                </div>

                <div className={Style.profileEmail}>
                  {userEmail || "No email available"}
                </div>
              </div>

            </div>

            {/* Divider */}
            <div className={Style.profileDivider} />

            {/* Actions */}
            <div className={Style.profileActions}>

              <Link
                to={ROUTES.PROFILE}
                className={Style.profileAction}
              >
                <UserRound size={18} />
                <span>Manage Profile</span>
              </Link>

              <button
                type="button"
                className={`${Style.profileAction} ${Style.logoutAction}`}
                onClick={handleLogout}
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>

            </div>

          </div>
        )}
      </div>}
    </div>
  )
}

export default NavButton;