import React, { useState } from "react";
import AddTask_View from "../pages/addTask/addTask_page.tsx";
import { addTask } from "../services/task.service.ts";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes.ts";
// type Priority = "Low" | "Medium" | "High";

const AddTask_Controller = () => {
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
            navigate(ROUTES.LIST, {
                state: {
                    message: "Task added successfully!"
                }
            }); // Navigate to the list page after successful submission
        } catch (error) {
            console.log("Error adding task:", error);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }
    
    return <AddTask_View 
                handleInputChange={handleInputChange} 
                handleSubmit={handleSubmit}
                form={form}
            />
}
export default AddTask_Controller;