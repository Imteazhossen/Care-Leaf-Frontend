import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';

const DoctorsContainer = ({ doctorsDetails }) => {

    const [displayDoctors, setDisplayDoctors] = useState([]);
    const [showAll, setShowAll] = useState(false);
    useEffect(() => {

        if (showAll) {
            setDisplayDoctors(doctorsDetails);
        }
        else {
            setDisplayDoctors(doctorsDetails.slice(0, 6))
        }

    }, [doctorsDetails, showAll])
    // const data = doctorsDetails;
    // console.log(data);
    return (
        <div className='py-10 px-20'>
            <div className='mb-20'>
            <h1 className= 'text-2xl md:text-5xl font-bold text-center '>Our Best Doctors</h1>
            <p className='mt-5 text-center'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's <br /> a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-5">
                {
                    displayDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>)
                }
            </div>
            <div className=" flex justify-center mt-10">
                <button className='btn btn-primary rounded-full' onClick={() => setShowAll(!showAll)}>{showAll ? 'View Less Doctors' : 'View All Doctors'}</button>

            </div>
        </div>
    );
};

export default DoctorsContainer;