import { ToastContainer, toast } from 'react-toastify';

const getStoredBooking = () => {
    const storedDoctorSTR = localStorage.getItem('readList');

    if (storedDoctorSTR ){
        const storedDoctorData = JSON.parse(storedDoctorSTR);
        return storedDoctorData;
    }
    else {
        return [];
    }
}

const addToStoredDB = (id) => {
    const storedDoctorData = getStoredBooking();

    if(storedDoctorData.includes(id)){
          <ToastContainer />
        toast.error(`Appointment already scheduled`);
    }

    else {
        storedDoctorData.push(id);
        const data = JSON.stringify(storedDoctorData);
        localStorage.setItem('readList',data);
    }
}

export {addToStoredDB , getStoredBooking};