import React from "react";
import Doctor from "../assets/doctor.png";
import Hospital from "../assets/hospital.png";

function DoctorCard(props) {
  const doctorName = props.name;
  const specialization = <div>Orthopedic</div>;

  return (
    <div className='w-full'>
      <div className='flex justify-center w-full my-3'>
        <div className='flex items-center gap-x-8 bg-slate-100 p-4 rounded-lg md:w-1/2 w-1/2 mx-6'>
          <div className=''>
            <img className='' src={Doctor} alt='' width={"90 rem"} />
          </div>
          <div className='text-lg '>
            <div>
              <div className='font-semibold'>{props.name}</div>

              <div className='font-normal'>{props.specialization}</div>
            </div>
            <div className='mt-1 '>
              <div>{props.address}</div>
            </div>
            <div className='mt-1 flex items-stretch'>
              <div>{props.phone}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
