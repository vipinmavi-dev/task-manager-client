import React, { useState } from "react";
import AddTaskView from "../pages/addTask/addTask_page.tsx";
import { addTask } from "../services/task.service.ts";
import { useNavigate } from "react-router-dom";
import { SuccessToast, FailedToast } from "../utils/toast.ts";
import type { Tasks, AddEditModel} from "../types/task.ts";
// type Priority = "Low" | "Medium" | "High";

const AddTask_Controller = ({
    modalHandler,
    addEditModel
    }
        : 
    {
        modalHandler:(a: Partial<AddEditModel>)=>void,
        addEditModel: AddEditModel
    }
) => {
    const [form, setForm] = useState({
        name: "",
        description: "",
        priority_id: 1, // Default to Low priority
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const payload = {
            ...form,
            priority_id: parseInt(form.priority_id, 10), // Ensure priority_id is a number
        }
        try {
            let res = await addTask(payload);
            if(res.data.success) {
                SuccessToast(res.data.message);
                modalHandler({status: false});
            }else throw new Error(res.data.message);
            
        } catch (error) {
            console.log("Error adding task:", error);
            FailedToast(error.message);
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