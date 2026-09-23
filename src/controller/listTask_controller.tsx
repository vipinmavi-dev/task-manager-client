import React,{useEffect, useRef} from "react";
import { TaskListPage } from "../pages/index.tsx";
import { useLocation } from "react-router-dom";
import { SuccessToast } from "../utils/toast.ts";
import { getTasks } from "../services/task.service.ts";
interface Task {
    success: boolean;
    message: string;
    data: any;
}
function TaskListConroller () {
    const location = useLocation();
    const hasShown = useRef(false);
    useEffect(() => {
        fetchTasks();
        if(location?.state && !hasShown.current) {
            SuccessToast(location.state.message); 
            hasShown.current = true;   
        }
    })
    const fetchTasks = async () => {
        
        try {
            const tasks: Task = await getTasks();
            console.log('Fetched tasks:', tasks.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }

    return <TaskListPage />
}

export default TaskListConroller;