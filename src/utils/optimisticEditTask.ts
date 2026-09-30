import { create } from "axios";

export const optmisticUpdateInTasksList = async (
    taskId: number, 
    requiredToUpdate: {commingFor: "edit" | "delete", data: {}},
    callback: (a) => void,
    APItasks: any[],
    Statuses: {id:number, name:string}[],
    Priorityes: {id:number, name:string}[]
) => {
    let updatedTasks = [];
    let payload;
    if(requiredToUpdate.commingFor === "edit"){
        payload = { ...requiredToUpdate.data };
        if(payload.status_id){
            let statusObj: {id:number, name:string} = Statuses.find((status) => status.id === payload.status_id);
            payload.status = statusObj?.name;
        }
        if(payload.priority_id){
            let priorityObj: {id:number, name:string} = Priorityes.find((priority) => priority.id === payload.priority_id);
            payload.priority = priorityObj?.name;
        }
        
        updatedTasks = APItasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, ...payload};
            }
            return task;
        });
    }
    else if(requiredToUpdate.commingFor === "delete"){
        updatedTasks = APItasks.filter((task) => {
            if (task.id !== taskId) {
                return task;
            }
        });
    }
    else if(requiredToUpdate.commingFor === "add"){
        payload = { ...requiredToUpdate.data };
        if(payload.status_id){
            let statusObj: {id:number, name:string} = Statuses.find((status) => status.id === payload.status_id);
            payload.status = statusObj?.name;
        }
        if(payload.priority_id){
            let priorityObj: {id:number, name:string} = Priorityes.find((priority) => priority.id === payload.priority_id);
            payload.priority = priorityObj?.name;
        }
        updatedTasks = [
            ...APItasks,
            {
                ...payload,
                id: Math.floor(Math.random() * 1000000),
                status: "todo",
                created_at: new Date().toISOString().split('T')[0],
                updated_at: new Date().toISOString().split('T')[0]
            }
        ];
        console.log("updatedTasks", updatedTasks);
    }
    callback(updatedTasks);
}