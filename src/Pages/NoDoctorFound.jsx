import React from 'react';
import { Link, useParams } from 'react-router';
import { PiTrademarkRegistered } from "react-icons/pi";

const NoDoctorFound = () => {
    const params = useParams();
    
    return (
        <div>
            <div className="flex justify-center">
                <div className="rounded-2xl bg-white p-7 w-10/12 my-10">
                    <h1 className='text-2xl md:text-5xl font-bold text-center '>No Doctor Found!!</h1>
                    <p className='mt-5 text-center text-gray-400 font-bold'>No Doctor Found with this Registration Number- </p>
                   
                    <div className='flex justify-center items-center space-x-2'>
                    <PiTrademarkRegistered size={20} /> 
                    <p className='font-bold text-center'> {params.id}</p>
                    </div>
                   
                    <div className='flex justify-center my-5'>
                    <Link to='/'> <button className='btn btn-primary'>View All Doctors</button></Link>
                    </div>
                  
                   
                </div>
            </div>
        </div>
    );
};

export default NoDoctorFound;