import React, { useState } from "react";
import AddTaskView from "../pages/addTask/addTask_page.tsx";
import { addTask } from "../services/task.service.ts";
import { useNavigate } from "react-router-dom";
import { SuccessToast } from "../utils/toast.ts";
// type Priority = "Low" | "Medium" | "High";

const AddTask_Controller = ({modalHandler}: {modalHandler:any}) => {
    const navigate = useNavigate();
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
            await addTask(payload);
            modalHandler(false);
            SuccessToast("Task added successfully!");
            
        } catch (error) {
            console.log("Error adding task:", error);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    }
    
    return <AddTaskView 
                handleInputChange={handleInputChange} 
                handleSubmit={handleSubmit}
                form={form}
                modalHandler={modalHandler}
            />
}
export default AddTask_Controller;