import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DashboardPage } from "../pages/index.tsx";
import { ROUTES } from "../constants/routes.ts";
import { loginSuccess } from "../redux/auth/auth.ts";

function DashboardConroller() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = (path) => {
    if (path === ROUTES.LIST) {
      const guestUser = {
        data: {
          name: "Guest User",
          email: undefined,
          phone: undefined,
          photo: undefined,
          auth_type_id: 0,
        },
        isAuthenticated: true,
      };
      localStorage.setItem("User", JSON.stringify(guestUser));
      dispatch(loginSuccess(guestUser));
    }
    navigate(path);
  };
  return (
    <>
      <DashboardPage handleNavigate={handleNavigate} />
    </>
  );
}

export default DashboardConroller;
