import React from "react";
export interface ProfilePageProps {
    user: {
        name: string;
        email: string;
        phone: string;
        photo: string;
        status?: string;
        accountType?: string;
    };
    tasksCount: {
        total: number;
        completed: number;
        in_progress: number;
        todo: number;
        delayed: number;
        cancelled: number;
    };
    displayModal: () => void;
    handleFormChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
    makeFormEditable : (arg: boolean) => void;
    isEditable: boolean;
    editProfileData: {
        name: string;
        email: string;
        phone: string;
        photo: string;
    };
    handleProfileSubmit: (arg: React.FormEvent<HTMLFormElement>) => void;
    handleLogout: () => void;
}