import React,{useEffect, useRef, useCallback} from "react";
import { TaskListPage } from "../pages/index.tsx";
import { useLocation } from "react-router-dom";
import { SuccessToast } from "../utils/toast.ts";
import { getTasks, putTask, getStatus, deleteTask } from "../services/task.service.ts";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../redux/task/task.ts";
import { setStatus } from "../redux/status/status.redux.ts";

interface Task<T> {
    success: boolean;
    message: string;
    data: T;
}
interface Data {
    id: number;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
    status: string;
    priority: string;
}
function TaskListConroller() {
    const dispatch = useDispatch();
    const APItasks = useSelector((state: any) => state.Tasks.data);
    const Statuses = useSelector((state: any) => state.Status.data);
    const location = useLocation();
    const hasShown = useRef(false);

    const fetchTasks = useCallback(async () => {
        try {
            const tasks: Task<Data[]> = await getTasks();
            dispatch(setTasks(tasks.data.data));
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }, [dispatch]); // Add dispatch as a dependency
    const updateTask = useCallback(async (event) => {
        const taskId = event.target.options[event.target.selectedIndex].getAttribute('name');
        const status_id = event.target.value;
        try {
            const response = await putTask({ id: taskId, status_id: status_id });
            if (response.data.success) {
                fetchTasks();
            }else{
                console.error('Failed to get Status');
            }
        } catch (error) {
            console.error('Error updating task:', error);
        }
    }, [fetchTasks]); // Add fetchTasks as a dependency
    const getStatuses = useCallback(async ()=>{
        try {
            const response = await getStatus();
            if (response.data.success) {
                dispatch(setStatus(response.data.data));
            } else {
                console.error('Failed to fetch statuses');
            }
        } catch (error) {
            console.error('Failed to fetch statuses', error);
        }
    }, [dispatch]); // Add dispatch as a dependency
    const deleteTaskHandler = async (taskId: number) => {
        let decisson = window.confirm("Are you sure you want to delete this task?");
        if (!decisson) {
            return;
        }
        try {
            const response = await deleteTask(taskId);
            if (response.data.success) {
                fetchTasks();
            } else {
                console.error('Failed to delete task');
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    }
    useEffect(() => {
        fetchTasks();
        getStatuses();
        if (location?.state && !hasShown.current) {
            SuccessToast(location.state.message);
            hasShown.current = true;
        }
    }, [location?.state, fetchTasks, getStatuses]); // Add fetchTasks to the dependency array

    return <TaskListPage 
                Statuses={Statuses}
                APItasks={APItasks} 
                updateTask={updateTask} 
                deleteTaskHandler={deleteTaskHandler}
            />;
}

export default TaskListConroller;