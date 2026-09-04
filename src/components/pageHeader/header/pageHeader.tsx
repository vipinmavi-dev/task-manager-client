import React from "react";
import Style from "./pageHeader.module.css";
// import NavButton from "../navButton/navButton.tsx";
import RedirectToBackPage from "../backPageButton/backPageButton.tsx";
import LogoWithTitle from "../logoWithTitle/logoWithTitle.tsx";


function PageHeader({ isRedirectToBackPage = true, siteName, NavButton }: 
  { isRedirectToBackPage?: boolean, siteName: string, NavButton: React.ReactNode }) {
    console.log(siteName);
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
          {NavButton}
      </div>
    </header>
  )
}

export default PageHeader;