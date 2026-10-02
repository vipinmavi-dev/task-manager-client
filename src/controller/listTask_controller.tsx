import React,{useEffect, useRef, useState, useCallback} from "react";
import { TaskListPage } from "../pages/index.tsx";
import { useLocation } from "react-router-dom";
import { SuccessToast, FailedToast } from "../utils/toast.ts";
import { getTasks, putTask, getStatus, deleteTask, getPriority } from "../services/task.service.ts";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../redux/task/task.ts";
import { setStatus } from "../redux/status/status.redux.ts";
import { setPriority } from "../redux/priority/priority.redux.ts";
import { Suspense } from "react";
import type { AddEditModel, RootState, FiltersType} from "../types/task.ts";
import { NavButton } from "../constants/app_const.ts";
import AddTaskController from "./addTask_controller.tsx";
import { optmisticUpdateInTasksList } from "../utils/optimisticEditTask.ts";

function TaskListConroller() {
    const dispatch = useDispatch();
    const [addEditModel, setaddEditModel] = useState<AddEditModel>({
        name: "addTask",
        status: false,
        taskId: null
    });
    const [Filter, setFilter] = useState<FiltersType>({
        status:{
            key: "status",
            value: "all",
        },
        priority:{
            key: "priority",
            value: "all",
        },
        search:{
            key: "name",
            value: "",
            isExactMatch: false
        }
    });
    const modalHandler = (modelStatus: Partial<AddEditModel>) => {
        setaddEditModel((prev)=>(
            {
                ...prev,
                ...modelStatus
            }
        ));
    }
    useEffect(() => {
        console.log("Search Filter Updated:", Filter);
    },[Filter])

    const navButtons = NavButton(modalHandler); // Nav button Const Object

    const APItasks = useSelector((state: RootState) => state.Tasks.data);
    const APItasksCounts = useSelector((state: RootState) => state.Tasks.counts);
    const Statuses = useSelector((state: RootState) => state.Status.data);
    const Priorityes = useSelector((state: RootState) => state.Priority.data);
    const location = useLocation();
    const hasShown = useRef(false);
    
    const updateFilter = (filter: FiltersType) => {
        setFilter((prev) => ({
            ...prev,
            ...filter
        }));
    }
    const fetchTasks = useCallback(async () => {
        try {
            const tasks = await getTasks();
            if(tasks.data.success) dispatch(setTasks({data:tasks.data.data.tasks, counts: tasks.data.data.counts}));   
            else throw new Error(tasks.data.message);
        } catch (error) {
            console.error('Error fetching tasks:', error);
            FailedToast(error.message);
        }
    },[dispatch]);
    const getStatuses =  useCallback(async ()=>{
        try {
            const response = await getStatus();
            if (response.data.success) dispatch(setStatus(response.data.data));
            else throw new Error(response.data.message);
        } catch (error) {
            console.error('Failed to fetch statuses', error);
            FailedToast(error.message);
        }
    },[dispatch]);
    const getPrioritys =  useCallback(async ()=>{
        try {
            const response = await getPriority();
            if (response.data.success) dispatch(setPriority(response.data.data));
            else throw new Error(response.data.message);
        } catch (error) {
            console.error('Failed to fetch statuses', error);
            FailedToast(error.message);
        }
    },[dispatch]);

    useEffect(() => {
        fetchTasks();
        getStatuses();
        getPrioritys();
        if (location?.state && !hasShown.current) {
            SuccessToast(location.state.message);
            hasShown.current = true;
        }
    }, [location?.state, fetchTasks, getStatuses, getPrioritys]);

    const deleteTaskHandler = async (taskId: number) => {
        let willDelete: boolean = window.confirm("Are you sure you want to delete this task?");
        if (!willDelete) return;
        try {
            optmisticUpdateInTasksList(
                taskId, 
                {
                    commingFor: "delete",
                    data: {}
                },
                (arg)=>{dispatch(setTasks(arg))},
                APItasks,
                APItasksCounts,
                Statuses,  
                Priorityes,
            )
            const response = await deleteTask(taskId);
            if (response.data.success) fetchTasks();
            else throw new Error(response.data.message);
        } catch (error) {
            console.error('Error deleting task:', error);
            FailedToast(error.message);
            dispatch(setTasks(APItasks))
        }
    }

    
    const updateTask = async (event: React.ChangeEvent<HTMLSelectElement>)=>{
        const taskId = parseInt(event.target.options[event.target.selectedIndex].getAttribute('name'));
        const status_id = parseInt(event.target.value);
        if(!taskId) return;
        try {
            optmisticUpdateInTasksList(
                taskId, 
                {
                    commingFor: "edit",
                    data: {status_id: status_id}
                }, 
                (arg)=>{dispatch(setTasks(arg))},
                APItasks,
                APItasksCounts,
                Statuses,
                Priorityes
            );
            const response = await putTask(taskId, {status_id: status_id });
            if (response.data.success) fetchTasks();
            else throw new Error(response.data.message);

        } catch (error) {
            console.error('Error updating task:', error);
            dispatch(setTasks({data:APItasks, count: null}));
            FailedToast(error.message);
        }
    }
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TaskListPage 
                navButtons={navButtons} 
                tasks={APItasks} 
                Statuses={Statuses} 
                Priorityes={Priorityes}
                updateTask={updateTask} 
                deleteTaskHandler={deleteTaskHandler} 
                modalHandler={modalHandler}
                APItasksCounts={APItasksCounts}
                updateFilter={updateFilter}
                Filter={Filter}
            />
            <AddTaskController
                modalHandler={modalHandler}
                addEditModel={addEditModel}
                fetchTasks={fetchTasks}
                APItasksCounts={APItasksCounts}
            />
        </Suspense>
    )
}

export default TaskListConroller;
