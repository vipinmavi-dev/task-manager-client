import {api} from './apis.ts';

export const getTasks = async () => {
    try {
        const response = await api.get('/api/tasks');
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
}