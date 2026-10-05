import React, { useState, useRef } from 'react';
import ProfilePage from '../pages/profile/profile_page.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../types/task.ts';
import ChangerPasswordModal from '../components/changePasswordMode/changePasswordModel.tsx';
import { validatePassword } from '../utils/validationPassword.ts';
import { logOutUser } from '../services/auth.service.ts';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/auth/auth.ts';
import { ROUTES } from "../constants/routes.ts";
import { FailedToast } from '../utils/toast.ts';

function ProfileController() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const UserProfile = useSelector<RootState>((state) => state.User.data);
    const tasksCount = useSelector<RootState>((state) => state.Tasks.counts);
    const [isEditable, setIsEditable] = useState(false);
    const [editProfileData, setEditProfileData] = useState(UserProfile);
    const [changePasswordData, setChangePasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });
    const [ showModel, setShowModel] = useState(false);

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setEditProfileData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    }
    const handleChangePasswordData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        const input = event.currentTarget;
        setChangePasswordData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        clearTimeout(timerRef.current); // clear the previous timer if it exists
        timerRef.current = setTimeout(() => { // debounce
            if (id === "newPassword") validatePassword(value, input); // validate password
            if(id === "confirmNewPassword") input.setCustomValidity( // match confirm password with password
                    (value === changePasswordData.newPassword) ? "" : "Passwords do not match"
                );
        },500);  
    }
    const handleProfileSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Profile form submitted with data:", editProfileData);
        // Here you would typically dispatch an action or call an API to update the profile
    }
    const handleChangePasswordSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Change Password form submitted with data:", changePasswordData);
        // Here you would typically dispatch an action or call an API to change the password
    }
    const handleLogout = async () => {
        let confirmLogout = window.confirm("Are you sure you want to logout?");
        if(!confirmLogout) return;
        try {
          const res = await logOutUser();
          if(res.data.success){
            localStorage.removeItem("User");
            dispatch(logout());
            navigate(ROUTES.LOGIN);
          }else throw new Error(res.data.message);
        } catch (error) {
          console.error(error);
          FailedToast("Logout failed. Please try again.");
        }
    }

    return (
        <>
            <ProfilePage
                user={UserProfile}
                tasksCount={tasksCount} // Fix the Value comming form API
                displayModal={() => { setShowModel(true); }}
                handleFormChange={handleFormChange}
                makeFormEditable = {() => { setIsEditable(!isEditable) }}
                isEditable={isEditable}
                editProfileData={editProfileData}
                handleProfileSubmit={handleProfileSubmit}
                handleLogout={handleLogout}
            />
            {<ChangerPasswordModal
                isOpen={showModel}
                onClose={() => { setShowModel(false); }}
                changePasswordData={changePasswordData}
                handleChangePasswordData={handleChangePasswordData}
                handleChangePasswordSubmit={handleChangePasswordSubmit}
            />}
        </>
    );
}
export default ProfileController;