import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { getStoredBooking } from '../Utility/addToDB';
import AppoinmentCard from '../Components/AppoinmentCard';

const MyBookings = () => {
    const data = useLoaderData();
    
    const [list, setList] = useState([]);

    useEffect(()=> {
        const storedBookingData = getStoredBooking();
        const convertedBookingData = storedBookingData.map(id => parseInt(id));
        const appointmentList = data.filter(doctor => convertedBookingData.includes(doctor.id));
        setList(appointmentList);
    },[])




    const handleCancel = (id) => {
        // Remove from local storage
        const updatedList = list.filter(doctor => doctor.id !== id);
        setList(updatedList);

        const stored = JSON.parse(localStorage.getItem('readList')) || [];
        const newStored = stored.filter(storedId => parseInt(storedId) !== id);
       
        localStorage.setItem('readList', JSON.stringify(newStored));
    };














    return (
        <div>
            <div className={`my-10 ${list.length === 0 ? "" : "hidden"}`}>
                <h1 className='text-2xl md:text-4xl font-bold text-center '>You have not booked any appointment yet</h1>
                <p className='mt-5 text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
                <div className="flex justify-center my-5">
                <Link to='/'><button className="btn btn-primary ">Book an appointment</button></Link>
                </div>   
            </div>
            <div className={`my-10 ${list.length === 0 ?  "hidden" :""}`}>
                <h1 className='text-2xl md:text-4xl font-bold text-center '>My Today Appointment</h1>
                <p className='mt-5 text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            </div>

            {
                list.map(doctor => <AppoinmentCard key={doctor.id} doctor={doctor} handleCancel={handleCancel} ></AppoinmentCard>)
            }
        </div>
    );
};

export default MyBookings;