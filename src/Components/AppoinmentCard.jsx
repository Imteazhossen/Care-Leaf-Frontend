import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const AppoinmentCard = ({ doctor , handleCancel}) => {
    return (
        <div className="flex justify-center">
            <div className="rouded-xl bg-white p-7 w-10/12 my-5">
                <div className='flex justify-between  items-center border-y-2 text-slate-500 border-slate-200 border-dashed p-3 my-2'>
                    <div>
                        <p className='font-bold text-black'>Name: {doctor.name} </p>
                        <p> {doctor.education} {doctor.speciality} </p>
                    </div>
                    <p>Appointment Fee: {doctor.fees} Taka + Vat</p>
                </div>
               
                <button onClick={() => { 
                    handleCancel(doctor.id); 
                    toast.error(`Appointment canceled for ${doctor.name}`); }} className="btn btn-outline btn-error w-full mt-5 rounded-full ">Cancel Appointment</button>
               


            </div>

        </div>
    );
};

export default AppoinmentCard;