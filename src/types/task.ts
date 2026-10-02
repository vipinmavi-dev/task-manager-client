import store from "../redux/store.ts";
import React from "react";

export interface Task {
    id: number;
    name: string;
    description: string;
    status_id: number;
    created_at: string;
    updated_at: string;
    status: string;
    priority: string;
}
export interface APIResponse {
    success: boolean;
    message: string;
    data: Task;
}
export interface AddEditModel {
    name: "addTask" | "editTask";
    status: boolean;
    taskId: number | null;
}
export type RootState = ReturnType<typeof store.getState>;
  
export interface TaskCardProps {
    task: Task[];
    updateTask: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    Statuses: { id: number; name: string }[];
    deleteTaskHandler: (taskId: number) => void;
    modalHandler: (modelStatus: Partial<AddEditModel>) => void;
}

export interface FilterBodyType {
    key: "name" | "status" | "priority";
    value: string;
    isExactMatch: boolean;
}
export interface FiltersType {
    status: Omit<FilterBodyType, "isExactMatch">;
    priority: Omit<FilterBodyType, "isExactMatch">;
    search: FilterBodyType;
}
export interface StatisticsProps {
    APItasksCounts: {
        total: number;
        completed: number;
        pending: number;
    };
}
export interface StatusesPriorityesTypes {
    id: number;
    name: string;
}