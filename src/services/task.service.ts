import { api } from './apis.ts';
import { API_ROUTES } from '../constants/routes.ts';

export const getTasks = async () => {
    return api.get(API_ROUTES.TASK);
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
export const putTask = ({id, status_id}: {id: Number, status_id: Number }) => {
    return api.put(
        `${API_ROUTES.TASK}/${id}`,
        {
            status_id: status_id
        }
    );
}
export const deleteTask = (id: Number) => {
    return api.delete(
        `${API_ROUTES.TASK}/${id}`
    );
}