import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

function Home() {

    const [symptoms, setSymptoms] = useState([]);

    const history = useNavigate();

    let [symptomsList, setSymptomsList] = useState([]);

    const onChange = (e) => {
        e.preventDefault();
        setSymptoms(e.target.value);
    }

    useEffect(() => {
        document.title = "MindMed | Home";
        const token = localStorage.getItem('token');
        
        // if (token == null) {
        //     history("/login");
        // } else {
        //     const userData = jwtDecode(token);
        //     console.log(userData.acc_type);
        //     if (userData.acc_type == "doctor") {
        //         history("/doctor-home");
        //     }
        // }
    }, []);

    useEffect(() => {
        if (symptoms.length != 0) {
            setSymptomsList(symptoms.split(' '));
        }
    }, [symptoms]);

    const navigateStroke = () => {
        history("/stroke");
    }

    const navigateHeartAttack = () => {
        history("/heart-attack");
    }

    const navigateDiabetes = () => {
        history("/diabetes");
    }

    const navigateBreastCancer = () => {
        history("/breast-cancer-prediction");
    }

    const rightScreen = (
        <div className='w-full'>
            <p className="text-center mt-20 text-3xl font-semibold mb-10">
                Changing the way you receive health information <br /> through the use of AI
            </p>
            <div className="flex flex-col gap-y-8 md:gap-x-12 items-center justify-center mt-8 mx-3 md:mx-10 my-2 md:my-6">
                <button
                    onClick={navigateStroke}
                    className='bg-slate-50 w-2/3 md:w-1/2 hover:bg-blue-800 hover:text-white font-medium md:text-2xl md:py-4 md:px-8 md:font-medium text-xl py-3 px-6 rounded-md' >
                    Stroke
                </button>
                <button
                    onClick={navigateHeartAttack}
                    className='bg-slate-50 w-2/3 md:w-1/2 hover:bg-blue-800 hover:text-white font-medium md:text-2xl md:py-4 md:px-8 md:font-medium text-xl py-3 px-6 rounded-md' >
                    Heart Attack
                </button>
                <button
                    onClick={navigateDiabetes}
                    className='bg-slate-50 w-2/3 md:w-1/2 hover:bg-blue-800 hover:text-white font-medium md:text-2xl md:py-4 md:px-8 md:font-medium text-xl py-3 px-6 rounded-md' >
                    Diabetes
                </button>
                <button
                    onClick={navigateBreastCancer}
                    className='bg-slate-50 w-2/3 md:w-1/2 hover:bg-blue-800 hover:text-white font-medium md:text-2xl md:py-4 md:px-8 md:font-medium text-xl py-3 px-6 rounded-md' >
                    Breast Cancer
                </button>
            </div>
        </div>
    )

    const symptomsDrivenSuggestions = (
        <div className='h-2/3'>
            <p className="text-center mt-20 text-3xl font-semibold mb-10">
                Symptom-Driven Suggestions
            </p>
            <div className='w-full flex justify-center mb-8'>
                <p className='md:w-2/3 text-xl text-center'>
                    Symptom-Driven Suggestion is an AI-based system that provides tailored recommendations for symptoms. It's not 100% accurate and should not replace medical advice. Consulting with a medical professional is still necessary for an accurate diagnosis and treatment plan.
                </p>
            </div>
            <div className="flex justify-center">
                <input
                    type="text"
                    id="symptoms"
                    className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5"
                    placeholder="Enter your symptoms" onChange={(e) => onChange(e)}

                />
                <button className="bg-black text-white px-4 py-2 rounded-md mx-3">
                    Search
                </button>
            </div>
            <div className='text-black ms-24 my-5 flex flex-wrap w-2/3'>
                {
                    symptomsList.map((symptom, index) => {
                        if (symptom.length != 0) {
                            return (
                                <div key={index} className='mx-3 bg-slate-200 px-4 py-2 my-3 rounded-lg'>
                                    {symptom}
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );

    const searchDoctor = () => {
        history("/search-doctors");
    }

    return (
        <div className='h-screen'>
            <Navbar />
            <div className='flex flex-col md:flex-row mx-6 md:mx-10 my-2 md:my-6'>
                <div className='md:w-1/2'>
                    <div className='flex h-1/4 justify-center text-center mt-20'>
                        <div className='md:w-2/3'>
                            <label className='text-xl' htmlFor="">Search Doctors</label>
                            <input
                                onClick={searchDoctor}
                                type="text"
                                id="doctors"
                                className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full mt-2"
                                placeholder="Search doctors"
                            />

                        </div>
                    </div>
                    {
                        symptomsDrivenSuggestions
                    }
                </div>
                <div className='md:w-1/2 '>
                    {
                        rightScreen
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
