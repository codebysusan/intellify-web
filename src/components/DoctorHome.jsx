import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

function DoctorHome() {

    useEffect(()=>{
        document.title = "MindMed | Doctor Home";
        const token = localStorage.getItem('token');
        if(token == null){
            history("/login");
        }
    },[])
    

    const history = useNavigate();


    const navigateStroke = () => {
        history("/stroke");
    }

    const navigateDiabetes = () => {
        history("/diabetes");
    }

    const navigateHeartAttack = () => {
        history("/heart-attack");
    }

    return (
        <div>
            <Navbar />
            <p className="text-center mt-20 text-3xl font-semibold mb-10">
                Select the disease you want to predict
            </p>
            <div className='flex flex-col md:flex-row gap-y-6 md:gap-x-12 justify-center mt-8 mx-3 md:mx-10 my-2 md:my-6'>
                <button
                    onClick={navigateStroke}
                    className='bg-slate-50 hover:bg-blue-800 hover:text-white font-medium md:text-2xl md:py-4 md:px-8 md:font-medium text-md py-3 px-6 rounded-md' >
                    Stroke
                </button>
                <button
                    onClick={navigateHeartAttack}
                    className='bg-slate-50 hover:bg-blue-800 hover:text-white font-medium md:text-2xl md:py-4 md:px-8 md:font-medium text-md py-3 px-6 rounded-md' >
                    Heart Attack
                </button>
                <button
                    onClick={navigateDiabetes}
                    className='bg-slate-50 hover:bg-blue-800 hover:text-white font-medium md:text-2xl md:py-4 md:px-8 md:font-medium text-md py-3 px-6 rounded-md' >
                    Diabetes
                </button>
            </div>
        </div>
    )
}

export default DoctorHome
