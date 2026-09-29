export const optmisticUpdateInTasksList = async (
    taskId: number, 
    requiredToUpdate: any,
    callback: (a) => void,
    APItasks: any[],
    Statuses: {id:number, name:string}[],
    Priorityes: {id:number, name:string}[]
) => {
    let payload = { ...requiredToUpdate };
    if(payload.status_id){
        let statusObj: {id:number, name:string} = Statuses.find((status) => status.id === payload.status_id);
        payload.status = statusObj?.name;
    }
    if(payload.priority_id){
        let priorityObj: {id:number, name:string} = Priorityes.find((priority) => priority.id === payload.priority_id);
        payload.priority = priorityObj?.name;
    }
    
    const updatedTasks = APItasks.map((task) => {
        if (task.id === taskId) {
            return { ...task, ...payload};
        }
        return task;
    });
    
    callback(updatedTasks);
}