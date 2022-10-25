import { createBrowserRouter } from "react-router-dom";
import CourseMain from "../../components/layout/CourseMain";
import Main from "../../components/layout/Main";
import Course from "../../components/pages/course/Course";
import Courses from "../../components/pages/Courses/Courses";
import Home from "../../components/pages/Home/Home";
import SignIn from "../../components/pages/User/SignIn/SignIn";
import SignUp from "../../components/pages/User/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://server-zobayertihan.vercel.app/courses`)
                // loader: () => fetch(`http://localhost:5000/courses`)
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
                // loader: () => fetch(`http://localhost:5000/courses`)
                children: [
                    {
                        path: '/courses',
                        element: <Courses></Courses>,
                        loader: () => fetch(`https://server-zobayertihan.vercel.app/courses`)
                    },
                    // {
                    //     path: '/courses/:id',
                    //     element: <Courses></Courses>,
                    //     loader: ({ params }) => fetch(`https://server-zobayertihan.vercel.app/courses/${params.id}`)
                    // },
                    {
                        path: '/course/:id',
                        element: <Course></Course>,
                        loader: ({ params }) => fetch(`https://server-zobayertihan.vercel.app/course/${params.id}`)
                    }
                ]
            },
        ]
    }
])