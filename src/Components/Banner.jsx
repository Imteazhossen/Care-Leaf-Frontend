import React from 'react';
import banner from '../assets/banner-img-1.png'
import banner2 from '../assets/banner2.jpg'

const Banner = () => {
    return (
        <div className=' md:py-10 mx-auto'>
            <div className='p-4 md:p-15 border-3 border-white mx-20 rounded-3xl flex flex-col bg-linear-to-t from-white to-gray-100'>
                {/* text and search box  */}
                <div className=''>
                    <h1 className= 'text-2xl md:text-5xl font-bold text-center '>Dependable Care, Backed by Trusted  <br /> Professionals.</h1>
                    <p className='mt-5 text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                    <form className='justify-center sm:space-y-5 flex flex-col md:flex-row items-center space-x-3 my-4'>
                    <input type="text" placeholder="Large" className="input input-lg w-4/6 rounded-full" />
                    <button className='btn btn-primary rounded-full p-5 mb-5'>Search Now</button>
                    </form>
                    
                </div>
                {/* images  */}
                <div className="flex flex-col md:flex-row gap-5 my-8">
                   <div className='w-full md:w-1/2'>
                    <img src={banner} alt="" />
                   </div>
                   <div className='w-full md:w-1/2'>
                    <img className='h-full rounded-2xl' src={banner2} alt="" />
                   </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;