import React,{useEffect, useRef} from "react";
import { TaskListPage } from "../pages/index.tsx";
import { useLocation } from "react-router-dom";
import { SuccessToast } from "../utils/toast.ts";

function TaskListConroller () {
    const location = useLocation();
    const hasShown = useRef(false);
    useEffect(() => {
        if(location?.state && !hasShown.current) {
            SuccessToast(location.state.message); 
            hasShown.current = true;   
        }
    })
    return <TaskListPage />
}

export default TaskListConroller;