import React, { Suspense } from 'react';
import Banner from '../Components/Banner';
import DoctorsContainer from '../Components/DoctorsContainer';
// import { useLoaderData } from 'react-router';
import Numbers from '../Components/Numbers';
import MissionSection from '../Components/MissionSection';
import AccordionSection from '../Components/AccordionItem';
import HeroSection from '../Components/HeroSection';
import ContactUs from '../Components/ContactUs';


const Home = () => {
    // const data = useLoaderData();
    
    return (
        <div>
            <HeroSection></HeroSection>
            <Banner></Banner>
            
            {/* <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}> <DoctorsContainer doctorsDetails={data}></DoctorsContainer></Suspense> */}
           
            <MissionSection></MissionSection>
            <AccordionSection></AccordionSection>
            <Numbers></Numbers>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;