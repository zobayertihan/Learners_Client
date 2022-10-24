import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/layout/Main";
import SignIn from "../../components/pages/User/SignIn/SignIn";
import SignUp from "../../components/pages/User/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            }
        ]
    }
])