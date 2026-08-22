import React from 'react';
import { RouterProvider, createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import {LoginPage, SingUpPage} from "./pages/index.tsx";

function DashboardLayout() {
    return (
      <>
        <Outlet />
      </>
    ) 
  }
const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />,
        loader: ()=>{},
        children: [
            { path: "/", element: <h1>Default Route</h1> },
        ]
    },
    {
        path: "/auth",
        element: <Outlet />,
        loader: ()=>{},
        children: [
            {index:true, element:<Navigate to="/auth/login" replace/>},
            { path: "/auth/login", element: <LoginPage/> },
            { path: "/auth/signup", element: <SingUpPage/> },
        ]
    },
]);
export default function AppRoutes() {
    return <RouterProvider router={router} />;
}