import React from 'react';
import Style from "./Profile.module.css";
import PageHeader from "../../components/pageHeader/header/pageHeader.tsx";
import type { ProfilePageProps } from '../../types/profile.ts';
import { Input } from "../../components/UI_Elements/index.tsx";
import { Save } from "lucide-react";
import {
    Camera,
    Mail,
    Phone,
    UserRound,
    Lock,
    LogOut,
    Pencil,
    ShieldCheck,
} from "lucide-react";

function ProfilePage(
    { 
        user, 
        tasksCount, 
        displayModal, 
        handleFormChange, 
        makeFormEditable,
        isEditable,
        editProfileData,
        handleProfileSubmit,
        handleLogout
    }: ProfilePageProps
) {
    return (
        <>
            <PageHeader
                siteName="Task Manager"
                isRedirectToBackPage={true}
            />
            <main className={Style.profilePage}>
                {/* Page Header */}
                <div className={Style.pageHeader}>
                    <div>
                        <h1 className={Style.pageTitle}>My Profile</h1>
                        <p className={Style.pageSubtitle}>
                            Manage your personal information and account settings.
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className={Style.profileLayout}>

                    {/* Profile Card */}
                    <section className={Style.profileCard}>

                        {/* Profile Header */}
                        <div className={Style.profileTop}>

                            <div className={Style.profilePhotoWrapper}>
                                <div className={Style.profilePhoto}>
                                    <span>VM</span>
                                </div>

                                <button
                                    type="button"
                                    className={Style.cameraButton}
                                    title="Change profile photo"
                                    onClick={()=> alert("Under Development")}
                                >
                                    <Camera size={16} />
                                </button>
                            </div>

                            <div className={Style.profileIdentity}>
                                <h2>{user.name}</h2>
                                <p>{user.email}</p>

                                <span className={Style.accountBadge}>
                                    <ShieldCheck size={14} />
                                    {user?.status || "Active Account"}
                                </span>
                            </div>

                        </div>

                        <div className={Style.divider} />

                        {/* Personal Information */}
                        <div className={Style.section}>

                            <div className={Style.sectionHeader}>
                                <div>
                                    <h3>Personal Information</h3>
                                    <p>Your basic account information.</p>
                                </div>

                                <button
                                    type="button"
                                    className={ isEditable ? Style.updateButton : Style.editButton}
                                    onClick={isEditable ? handleProfileSubmit : makeFormEditable}
                                >
                                    {
                                        isEditable ? 
                                        <>
                                        <Save size={16} />
                                        <span>Update</span>
                                        </>
                                        :
                                        <>
                                            <Pencil size={16} />
                                            <span>Edit</span>
                                        </>
                                    }
                                </button>
                            </div>

                            <div className={Style.formGrid}>

                                <div className={Style.formGroup}>
                                    <label>Full Name</label>

                                    <div className={Style.inputWrapper}>
                                        <UserRound size={17} />
                                        { isEditable ?
                                            <Input id="name" 
                                                type="text" 
                                                placeholder='Enter name'
                                                required = {false}
                                                value={editProfileData.name}
                                                handleChange={handleFormChange}
                                            />
                                        :
                                            <span>{user.name}</span>
                                        }
                                    </div>
                                </div>

                                <div className={Style.formGroup}>
                                    <label>Email Address</label>

                                    <div className={Style.inputWrapper}>
                                        <Mail size={17} />
                                        { isEditable ?
                                            <Input id="email" 
                                                type="email" 
                                                placeholder='jhonsmith@gmail.com'
                                                required = {false}
                                                value={editProfileData.email}
                                                handleChange={handleFormChange}
                                            />
                                        :
                                            <span>{user.email}</span>
                                        }
                                    </div>
                                </div>

                                <div className={Style.formGroup}>
                                    <label>Phone Number</label>

                                    <div className={Style.inputWrapper}>
                                        <Phone size={17} />
                                        { isEditable ?
                                            <Input id="phone" 
                                                type="text" 
                                                placeholder='+919876543210'
                                                required = {false}
                                                value={editProfileData.phone}
                                                handleChange={handleFormChange}
                                            />
                                        :
                                            <span>{user.phone || "Not provided"}</span>
                                        }
                                        
                                    </div>
                                </div>

                                <div className={Style.formGroup}>
                                    <label>Account Type</label>

                                    <div className={Style.inputWrapper}>
                                        <ShieldCheck size={17} />
                                        <span>{user.accountType || "Personal Account"}</span>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className={Style.divider} />

                        {/* Security */}
                        <div className={Style.section}>

                            <div className={Style.sectionHeader}>
                                <div>
                                    <h3>Security</h3>
                                    <p>Manage your account security.</p>
                                </div>
                            </div>

                            <button
                                type="button"
                                className={Style.securityAction}
                                onClick={displayModal}
                            >
                                <div className={Style.actionIcon}>
                                    <Lock size={18} />
                                </div>

                                <div className={Style.actionContent}>
                                    <strong>Change Password</strong>
                                    <span>
                                        Update your password to keep your account secure.
                                    </span>
                                </div>

                                <span className={Style.actionArrow}>›</span>
                            </button>

                        </div>

                    </section>

                    {/* Right Side */}
                    <aside className={Style.sideColumn}>

                        {/* Account Summary */}
                        <div className={Style.summaryCard}>

                            <h3>Account Summary</h3>

                            <div className={Style.summaryItem}>
                                <span>Total Tasks</span>
                                <strong>{tasksCount.total}</strong>
                            </div>

                            <div className={Style.summaryItem}>
                                <span>Completed</span>
                                <strong>{tasksCount.completed}</strong>
                            </div>

                            <div className={Style.summaryItem}>
                                <span>In Progress</span>
                                <strong>{tasksCount.in_progress}</strong>
                            </div>

                            <div className={Style.summaryItem}>
                                <span>Cancelled</span>
                                <strong>{tasksCount.cancelled}</strong>
                            </div>

                            <div className={Style.summaryItem}>
                                <span>To Do</span>
                                <strong>{tasksCount.todo}</strong>
                            </div>

                            <div className={Style.summaryItem}>
                                <span>Delayed</span>
                                <strong>{tasksCount.delayed}</strong>
                            </div>

                        </div>

                        {/* Danger Zone */}
                        <div className={Style.dangerCard}>

                            <div className={Style.dangerHeader}>
                                <div className={Style.dangerIcon}>
                                    <LogOut size={18} />
                                </div>

                                <div>
                                    <h3>Account Actions</h3>
                                    <p>Manage your current session.</p>
                                </div>
                            </div>

                            <button
                                type="button"
                                className={Style.logoutButton}
                                onClick={handleLogout}
                            >
                                <LogOut size={17} />
                                Logout
                            </button>

                        </div>

                    </aside>

                </div>

            </main>
        </>
    );
}

export default ProfilePage;