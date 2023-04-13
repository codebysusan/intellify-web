import React from 'react';
import Doctor from "../assets/doctor.png";
import Hospital from "../assets/hospital.png";

function DoctorCard(props) {

    const doctorName = props.name;
    const doctorHospital = props.hospital;

    const userName = doctorName.length < 18 ? (
        <p>
            {doctorName}
        </p>
    ) : (
        <p>
            {
                doctorName
                // doctorName.substring(0, 18).concat("...")
            }
        </p>
    );


    const hospitalName = props.hospital;

    const hospital = hospitalName.length < 18 ? (
        <p className='ml-3 self-end'>
            {hospitalName}
        </p>
    ) : (
        <p className='ml-3 self-end'>
            {
                hospitalName
                // hospitalName.substring(0, 18).concat("...")
            }
        </p>
    );



    return (
        <div className='flex justify-center w-full my-3'>
            <div className='flex items-center gap-x-6 bg-slate-100 p-4 rounded-lg md:w-1/3 w-full mx-6'>
                <div className=''>
                    <img className='' src={Doctor} alt="" width={"60 rem"} />
                </div>
                <div className='text-lg'>
                    {
                        userName
                    }
                    <div className='mt-2 flex items-stretch'>
                        <div>
                            <img src={Hospital} alt="" width={"25rem"} />
                        </div>
                        <div>
                            {
                                hospital
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DoctorCard
