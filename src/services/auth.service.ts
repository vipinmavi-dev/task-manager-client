import {api} from './apis.ts';
interface signUpPayload {
    name: string;
    email: string;
    password: string;
}
interface loginPayload {
    email: string;
    password: string;
}
export const signupUser = async (data: signUpPayload) => {
    return api.post('/api/auth/signup', data);
};
export const loginUser = async (data: loginPayload) => {
    return api.post('/api/auth/login', data);
};