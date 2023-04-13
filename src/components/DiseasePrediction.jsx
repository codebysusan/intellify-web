import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Doctor from '../assets/doctor.png'

function DiseasePrediction() {
  return (
    <div className='h-screen'>
            <div className='shadow-lg'>
                <Navbar />
            </div>
            <div className='primary-color h-5/6'>
                <div className='flex flex-col md:flex-row gap-y-8 md:gap-x-8 pt-8  mx-6 primary-color items-center h-full'>
                    <Link
                        to={"/stroke"}
                        className='hover:cursor-pointer w-11/12 md:w-1/4 flex items-center bg-slate-100 p-8 backdrop-blur-md min-h-[450px] rounded-xl'
                    >
                        <div>
                            <div className='flex justify-center'>
                                <img src={Doctor} alt="" width={"100rem"} />
                            </div>
                            <div>
                                <p className='text-center text-4xl font-semibold mt-6'>
                                    Stroke Prediction
                                </p>
                            </div>
                            <div className='text-center mt-5 text-xl'>
                                Get a quick prediction of possible diseases based on your symptoms. Click here to try our symptom prediction model!
                            </div>
                        </div>
                    </Link>
                    <Link
                        to={"/heart-attack"}
                        className='hover:cursor-pointer w-11/12 md:w-1/4 flex items-center bg-slate-100 p-8 backdrop-blur-md min-h-[450px] rounded-xl'
                    >
                        <div>
                            <div className='flex justify-center'>
                                <img src={Doctor} alt="" width={"100rem"} />
                            </div>
                            <div>
                                <p className='text-center text-4xl font-semibold mt-6'>
                                    Heart Attack Prediction
                                </p>
                            </div>
                            <div className='text-center mt-5 text-xl'>
                                Symptom-Driven Suggestion is an AI-based system that provides tailored recommendations for symptoms.
                            </div>
                        </div>
                    </Link>
                    <Link
                    to={"/diabetes"}
                        className='hover:cursor-pointer w-11/12 md:w-1/4 flex items-center bg-slate-100 p-8 backdrop-blur-md min-h-[450px] rounded-xl'
                    >
                        <div>
                            <div className='flex justify-center'>
                                <img src={Doctor} alt="" width={"100rem"} />
                            </div>
                            <div>
                                <p className='text-center text-4xl font-semibold mt-6'>
                                    Diabetes Prediction
                                </p>
                            </div>
                            <div className='text-center mt-5 text-xl'>
                                Finding the right doctor is important for good health. 
                                Find your ideal doctor in seconds!
                            </div>
                        </div>
                    </Link>
                    <Link
                    to={"/breast-cancer-prediction"}
                        className='hover:cursor-pointer w-11/12 md:w-1/4 flex items-center bg-slate-100 p-8 backdrop-blur-md min-h-[450px] rounded-xl'
                    >
                        <div>
                            <div className='flex justify-center'>
                                <img src={Doctor} alt="" width={"100rem"} />
                            </div>
                            <div>
                                <p className='text-center text-4xl font-semibold mt-6'>
                                    Breast Cancer Prediction
                                </p>
                            </div>
                            <div className='text-center mt-5 text-xl'>
                                Finding the right doctor is important for good health. 
                                Find your ideal doctor in seconds! 
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
  )
}

export default DiseasePrediction
