import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider, createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import {Layout} from './components/auth/index.tsx';
import {ROUTES} from './constants/routes.ts';
import { loginSuccess } from './redux/auth/auth.ts';
import {
    ForgotPasswordPage
} from "./pages/index.tsx";
import { 
    TaskListController,
    DashboardController,
    LoginController,
    SignUpController,
    AddTaskController
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
            { path: ROUTES.ADD, element: <AddTaskController/> },
        ]
    },
    {
        path: ROUTES.AUTH,
        element: <AuthLayout/>,
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
    // Sync the User state from localStorage to Redux store on app load
    const dispatch = useDispatch();
    const isLogin = useSelector((state: any) => state.User.isAuthenticated);

    useEffect(() => {
        if (isLogin) return;

        const storedUser = localStorage.getItem('User');
        const user = storedUser
                    ? JSON.parse(storedUser)
                    : null;
        if (!user) return;

        try {
            dispatch(loginSuccess({
                data: user.data,
                isAuthenticated: user.isAuthenticated,
            }));
        } catch {
            localStorage.removeItem('User');
        }
    }, [isLogin, dispatch]);
    return <RouterProvider router={router} />;
}