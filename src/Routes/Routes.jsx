import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import MyBookings from "../Pages/MyBookings";
import Blogs from "../Pages/Blogs";
import ContactUs from "../Pages/ContactUs";
import DoctorDetails from "../Pages/DoctorDetails";
import Error from "../Pages/Error";
import NoDoctorFound from "../Pages/NoDoctorFound";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <Error />,
        children: [
            {
                index: true,
                Component: Home,
                hydrateFallbackElement: <div className="flex justify-center"><span className="loading loading-bars flex justify-center loading-xl"></span></div> ,
                loader: () => fetch('../DoctorsDetails.json'),
               
            },
            {
                path: '/mybookings',
                Component: MyBookings ,
                hydrateFallbackElement: <div className="flex justify-center"><span className="loading loading-bars flex justify-center loading-xl"></span></div> ,
                loader: () => fetch('../DoctorsDetails.json'),
            },
            {
                path: '/blogs',
                Component: Blogs,
                hydrateFallbackElement: <div className="flex justify-center"><span className="loading loading-bars flex justify-center loading-xl"></span></div> ,
                loader: () => fetch('BlogsDetails.json'),
            },
            {
                path: '/contactus',
                Component: ContactUs,
            },
            {
                path: '/doctordetails/:id',
                Component: DoctorDetails,
                errorElement: <NoDoctorFound />,
                hydrateFallbackElement: <div className="flex justify-center"><span className="loading loading-bars flex justify-center loading-xl"></span></div> ,
                loader: () => fetch('../DoctorsDetails.json'),
            },
        ]
    },

]);
