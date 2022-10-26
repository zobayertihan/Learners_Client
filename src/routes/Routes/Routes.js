import { createBrowserRouter } from "react-router-dom";
import CourseMain from "../../components/layout/CourseMain";
import Main from "../../components/layout/Main";
import Checkout from "../../components/pages/checkout/Checkout";
import Course from "../../components/pages/course/Course";
import Courses from "../../components/pages/Courses/Courses";
import Home from "../../components/pages/Home/Home";
import SignIn from "../../components/pages/User/SignIn/SignIn";
import SignUp from "../../components/pages/User/SignUp/SignUp";
import PrivateRoute from '../PrivateRoutes/PrivateRoutes'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://server-zobayertihan.vercel.app/courses`)
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/',
                element: <CourseMain></CourseMain>,
                children: [
                    {
                        path: '/courses',
                        element: <Courses></Courses>,
                        loader: () => fetch(`https://server-zobayertihan.vercel.app/courses`)
                    },
                    {
                        path: '/course/:id',
                        element: <PrivateRoute><Course></Course></PrivateRoute>,
                        loader: ({ params }) => fetch(`https://server-zobayertihan.vercel.app/course/${params.id}`)
                    }
                ]
            },
            {
                path: '/course/:id/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-zobayertihan.vercel.app/course/${params.id}`)

            }
        ]
    }
])