export const ROUTES = {
  DEFAULT: "/",
  AUTH: "/auth",
  LOGIN: "/auth/login",
  SIGNUP: "/auth/signup",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/auth/reset-password",
  DASHBOARD: "/dashboard",
  LIST: "/list",
  ADD: "/add",
  TICKET_DETAILS: "/ticket/:id",
  CREATE_TICKET: "/ticket/create",
  PROFILE: "/profile",
  NOT_FOUND: "*",
} as const;

export const API_ROUTES = {
  TASK: "/api/tasks",
  STATUS: "/api/helper/statues",
  PRIORITY: "/api/helper/priority",
  CHANGE_PASSWORD: "/api/helper/change-password",
  PROFILE_UPDATE: "/api/helper/update-profile",
  FORGOT_PASSWORD: "/api/auth/forgot-password",
};
