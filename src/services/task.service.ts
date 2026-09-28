import { api } from './apis.ts';
import { API_ROUTES } from '../constants/routes.ts';

export const getTasks = async () => {
    return api.get(API_ROUTES.TASK);
}
export const getTask = async (id:number) => {
    return api.get(`${API_ROUTES.TASK}/${id}`,);
}
export const getStatus = async () => {
    return api.get(API_ROUTES.STATUS);
}
export const addTask = (task: { title: string; description: string, priority_id: Number }) => {
    return api.post(
        API_ROUTES.TASK,
        task
    );
}
export const putTask = (id:any, payload:any) => {
    return api.put(
        `${API_ROUTES.TASK}/${id}`,
        payload
    );
}
export const deleteTask = (id: Number) => {
    return api.delete(
        `${API_ROUTES.TASK}/${id}`
    );
}