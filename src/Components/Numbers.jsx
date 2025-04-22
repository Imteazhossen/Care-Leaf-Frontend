import React from 'react';
import CountUp from 'react-countup';
import board from '../assets/success-doctor.png'
import star from '../assets/success-review.png'
import peoplePlus from '../assets/success-patients.png'
import people from '../assets/success-staffs.png'

const Numbers = () => {
    return (
        <div className='my-10'>
            <div>
            <h1 className= 'text-2xl md:text-5xl font-bold text-center '>We Provide Best Medical Services</h1>
            <p className='mt-5 text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 md:px-25 py-10'>
              <div className="rounded-2xl h-[220px]  bg-white p-5" >
                <img className='w-15' src={board} alt="" />
                <h1 className='text-left text-5xl  md:text-6xl font-bold'><CountUp end={199}  duration={20}></CountUp>+</h1>
                <p className='mt-5 text-left text-gray-500 font-semibold'>Total Doctors </p>
              </div>
              <div className="rounded-2xl h-[220px]  bg-white p-5" >
                <img className='w-15' src={star} alt="" />
                <h1 className='text-left  text-5xl md:text-6xl font-bold'><CountUp end={467}  duration={20}></CountUp>+</h1>
                <p className='mt-5 text-left text-gray-500 font-semibold'>Total Doctors </p>
              </div>
              <div className="rounded-2xl h-[220px] bg-white p-5" >
                <img className='w-15' src={peoplePlus} alt="" />
                <h1 className='text-left text-5xl md:text-6xl font-bold'><CountUp end={1900}  duration={20}></CountUp>+</h1>
                <p className='mt-5 text-left text-gray-500 font-semibold'>Total Doctors </p>
              </div>
              <div className="rounded-2xl h-[220px]  bg-white p-5" >
                <img className='w-15' src={people} alt="" />
                <h1 className='text-left text-5xl md:text-6xl font-bold'><CountUp end={300}  duration={20}></CountUp>+</h1>
                <p className='mt-5 text-left text-gray-500 font-semibold'>Total Doctors </p>
              </div>
            </div>
        </div>
    );
};

export default Numbers;