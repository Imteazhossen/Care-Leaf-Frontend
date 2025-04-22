import React from 'react';
import { PiTrademarkRegistered } from "react-icons/pi";

const DoctorCard = ({ doctor }) => {
    const { id, doctorImage, name, education, speciality, experience, registrationNumber } = doctor;
    return (
        <div className="card bg-base-100  shadow-sm">
            <figure className='p-7'>
                <img className='h-[320px] w-full  rounded-2xl'
                    src={doctorImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex space-x-2'>
                <div class="badge badge-outline badge-accent">Available</div>
                <div class="badge badge-outline badge-info">{experience}+ Years Experience</div>
                </div>
           
                <h2 className="card-title font-bold text-3xl">{name}</h2>
                <p className='text-slate-500 mt-2 pb-3 border-b-2 border-dashed'>{education}, {speciality}</p>
                <div className='flex space-x-3 items-center'>
                <PiTrademarkRegistered size={20}/>
                <p className='text-slate-500'>  Reg No: {registrationNumber}</p>
                </div>
                
                <div className="card-actions ">
                <button class="btn btn-outline btn-info w-full rounded-full mt-3">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;