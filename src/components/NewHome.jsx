import React from 'react'
import Navbar from './Navbar'
import Doctor from '../assets/doctor.png'
import { Link } from 'react-router-dom'

function NewHome() {

    return (
        <div className='h-screen'>
            <div className='shadow-lg'>
                <Navbar />
            </div>
            <div className='primary-color h-5/6'>
                <div className='flex flex-col md:flex-row gap-y-8 md:gap-x-8 pt-8  mx-6 primary-color items-center h-full'>
                    <Link
                        to={"/disease-prediction"}
                        className='hover:cursor-pointer w-11/12 md:w-1/3 flex items-center bg-slate-100 p-8 backdrop-blur-md min-h-[450px] rounded-xl'
                    >
                        <div>
                            <div className='flex justify-center'>
                                <img src={Doctor} alt="" width={"100rem"} />
                            </div>
                            <div>
                                <p className='text-center text-4xl font-semibold mt-6'>
                                    Disease Prediction
                                </p>
                            </div>
                            <div className='text-center mt-5 text-xl'>
                                Get a quick prediction of possible diseases based on your symptoms. Click here to try our cutting-edge symptom prediction model!
                            </div>
                        </div>
                    </Link>
                    <Link
                        to={"/symptoms-suggestion"}
                        className='hover:cursor-pointer w-11/12 md:w-1/3 flex items-center bg-slate-100 p-8 backdrop-blur-md min-h-[450px] rounded-xl'
                    >
                        <div>
                            <div className='flex justify-center'>
                                <img src={Doctor} alt="" width={"100rem"} />
                            </div>
                            <div>
                                <p className='text-center text-4xl font-semibold mt-6'>
                                    Symptoms Driven Suggestion
                                </p>
                            </div>
                            <div className='text-center mt-5 text-xl'>
                                Symptom-Driven Suggestion is an AI-based system that provides tailored recommendations for symptoms. It's not 100% accurate and should not replace medical advice. Consulting with a medical professional is still necessary for an accurate diagnosis and treatment plan.
                            </div>
                        </div>
                    </Link>
                    <div
                        className='hover:cursor-pointer w-11/12 md:w-1/3 flex items-center bg-slate-100 p-8 backdrop-blur-md min-h-[450px] rounded-xl'
                    >
                        <div>
                            <div className='flex justify-center'>
                                <img src={Doctor} alt="" width={"100rem"} />
                            </div>
                            <div>
                                <p className='text-center text-4xl font-semibold mt-6'>
                                    Find Your Doctor
                                </p>
                            </div>
                            <div className='text-center mt-5 text-xl'>
                                Finding the right doctor is important for good health. 
                                Find your ideal doctor in seconds! Our search tool makes it easy to connect with top-rated healthcare professionals. Start your search for the perfect doctor here!
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default NewHome
