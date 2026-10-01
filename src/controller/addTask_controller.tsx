import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTaskView from "../pages/addTask/addTask_page.tsx";
import { addTask, putTask } from "../services/task.service.ts";
import { SuccessToast, FailedToast } from "../utils/toast.ts";
import type { AddEditModel } from "../types/task.ts";
import { optmisticUpdateInTasksList } from "../utils/optimisticEditTask.ts";
import { setTasks } from "../redux/task/task.ts";
import type { RootState } from "../types/task.ts";

const AddTask_Controller = ({
    modalHandler,
    addEditModel,
    fetchTasks,
    APItasksCounts
    }
        : 
    {
        modalHandler:(a: Partial<AddEditModel>)=>void,
        addEditModel: AddEditModel,
        fetchTasks: () => void,
        APItasksCounts: {}
    }
) => {
    const dispatch = useDispatch();
    const APItasks = useSelector((state: RootState) => state.Tasks.data);
    const Statuses = useSelector((state: RootState) => state.Status.data);
    const Priorityes = useSelector((state: RootState) => state.Priority.data);
    const [form, setForm] = useState({
        name: "",
        description: "",
        priority_id: 1, // Default to Low priority
    });
    useEffect(() => {
        
        if (addEditModel.taskId && 
            addEditModel.status && 
            addEditModel.name === "editTask"
        ) {
            let taskId = addEditModel.taskId;
            const task = APItasks.find((task) => task.id === taskId);
            setForm({
                name: task.name,
                description: task.description,
                priority_id: task.priority === "low" ? 1 : task.priority === "medium" ? 2 : 3, // Map priority string to number
            });
        }
        else if (
            addEditModel.status && 
            addEditModel.name === "addTask"
        ){
            setForm({
                name: "",
                description: "",
                priority_id: 1, // Default to Low priority
            })
        }

    },[addEditModel, APItasks]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = {
            ...form,
            priority_id: parseInt(form.priority_id, 10), // Ensure priority_id is a number
        }
        
        try {
            var res;
            modalHandler({status: false});
            if(addEditModel.name === "addTask") {
                res = await addTask(payload);
            }else if(
                addEditModel.name === "editTask" &&
                addEditModel.taskId
            ){
                optmisticUpdateInTasksList(
                    addEditModel.taskId,
                    {
                        commingFor: "edit",
                        data: {...payload}
                    },
                    (arg) => dispatch(setTasks(arg)),
                    APItasks,
                    APItasksCounts,
                    Statuses,
                    Priorityes
                );
                 
                res = await putTask(addEditModel.taskId, payload);
            }
            if(res.data.success) {
                SuccessToast(res.data.message);
            }else throw new Error(res.data.message);
            await fetchTasks();
        } catch (error) {
            console.log( error);
            FailedToast(error.message);
            dispatch(setTasks(APItasks))
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    }
    
    return addEditModel.status ? 
            <AddTaskView 
                handleInputChange={handleInputChange} 
                handleSubmit={handleSubmit}
                form={form}
                modalHandler={()=>modalHandler({status: false})}
                addEditModel={addEditModel}
            /> : null
}
export default AddTask_Controller;