import { api } from "./apis.ts";
import { AxiosResponse } from "axios";
import type { LoginForm, SignupForm, LoginResponse } from "../types/auth.ts";

export const signupUser = async (data: Omit<SignupForm, "confirmPassword">) => {
  return api.post("/api/auth/signup", data);
};
export const loginUser = async (
  data: LoginForm
): Promise<AxiosResponse<LoginResponse>> => {
  return api.post("/api/auth/login", data);
};
export const logOutUser = async () => {
  return api.post("/api/auth/logout");
};
export const mySelf = async () => {
  return api.get("/api/auth/me");
};
export const resetPassword = async (data: {
  token: string;
  password: string;
}) => {
  return api.post("/api/auth/reset-password", data);
};
