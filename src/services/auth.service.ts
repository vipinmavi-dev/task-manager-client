import {api} from './apis.ts';
interface LoginData {
    name: string;
    email: string;
    password: string;
}
export const signupUser = async (data: LoginData) => {
    return api.post('/api/auth/signup', data);
};