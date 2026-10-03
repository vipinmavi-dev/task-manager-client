import React from "react";
import Style from "./guestWarningModel.module.css";
import {
    ShieldAlert,
    CloudOff,
    LockKeyhole,
    Clock3,
    TriangleAlert,
    X,
} from "lucide-react";

const GuestModeModal = ({ onClose, onContinue }) => {
    return (
        <div className={Style.modalOverlay}>
            <div className={Style.modal}>

                {/* ================= Header ================= */}
                <div className={Style.modalHeader}>

                    <div className={Style.headerIcon}>
                        <ShieldAlert size={25} strokeWidth={2} />
                    </div>

                    <div className={Style.headerContent}>
                        <span className={Style.noticeText}>
                            NOTICE
                        </span>

                        <h2 className={Style.modalTitle}>
                            You're in Guest Mode
                        </h2>
                    </div>

                    <button
                        type="button"
                        className={Style.closeButton}
                        onClick={onClose}
                        aria-label="Close"
                    >
                        <X size={25} strokeWidth={2} />
                    </button>

                </div>


                {/* ================= Body ================= */}
                <div className={Style.modalBody}>

                    <p className={Style.description}>
                        Task Manager works without an account, but your data stays
                        <br className={Style.desktopBreak} />
                        in memory only.
                    </p>


                    {/* ================= Information Items ================= */}

                    <div className={Style.infoList}>

                        {/* Item 1 */}
                        <div className={Style.infoItem}>

                            <div className={Style.infoIcon}>
                                <CloudOff size={21} strokeWidth={2} />
                            </div>

                            <div className={Style.infoContent}>
                                <h3>No data persistence</h3>
                                <p>
                                    Tasks vanish when you close or refresh the page.
                                </p>
                            </div>

                        </div>


                        {/* Item 2 */}
                        <div className={Style.infoItem}>

                            <div className={Style.infoIcon}>
                                <LockKeyhole size={21} strokeWidth={2} />
                            </div>

                            <div className={Style.infoContent}>
                                <h3>No cross-device sync</h3>
                                <p>
                                    Your tasks exist only in this browser tab.
                                </p>
                            </div>

                        </div>


                        {/* Item 3 */}
                        <div className={Style.infoItem}>

                            <div className={Style.infoIcon}>
                                <Clock3 size={21} strokeWidth={2} />
                            </div>

                            <div className={Style.infoContent}>
                                <h3>Session expires on close</h3>
                                <p>
                                    Nothing is saved to an account.
                                </p>
                            </div>

                        </div>


                        {/* Item 4 */}
                        <div className={Style.infoItem}>

                            <div className={Style.infoIcon}>
                                <TriangleAlert size={21} strokeWidth={2} />
                            </div>

                            <div className={Style.infoContent}>
                                <h3>Limited features</h3>
                                <p>
                                    Reminders and collaboration require sign-in.
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* ================= Footer Buttons ================= */}
                    <div className={Style.modalActions}>

                        <button
                            type="button"
                            className={`${Style.actionButton} ${Style.backButton}`}
                            onClick={onClose}
                        >
                            Go Back
                        </button>

                        <button
                            type="button"
                            className={`${Style.actionButton} ${Style.continueButton}`}
                            onClick={onContinue}
                        >
                            Continue as Guest
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default GuestModeModal;