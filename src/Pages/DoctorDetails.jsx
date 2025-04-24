import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { PiTrademarkRegistered } from "react-icons/pi";
import { CiSquareInfo } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';


const DoctorDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();
    const singleDoctor = data.find(doctor => doctor.id === parseInt(id));
    const { day1, day2, day3, doctorImage, working, name, education, speciality, experience, registrationNumber, fees } = singleDoctor
    // const notify = () => toast(`Appointment Scheduled for ${name} successfully `);
    const navigate = useNavigate();
    // console.log(data);
    return (
        <div>
            <div className="flex justify-center">
                <div className="rounded-2xl bg-white p-7 w-10/12 my-10">
                    <h1 className='text-2xl md:text-5xl font-bold text-center '>Doctor's Profile Details</h1>
                    <p className='mt-5 text-center'>Doctors gain valuable experience through years of study, hands-on training, patient care, and critical decision-making, developing empathy, precision, and confidence while managing complex cases and constantly learning in a dynamic healthcare environment.</p>
                </div>
            </div>
            <div className=' flex justify-center'>
                <div className='p-11 bg-white w-10/12 rounded-2xl '>
                    <div className="doctor-card flex">
                        <div className="doctor-image w-2/6 ">
                            <img className='rounded-xl ' src={doctorImage} alt="" />
                        </div>
                        <div className="details w-4/6 p-10 space-y-6 ">
                            <h1 className='text-4xl font-bold'>{name}</h1>
                            <p className="text-gray-400 text-lg font-medium">{education}</p>
                            <p className="text-gray-400 text-lg font-medium">Working At: {working}</p>
                            <h1 className='text-3xl font-bold p'>{working}</h1>
                            <div className='flex space-x-3 items-center border-y-2 text-slate-500 border-slate-200 border-dashed p-5'>
                                <PiTrademarkRegistered size={20} />
                                <p className='text-slate-500 font-medium'>  Reg No: {registrationNumber}</p>
                            </div>
                            <div className='flex  space-x-5 justify-left items-center'>
                                <p className='font-bold'>Availability: </p>
                                <button className="btn btn-outline btn-warning rounded-full bg-yellow-100" >{day1}</button>
                                <button className="btn btn-outline btn-warning rounded-full bg-yellow-100" >{day2}</button>
                                <button className="btn btn-outline btn-warning rounded-full bg-yellow-100" >{day3}</button>
                            </div>
                            <p className="font-bold">Consultation Fee: <span className='text-blue-600'>Taka: {fees}</span > <span className='text-gray-500 font-semibold'>(inc.Vat)</span> <span className='text-blue-400'>Per Consultation</span> </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="rounded-2xl bg-white p-7 w-10/12 my-10">
                    <h1 className='text-2xl md:text-2xl font-bold text-center mb-5'>Book an Appointment</h1>
                    <div className='flex justify-between  items-center border-y-2 text-slate-500 border-slate-200 border-dashed p-3 my-2'>

                        <p className='font-bold'>Availability: </p>
                        <button className="btn btn-outline btn-success rounded-full bg-green-100">Doctor Available Today</button>
                    </div>
                    <button className="btn my-2 rounded-full bg-yellow-100 btn-outline btn-warning"><CiSquareInfo size={20} />Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</button>
                    {/* <Link to='/mybookings'>
                        <button onClick={notify} class="btn w-full mt-5  rounded-full btn-primary">Book Appointment Now</button>
                        <ToastContainer />
                    </Link> */}
                    <button
                        onClick={() => {
                            toast.success(`Appointment Scheduled for ${name} successfully`);
                            setTimeout(() => {
                                navigate('/mybookings');
                            }, 6000); // 3000ms = 3 seconds
                        }}
                        className="btn w-full mt-5 rounded-full btn-primary"
                    >
                        Book Appointment Now
                    </button>
                    <ToastContainer />


                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;