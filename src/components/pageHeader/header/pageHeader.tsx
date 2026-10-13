import React from "react";
import Style from "./pageHeader.module.css";
import RedirectToBackPage from "../backPageButton/backPageButton.tsx";
import LogoWithTitle from "../logoWithTitle/logoWithTitle.tsx";
import { logOutUser } from "../../../services/auth.service.ts";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/auth.ts";
import { setTasks } from "../../../redux/task/task.ts";
import { ROUTES } from "../../../constants/routes.ts";
import NavButton from "../navButton/navButton.tsx";
import type { NavButtonProps } from "../../../types/task.ts";
import { FailedToast } from "../../../utils/toast.ts";
import { useSelector } from "react-redux";
import type { RootState } from "../../../types/task.ts";

function PageHeader({
  isRedirectToBackPage = true,
  siteName,
  navButtonsData,
}: {
  isRedirectToBackPage?: boolean;
  siteName: string;
  navButtonsData?: NavButtonProps[];
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state: RootState) => state.User);
  const isGuest = User?.data?.auth_type_id === 0 ? true : false;
  const handleLogout = async () => {
    let confirmLogout = window.confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;
    try {
      const res = await logOutUser();
      if (res.data.success) {
        localStorage.removeItem("User");
        dispatch(logout());
        dispatch(setTasks({ data: [], counts: {} }));
        navigate(ROUTES.DEFAULT);
      } else throw new Error(res.data.message);
    } catch (error) {
      console.error(error);
      FailedToast("Logout failed. Please try again.");
    }
  };
  return (
    <header className={Style.header}>
      <div className={Style.headerInner}>
        <div className={Style.headerLeft}>
          {/* ============ Back Button ============ */}
          {isRedirectToBackPage && <RedirectToBackPage />}

          {/* ============ Site logo ============ */}
          <LogoWithTitle siteName={siteName} />
        </div>

        {/* ============ Nav Button ============ */}
        {navButtonsData && (
          <NavButton
            navButtonsData={navButtonsData}
            handleLogout={handleLogout}
            isGuest={isGuest}
          />
        )}
      </div>
    </header>
  );
}

export default PageHeader;
