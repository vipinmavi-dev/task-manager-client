import React,{useEffect, useRef} from "react";
import { TaskListPage } from "../pages/index.tsx";
import { useLocation } from "react-router-dom";
import { SuccessToast } from "../utils/toast.ts";
import { getTasks } from "../services/task.service.ts";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../redux/task/task.ts";

interface Task {
    success: boolean;
    message: string;
    data: any;
}
function TaskListConroller () {
    const dispatch = useDispatch();
    const APItasks = useSelector((state: any) => state.Tasks.data);
    const location = useLocation();
    const hasShown = useRef(false);
    useEffect(() => {
        fetchTasks();
        if(location?.state && !hasShown.current) {
            SuccessToast(location.state.message); 
            hasShown.current = true;   
        }
    },[])
    const fetchTasks = async () => {
        
        try {
            const tasks: Task = await getTasks();
            dispatch(setTasks(tasks.data));
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }

    return <TaskListPage APItasks = {APItasks}/>
}

export default TaskListConroller;