import React from 'react';
import bgVideo from '../assets/bg.mp4'; // <-- replace with your actual video path

const HeroSection = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={bgVideo}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>

            {/* Hero Content */}
            <div className="relative flex flex-col justify-center items-center text-center text-white h-screen px-4">
                <div className="">
                      <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                        Bottle Gourd Disease Detection System
                    </h1>
                    <p className="mb-5  text-lg leading-relaxed">
                        This AI-powered system identifies diseases in bottle gourd leaves and classifies 
                        their severity into mild, moderate, and extreme stages. 
                        Using advanced machine learning models and image analysis, 
                        our project helps farmers detect plant issues early, 
                        promoting healthier crops and sustainable agriculture.
                    </p>
                  
                
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
