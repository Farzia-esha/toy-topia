import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import AllToys from "../Pages/AllToys";
import PrivateRoute from "../Provider/PrivateRoute";
import ToyDetails from "../Pages/ToyDetails";
import ErrorPage from "../Pages/ErrorPage";
import Profile from "../Pages/Profile";
import ForgetPassword from "../Pages/ForgotPassword";
import MyToys from "../Component/Mytoys";

const router=createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {index : true,
                element:<Home></Home>
                },
                {
                    path:'/toys',
                    element:<AllToys></AllToys>
                },
                {
                    path:'/toyDetails/:id',
                    element:(
                        <PrivateRoute>
                           <ToyDetails></ToyDetails>
                        </PrivateRoute>
                    )
                },
                {
                    path:'/profile',
                    element:(
                        <PrivateRoute>
                           <Profile></Profile>
                        </PrivateRoute>
                    )
                },
                {
                    path:'/mytoys',
                    element:(
                        <PrivateRoute>
                            <MyToys></MyToys>
                        </PrivateRoute>
                    )
                },

            ]
        },
        {
            path: '/auth',
            element: <AuthLayout></AuthLayout>,
            children:[
                {
                    path:'/auth/login',
                    element:<Login></Login>
                },
                {
                    path:'/auth/register',
                    element:<Register></Register>
                },
                {
                    path: "/auth/forgot-password",
                    element: <ForgetPassword />,
                }

            ]
        },
        {
            path: '/*',
            element: <ErrorPage></ErrorPage>
        },
    ]
);

export default router ;