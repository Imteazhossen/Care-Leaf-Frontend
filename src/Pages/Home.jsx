import React, { Suspense } from 'react';
import Banner from '../Components/Banner';
import DoctorsContainer from '../Components/DoctorsContainer';
import { useLoaderData } from 'react-router';
import Numbers from '../Components/Numbers';


const Home = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}> <DoctorsContainer doctorsDetails={data}></DoctorsContainer></Suspense>
           
            <Numbers></Numbers>
        </div>
    );
};

export default Home;