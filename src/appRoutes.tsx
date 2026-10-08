import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Layout } from "./components/auth/index.tsx";
import { ROUTES } from "./constants/routes.ts";
import { loginSuccess } from "./redux/auth/auth.ts";
import {
  TaskListController,
  DashboardController,
  LoginController,
  SignUpController,
  ProfileController,
  ForgotPasswordController,
  ResetPasswordController,
} from "./controller/index.tsx";

function AuthLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
function ProtectFromLogedUser() {
  const isLogin = useSelector((state: any) => state.User.isAuthenticated);
  if (isLogin) {
    return <Navigate to={ROUTES.LIST} replace />;
  }
  return <Outlet />;
}
// function ProtectFromUnLogedUser() {
//   const isLogin = useSelector((state: any) => state.User.isAuthenticated);
//   if (!isLogin) {
//     return <Navigate to={ROUTES.LOGIN} replace />;
//   }
//   return <Outlet />;
// }

const router = createBrowserRouter([
  {
    // Public route, accessible without authentication
    path: ROUTES.DEFAULT,
    element: <ProtectFromLogedUser />,
    loader: () => {},
    children: [
      { path: ROUTES.DEFAULT, element: <DashboardController /> },
      {
        path: ROUTES.AUTH,
        element: <AuthLayout />,
        loader: () => {},
        children: [
          { index: true, element: <Navigate to={ROUTES.LOGIN} replace /> },
          { path: ROUTES.LOGIN, element: <LoginController /> },
          { path: ROUTES.SIGNUP, element: <SignUpController /> },
          {
            path: ROUTES.FORGOT_PASSWORD,
            element: <ForgotPasswordController />,
          },
          { path: ROUTES.RESET_PASSWORD, element: <ResetPasswordController /> },
        ],
      },
    ],
  },
  {
    // Private route, accessible only after authentication
    path: ROUTES.DEFAULT,
    // element: <ProtectFromUnLogedUser />,
    loader: () => {},
    children: [
      { path: ROUTES.LIST, element: <TaskListController /> },
      { path: ROUTES.PROFILE, element: <ProfileController /> },
    ],
  },
]);
export default function AppRoutes() {
  // Sync the User state from localStorage to Redux store on app load
  const dispatch = useDispatch();
  const isLogin = useSelector((state: any) => state.User.isAuthenticated);

  useEffect(() => {
    if (isLogin) return;

    const storedUser = localStorage.getItem("User");
    const user = storedUser ? JSON.parse(storedUser) : null;
    if (!user) return;

    try {
      dispatch(
        loginSuccess({
          data: user.data,
          isAuthenticated: user.isAuthenticated,
        })
      );
    } catch {
      localStorage.removeItem("User");
    }
  }, [isLogin, dispatch]);
  return <RouterProvider router={router} />;
}
