import React from 'react';
import { RouterProvider, createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
// import {LoginLayout} from './components/login/index.tsx';
import {ROUTES} from './constants/routes.ts';
import {
    LoginPage, 
    SingUpPage, 
    DashboardPage,
    TaskPage,
    NewTaskPage
} from "./pages/index.tsx";

function AuthLayout() {
    return (
    //   <LoginLayout>
    //     <Outlet />
    //   </LoginLayout>
    <Outlet />
    ) 
  }
const router = createBrowserRouter([
    {
        path: ROUTES.DEFAULT,
        element: <Outlet />,
        loader: ()=>{},
        children: [
            { path: ROUTES.DEFAULT, element: <DashboardPage/> },
            { path: ROUTES.LIST, element: <TaskPage/> },
            { path: ROUTES.ADD, element: <NewTaskPage/> },
        ]
    },
    {
        path: ROUTES.AUTH,
        element: AuthLayout(),
        loader: ()=>{},
        children: [
            { index:true, element:<Navigate to={ROUTES.LOGIN} replace/> },
            { path: ROUTES.LOGIN, element: <LoginPage/> },
            { path: ROUTES.SIGNUP, element: <SingUpPage/> },
        ]
    },
]);
export default function AppRoutes() {
    return <RouterProvider router={router} />;
}