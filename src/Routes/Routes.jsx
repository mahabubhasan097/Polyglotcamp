import {
    createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import LanguageClasses from "../Pages/LanguageClasses/LanguageClasses";
import Dashboard from "../Layout/DashBoard";
import StudentHome from "../Pages/Dashboard/StudentHome";
import StudentRoute from "./StudentRoute";
import SelectedClasses from "../Pages/Dashboard/SelectedClasses";
import Payment from "../Pages/Dashboard/Payment";
import EnrolledClasses from "../Pages/Dashboard/EnrolledClasses";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import AdminRoute from "./AdminRoute";
import AdminHome from "../Pages/Dashboard/AdminHome";
import ManageClasses from "../Pages/Dashboard/ManageClasses";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import InstructorRoute from "./InstructorRoute";
import InstructorHome from "../Pages/Dashboard/InstructorHome";
import AddClass from "../Pages/Dashboard/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/instructors',
                element:<Instructors></Instructors>
            },
            {
                path:'/languageclasses',
                element:<LanguageClasses></LanguageClasses>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    },
    {
        path:'dashboard',
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'adminhome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path:'manageclasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path:'manageusers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path:'instructorhome',
                element: <InstructorRoute><InstructorHome></InstructorHome></InstructorRoute>
            },
            {
                path:'addclass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path:'myclasses',
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            {
                path:'studenthome',
                element: <StudentRoute><StudentHome></StudentHome></StudentRoute>
            },
            {
                path:'selectedclasses',
                element: <StudentRoute><SelectedClasses></SelectedClasses></StudentRoute>
            },
            {
                path:'enrolledclasses',
                element: <StudentRoute><EnrolledClasses></EnrolledClasses></StudentRoute>
            },
            {
                path:'paymenthistory',
                element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
            },
            {
                path:'payment/:id',
                element: <StudentRoute><Payment></Payment></StudentRoute>
            }
        ]
    }
]);