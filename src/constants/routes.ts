export const ROUTES = {
    DEFAULT: "/",
    AUTH: "/auth",
    LOGIN: "/auth/login",
    SIGNUP: "/auth/signup",
    DASHBOARD: "/dashboard",
    TICKET_DETAILS: "/ticket/:id",
    CREATE_TICKET: "/ticket/create",
    NOT_FOUND: "*"
}as const;