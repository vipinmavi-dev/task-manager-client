import React from 'react';
import { RouterProvider, createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import {Layout} from './components/auth/index.tsx';
import {ROUTES} from './constants/routes.ts';
import {
    NewTaskPage,
    ForgotPasswordPage
} from "./pages/index.tsx";
import { 
    TaskListController,
    DashboardController,
    LoginController,
    SignUpController
} from "./controller/index.tsx";

function AuthLayout() {
    return (
      <Layout>
        <Outlet />
      </Layout>
    ) 
  }
const router = createBrowserRouter([
    {
        path: ROUTES.DEFAULT,
        element: <Outlet />,
        loader: ()=>{},
        children: [
            { path: ROUTES.DEFAULT, element: <DashboardController/> },
            { path: ROUTES.LIST, element: <TaskListController/> },
            { path: ROUTES.ADD, element: <NewTaskPage/> },
        ]
    },
    {
        path: ROUTES.AUTH,
        element: AuthLayout(),
        loader: ()=>{},
        children: [
            { index:true, element:<Navigate to={ROUTES.LOGIN} replace/> },
            { path: ROUTES.LOGIN, element: <LoginController/> },
            { path: ROUTES.SIGNUP, element: <SignUpController/> },
            { path: ROUTES.FORGOT_PASSWORD, element: <ForgotPasswordPage/> },
        ]
    },
]);
export default function AppRoutes() {
    return <RouterProvider router={router} />;
}