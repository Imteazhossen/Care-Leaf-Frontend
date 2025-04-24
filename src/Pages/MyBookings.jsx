import React from 'react';
import { Link } from 'react-router';

const MyBookings = () => {
    return (
        <div>
            <div className='my-10'>
                <h1 className='text-2xl md:text-4xl font-bold text-center '>You have not booked any appointment yet</h1>
                <p className='mt-5 text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
                <div className="flex justify-center my-5">
                <Link to='/'><button class="btn btn-primary ">Book an appointment</button></Link>
                </div>
                

            </div>
        </div>
    );
};

export default MyBookings;