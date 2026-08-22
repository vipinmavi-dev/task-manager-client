import React from 'react';
import { RouterProvider, createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import {LoginPage, SingUpPage} from "./pages/index.tsx";
import {LoginLayout} from './components/login/index.tsx';
import {ROUTES} from './constants/routes.ts';

function AuthLayout() {
    return (
      <LoginLayout>
        <Outlet />
      </LoginLayout>
    ) 
  }
const router = createBrowserRouter([
    {
        path: ROUTES.DEFAULT,
        element: <Outlet />,
        loader: ()=>{},
        children: [
            { path: ROUTES.DEFAULT, element: <h1>Default Route</h1> },
        ]
    },
    {
        path: ROUTES.AUTH,
        element: AuthLayout(),
        loader: ()=>{},
        children: [
            {index:true, element:<Navigate to={ROUTES.LOGIN} replace/>},
            { path: ROUTES.LOGIN, element: <LoginPage/> },
            { path: ROUTES.SIGNUP, element: <SingUpPage/> },
        ]
    },
]);
export default function AppRoutes() {
    return <RouterProvider router={router} />;
}