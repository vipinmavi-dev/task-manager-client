import React, { useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { DashboardPage } from "../pages/index.tsx";

function DashboardConroller() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <>
      <DashboardPage handleNavigate={handleNavigate} />
    </>
  );
}

export default DashboardConroller;
