import React,{useEffect, useRef, useCallback, useState} from "react";
import { TaskListPage } from "../pages/index.tsx";
import { useLocation } from "react-router-dom";
import { SuccessToast } from "../utils/toast.ts";
import { getTasks, putTask, getStatus, deleteTask, getTask, addTask } from "../services/task.service.ts";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../redux/task/task.ts";
import { setStatus } from "../redux/status/status.redux.ts";
import AddTaskView from "../pages/addTask/addTask_page.tsx";

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
    const [addEditModel, setaddEditModel] = useState({
        name: "",
        status: false,
        taskId: null
    });
    const [form, setForm] = useState({
        name: "",
        description: "",
        priority_id: 1, // Default to Low priority
    });
    const APItasks = useSelector((state: any) => state.Tasks.data);
    const Statuses = useSelector((state: any) => state.Status.data);
    const location = useLocation();
    const hasShown = useRef(false);
    const navButtons = [
        {
          buttonText: "+ New Task",
          method: () => {modalHandler({
            name: "addTask",
            status: true
          })},
          className: "getStarted"
        }
    ]
    useEffect(() => {
        if (addEditModel.taskId) {
            fetchTask(addEditModel.taskId);
            // if (taskToEdit) {
            //     setForm({
            //         name: taskToEdit.name,
            //         description: taskToEdit.description,
            //         priority_id: taskToEdit.priority === "Low" ? 1 : taskToEdit.priority === "Medium" ? 2 : 3, // Map priority string to number
            //     });
            // }
        }
    },[addEditModel.taskId])
    const fetchTask = useCallback(async (taskId: number) => {
        try {
            const task: Task<Data> = await getTask(taskId);
            
            if (task.data.success) {
                setForm({
                    name: task.data.data[0].name,
                    description: task.data.data[0].description,
                    priority_id: task.data.data[0].priority === "low" ? 1 : task.data.data[0].priority === "medium" ? 2 : 3, // Map priority string to number
                });
            } else {
                console.error('Failed to fetch task details');
            }
        } catch (error) {
            console.error('Error fetching task details:', error);
        }
    },[]);
    useEffect(() => {
        console.log('Form state updated:', form);
    },[form])
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
            const response = await putTask(taskId, {status_id: status_id });
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
    const modalHandler = (modelStatus:any) => {
        setaddEditModel(modelStatus);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = {
            ...form,
            priority_id: parseInt(form.priority_id, 10), // Ensure priority_id is a number
        }
        try {
            if(addEditModel.name === "addTask") await addTask(payload);
            if(addEditModel.name === "editTask") await putTask(addEditModel.taskId, payload);
            fetchTasks();
            setForm({
                name: "",
                description: "",
                priority_id: 1, // Reset to default Low priority
            })
            modalHandler({
                name: "",
                status: false
            });
            SuccessToast("Task added successfully!");
        } catch (error) {
            console.error("Error adding task:", error);
        }
    };
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    }
    return <TaskListPage
                Statuses={Statuses}
                APItasks={APItasks} 
                updateTask={updateTask} 
                deleteTaskHandler={deleteTaskHandler}
                addEditModel={addEditModel}
                modalHandler={modalHandler}
                navButtons={navButtons}
            >
                <AddTaskView
                    handleInputChange={handleInputChange} 
                    handleSubmit={handleSubmit}
                    form={form}
                    addEditModel={addEditModel}
                    modalHandler={()=>modalHandler(false)}
                />
            </TaskListPage>
}

export default TaskListConroller;