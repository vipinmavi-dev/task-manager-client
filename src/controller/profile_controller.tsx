import React, { useState, useEffect } from 'react';
import ProfilePage from '../pages/profile/profile_page.tsx';
import { useSelector } from 'react-redux';
import { RootState } from '../types/task.ts';
import ChangerPasswordModal from '../components/changePasswordMode/changePasswordModel.tsx';

function ProfileController() {
    const UserProfile = useSelector<RootState>((state) => state.User.data);
    const tasksCount = useSelector<RootState>((state) => state.Tasks.counts);
    const [userData, setUserData] = useState();
    const [ showModel, setShowModel] = useState(false);

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    useEffect(() => {
        console.log("UserProfile in ProfileController:", UserProfile);
    }, [userData]);

    return (
        <>
            <ProfilePage
                user={UserProfile}
                tasksCount={tasksCount} // Fix the Value comming form API
                displayModal={() => { setShowModel(true); }}
                handleFormChange={handleFormChange}
            />
            {<ChangerPasswordModal
                isOpen={showModel}
                onClose={() => { setShowModel(false); }}
            />}
        </>
    );
}
export default ProfileController;