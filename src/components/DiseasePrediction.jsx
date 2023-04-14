import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Doctor from '../assets/doctor.png'
import HeartattackImg from "../assets/heart_disease.png";
import StrokeImg from "../assets/stroke.png";
import BreastCancerImg from "../assets/breastcancer.png";
import DiabetesImg from "../assets/diabetes.png"


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
                                <img src={StrokeImg} alt="" width={"100rem"} />
                            </div>
                            <div>
                                <p className='text-center text-4xl font-semibold mt-6'>
                                    Stroke Prediction
                                </p>
                            </div>
                            <div className='text-center mt-5 text-xl'>
                                Stay proactive about your health. Predict your stroke risk with our state-of-the-art model. Click here to get a quick and accurate assessment!
                            </div>
                        </div>
                    </Link>
                    <Link
                        to={"/heart-attack"}
                        className='hover:cursor-pointer w-11/12 md:w-1/4 flex items-center bg-slate-100 p-8 backdrop-blur-md min-h-[450px] rounded-xl'
                    >
                        <div>
                            <div className='flex justify-center'>
                                <img src={HeartattackImg} alt="" width={"100rem"} />
                            </div>
                            <div>
                                <p className='text-center text-4xl font-semibold mt-6'>
                                    Heart Attack Prediction
                                </p>
                            </div>
                            <div className='text-center mt-5 text-xl'>
                                Don't wait for a heart attack to strike. Predict your risk with our advanced model and take control of your heart health. Click here for a personalized assessment!
                            </div>
                        </div>
                    </Link>
                    <Link
                        to={"/diabetes"}
                        className='hover:cursor-pointer w-11/12 md:w-1/4 flex items-center bg-slate-100 p-8 backdrop-blur-md min-h-[450px] rounded-xl'
                    >
                        <div>
                            <div className='flex justify-center'>
                                <img src={DiabetesImg} alt="" width={"100rem"} />
                            </div>
                            <div>
                                <p className='text-center text-4xl font-semibold mt-6'>
                                    Diabetes Prediction
                                </p>
                            </div>
                            <div className='text-center mt-5 text-xl'>
                                Empower yourself with knowledge. Predict your risk of diabetes with our cutting-edge prediction model. Click here for a personalized assessment!
                            </div>
                        </div>
                    </Link>
                    <Link
                        to={"/breast-cancer-prediction"}
                        className='hover:cursor-pointer w-11/12 md:w-1/4 flex items-center bg-slate-100 p-8 backdrop-blur-md min-h-[450px] rounded-xl'
                    >
                        <div>
                            <div className='flex justify-center'>
                                <img src={BreastCancerImg} alt="" width={"100rem"} />
                            </div>
                            <div>
                                <p className='text-center text-4xl font-semibold mt-6'>
                                    Breast Cancer Prediction
                                </p>
                            </div>
                            <div className='text-center mt-5 text-xl'>
                                Early detection saves lives. Predict your risk of breast cancer with our advanced model and take control of your health. Click here for a personalized assessment!
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default DiseasePrediction
