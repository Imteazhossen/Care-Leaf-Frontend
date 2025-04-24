import React from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center">
                <div className="rounded-2xl bg-white p-7 w-10/12 my-10">
                    <h1 className='text-5xl md:text-5xl font-bold text-center '>No Page Found!!</h1>
                    <h1 className='text-5xl md:text-7xl font-bold text-center my-5 '>404</h1>
                    <div className='flex justify-center my-5'>
                        <Link to='/'> <button className='btn btn-primary'>Return To Home</button></Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Error;