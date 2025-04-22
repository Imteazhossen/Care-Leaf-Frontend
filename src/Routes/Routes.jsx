import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import MyBookings from "../Pages/MyBookings";
import Blogs from "../Pages/Blogs";
import ContactUs from "../Pages/ContactUs";
import DoctorDetails from "../Pages/DoctorDetails";
import Error from "../Pages/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: Error,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('DoctorsDetails.json'),
               
            },
            {
                path: '/mybookings',
                Component: MyBookings ,
            },
            {
                path: '/blogs',
                Component: Blogs,
            },
            {
                path: '/contactus',
                Component: ContactUs,
            },
            {
                path: '/doctordetails',
                Component: DoctorDetails,
            },
        ]
    },

]);
