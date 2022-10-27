import { createBrowserRouter } from "react-router-dom";
import CourseMain from "../../components/layout/CourseMain";
import Main from "../../components/layout/Main";
import Blog from "../../components/pages/Blog/Blog";
import Checkout from "../../components/pages/checkout/Checkout";
import Course from "../../components/pages/course/Course";
import Courses from "../../components/pages/Courses/Courses";
import ErrorPage from "../../components/pages/ErrorPage/ErrorPage";
import FAQ from "../../components/pages/FAQ/FAQ";
import Home from "../../components/pages/Home/Home";
import SignIn from "../../components/pages/User/SignIn/SignIn";
import SignUp from "../../components/pages/User/SignUp/SignUp";
import PrivateRoute from '../PrivateRoutes/PrivateRoutes'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                errorElement: <ErrorPage></ErrorPage>,
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

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            }
        ]
    }
])