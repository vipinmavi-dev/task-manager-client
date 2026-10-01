import { Task } from "../types/task.ts";
interface customTask extends Task {
    priority_id: number;
}
export const optmisticUpdateInTasksList = async (
    taskId: number, 
    requiredToUpdate: {commingFor: "edit" | "delete", data: Partial<customTask>},
    callback: (a) => void,
    APItasks: Task[],
    APItasksCounts,
    Statuses: {id:number, name:string}[],
    Priorityes: {id:number, name:string}[]
) => {
    var updatedList: Task[]=[];
    let payload: Partial<customTask>= requiredToUpdate.data;
    let count: typeof APItasksCounts = {...APItasksCounts};

    if(requiredToUpdate.commingFor === "edit") {

        if(payload?.status_id){
            let statusObj: {id:number, name:string} | undefined 
            = Statuses.find((status) => status.id === payload.status_id);
            payload.status = statusObj?.name;
        }

        if(requiredToUpdate.data?.priority_id){
            let priorityObj: {id:number, name:string} | undefined 
            = Priorityes.find((priority) => priority.id === requiredToUpdate.data.priority_id);
            payload.priority = priorityObj?.name;
            delete payload.priority_id;
        }

        updatedList = APItasks.map((task: Task) => {
            if(task.id === taskId) {
                return {...task, ...payload};
            }
            return task;
        });
    }else if(requiredToUpdate.commingFor === "delete") {
        var tempTaskStatus: string ="";
        updatedList = APItasks.filter((task: Task) => {
            if(task.id !== taskId) return task;
            else tempTaskStatus = task.status;
        });
        if(count?.total) count.total -= 1;
        if(count?.[tempTaskStatus]) count[tempTaskStatus] -= 1;
    }
    callback({data: updatedList, counts: count});
}