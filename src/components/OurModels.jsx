import React from 'react'
import HeartattackImg from "../assets/heart_disease.png";
import StrokeImg from "../assets/stroke.png";
import BreastCancerImg from "../assets/breastcancer.png";
import DiabetesImg from "../assets/diabetes.png"
import SuggestionImg from "../assets/suggestion.png"
import Doctor from '../assets/doctor.png'

function OurModels() {
    return (
        <div>
            <div className='text-white flex justify-center border-t-4 mt-12'>
                <div className='mt-12'>
                    <p className='text-5xl font-bold'>Our Models</p>
                </div>
            </div>
            <div className='ml-24 mt-24 flex'>
                <div className="w-1/2">
                    <div className='flex flex-row gap-x-6 items-center '>
                        <div className='rounded-md'>
                            <img className='bg-white p-2 rounded-xl' src={StrokeImg} width={"60rem"} alt="" />
                        </div>
                        <div>
                            <p className='text-3xl font-bold text-white'>Stroke Prediction Model</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-white ml-20 mb-4'>Accuracy: 99.10%</p>
                    </div>
                    <div className='px-20 pt-2 text-white '>
                        <div class="w-full bg-white rounded-full h-2.5 dark:bg-white">
                            <div class="bg-gray-700 h-2.5 rounded-full" style={{ width: "99%" }}></div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className='flex flex-row gap-x-6 items-center '>
                        <div className='rounded-md'>
                            <img className='bg-white p-2 rounded-xl' src={DiabetesImg} width={"60rem"} alt="" />
                        </div>
                        <div>
                            <p className='text-3xl font-bold text-white'>Diabetes Prediction Model</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-white ml-20 mb-4'>Accuracy: 95.43%</p>
                    </div>
                    <div className='px-20 pt-2 text-white '>
                        <div class="w-full bg-white rounded-full h-2.5 dark:bg-white">
                            <div class="bg-gray-700 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-24 mt-24 flex'>
                <div className="w-1/2">
                    <div className='flex flex-row gap-x-6 items-center '>
                        <div className='rounded-md'>
                            <img className='bg-white p-2 rounded-xl' src={HeartattackImg} width={"60rem"} alt="" />
                        </div>
                        <div>
                            <p className='text-3xl font-bold text-white'>Heart Attack Model</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-white ml-20 mb-4'>Accuracy: 90.16%</p>
                    </div>
                    <div className='px-20 pt-2 text-white '>
                        <div class="w-full bg-white rounded-full h-2.5 dark:bg-white">
                            <div class="bg-gray-700 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <div className='flex flex-row gap-x-6 items-center '>
                        <div className='rounded-md'>
                            <img className='bg-white p-2 rounded-xl' src={BreastCancerImg} width={"60rem"} alt="" />
                        </div>
                        <div>
                            <p className='text-3xl font-bold text-white'>Breast Cancer Model</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-white ml-20 mb-4'>Accuracy: 97.66%</p>
                    </div>
                    <div className='px-20 pt-2 text-white '>
                        <div class="w-full bg-white rounded-full h-2.5 dark:bg-white">
                            <div class="bg-gray-700 h-2.5 rounded-full" style={{ width: "97%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurModels
