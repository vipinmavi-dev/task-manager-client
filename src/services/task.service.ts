import { api } from './apis.ts';
import { API_ROUTES } from '../constants/routes.ts';

export const getTasks = async () => {
    try {
        const response = await api.get(API_ROUTES.TASK);
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}
export const addTask = (task: { title: string; description: string, priority_id: Number }) => {
    
    return api.post(
        API_ROUTES.TASK,
        task
    );
}