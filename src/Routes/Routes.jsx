import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Research from "../Pages/Research";

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
                path: '/contact',
                Component: Contact,
            },
            {
                path: '/research',
                Component: Research,
            },
            {
                path: '/about',
                Component: About,
            },
           
        ]
    },

]);
