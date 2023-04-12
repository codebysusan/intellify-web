import React from 'react'

function DoctorCard() {
    return (
        <div className='flex justify-center w-full'>
            <div className='flex gap-x-6 md:my-12 my-12 bg-slate-100 p-4 rounded-lg md:w-1/3 w-full mx-6'>
                <div className=''>
                    <img src={Doctor} alt="" width={"60 rem"} />
                </div>
                <div className='text-lg'>
                    Tasnimul Hasan Tauhid
                </div>
            </div>
        </div>
    )
}

export default DoctorCard
