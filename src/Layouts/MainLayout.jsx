import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';

const MainLayout = () => {
    return (
         <div className='bg-white'>
          <Navbar></Navbar>
          {/* <div className='min-h-[calc(100vh-350px)] bg-gray-100'>
            <Banner></Banner>
          </div> */}
          <Outlet></Outlet>
          <Footer></Footer>
         </div>
        
    );
};

export default MainLayout;