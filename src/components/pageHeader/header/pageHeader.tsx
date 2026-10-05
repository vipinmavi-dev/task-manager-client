import React from "react";
import Style from "./pageHeader.module.css";
import RedirectToBackPage from "../backPageButton/backPageButton.tsx";
import LogoWithTitle from "../logoWithTitle/logoWithTitle.tsx";
import { logOutUser } from "../../../services/auth.service.ts";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/auth/auth.ts";
import { ROUTES } from "../../../constants/routes.ts"
import NavButton from "../navButton/navButton.tsx";
import type { NavButtonProps } from "../../../types/task.ts";

function PageHeader({ isRedirectToBackPage = true, siteName, navButtonsData }: 
  { isRedirectToBackPage?: boolean, siteName: string, navButtonsData: NavButtonProps[] }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = async () => {
      const res = await logOutUser();
      if(res.data.success){
        localStorage.removeItem("User");
        dispatch(logout());
        navigate(ROUTES.LOGIN);
      }
    }
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
          <NavButton navButtonsData={navButtonsData} handleLogout={handleLogout}/>
      </div>
    </header>
  )
}

export default PageHeader;