import React from 'react'
import Navbar from './Navbar'
import Doctor from '../assets/doctor.png'

function NewHome() {
    return (
        <div className='h-screen'>
            <div className='shadow-lg'>
                <Navbar />
            </div>
            <div className='primary-color h-5/6'>
                <div className='flex flex-col md:flex-row gap-y-8 md:gap-x-8 pt-8  mx-6 primary-color items-center h-full'>
                    <div className='w-11/12 md:w-1/3  bg-slate-100 p-8 backdrop-blur-md rounded-xl'>
                        <div className='flex justify-center'>
                            <img src={Doctor} alt="" width={"100rem"} />
                        </div>
                        <div>
                            <p className='text-center text-4xl font-semibold mt-6'>
                                Disease Prediction
                            </p>
                        </div>
                        <div className='text-center mt-5 text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eius. Ea neque modi pariatur omnis! Dolorem et, praesentium voluptate ullam adipisci hic natus, dolor nam, consequuntur inventore ut! Repellendus culpa veritatis exercitationem corrupti assumenda dolores ducimus eius in distinctio quas. Placeat perferendis dolores aliquid nesciunt.
                        </div>

                    </div>
                    <div className='w-11/12 md:w-1/3  bg-slate-100 p-8 backdrop-blur-md rounded-xl'>
                        <div className='flex justify-center'>
                            <img src={Doctor} alt="" width={"100rem"} />
                        </div>
                        <div>
                            <p className='text-center text-4xl font-semibold mt-6'>
                                Disease Prediction
                            </p>
                        </div>
                        <div className='text-center mt-5 text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eius. Ea neque modi pariatur omnis! Dolorem et, praesentium voluptate ullam adipisci hic natus, dolor nam, consequuntur inventore ut! Repellendus culpa veritatis exercitationem corrupti assumenda dolores ducimus eius in distinctio quas. Placeat perferendis dolores aliquid nesciunt.
                        </div>

                    </div>
                    <div className='w-11/12 md:w-1/3  bg-slate-100 p-8 backdrop-blur-md rounded-xl'>
                        <div className='flex justify-center'>
                            <img src={Doctor} alt="" width={"100rem"} />
                        </div>
                        <div>
                            <p className='text-center text-4xl font-semibold mt-6'>
                                Disease Prediction
                            </p>
                        </div>
                        <div className='text-center mt-5 text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eius. Ea neque modi pariatur omnis! Dolorem et, praesentium voluptate ullam adipisci hic natus, dolor nam, consequuntur inventore ut! Repellendus culpa veritatis exercitationem corrupti assumenda dolores ducimus eius in distinctio quas. Placeat perferendis dolores aliquid nesciunt.
                        </div>

                    </div>

                </div>
            </div>



        </div>
    )
}

export default NewHome
