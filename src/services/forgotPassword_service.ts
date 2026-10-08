import {api} from "./apis.ts";
import { API_ROUTES } from "../constants/routes.ts";
export function forgotPasswordService(payload: { email: string }) {
    return api.post(API_ROUTES.FORGOT_PASSWORD, payload);
}