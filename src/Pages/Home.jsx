import React from 'react';
import Banner from '../Components/Banner';
import DoctorsContainer from '../Components/DoctorsContainer';
import { useLoaderData } from 'react-router';
import Numbers from '../Components/Numbers';

const Home = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <DoctorsContainer doctorsDetails={data}></DoctorsContainer>
            <Numbers></Numbers>
        </div>
    );
};

export default Home;