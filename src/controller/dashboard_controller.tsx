import React, { useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { DashboardPage } from "../pages/index.tsx";
import { ROUTES } from "../constants/routes.ts";
import GuestModeModal from "../components/guestWarningModel/GuestWarningModel.tsx";
function DashboardConroller() {
    const navigate = useNavigate();
    const [showGuestModal, setShowGuestModal] = useState(false); // Guest User Model
    const handleNavigate = (path) => {
        if (path === ROUTES.LIST) {
            setShowGuestModal(true);
        }
        else navigate(path);
    }
    const handleContinueAsGuest = () => {
        setShowGuestModal(false);
        navigate(ROUTES.LIST);
    }
    return (
        <>
            <DashboardPage
                handleNavigate={handleNavigate}
            />
            {showGuestModal && (
                <GuestModeModal
                    onClose={() => setShowGuestModal(false)}
                    onContinue={handleContinueAsGuest}
                />
            )}
        </>
    )
}

export default DashboardConroller;