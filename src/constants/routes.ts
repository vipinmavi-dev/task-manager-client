export const ROUTES = {
    DEFAULT: "/",
    AUTH: "/auth",
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
    FORGOT_PASSWORD: "/auth/forgot-password",
    DASHBOARD: "/dashboard",
    LIST: "/list",
    ADD: "/add",
    TICKET_DETAILS: "/ticket/:id",
    CREATE_TICKET: "/ticket/create",
    NOT_FOUND: "*"
}as const;