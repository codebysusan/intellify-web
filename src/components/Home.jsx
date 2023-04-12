import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

function Home() {

    const [symptoms, setSymptoms] = useState([]);

    let [symptomsList, setSymptomsList] = useState([]);

    const onChange = (e) => {
        e.preventDefault();
        setSymptoms(e.target.value);
    }

    useEffect(() => {
        // const localToken = localStorage.getItem("token");
        // if (localToken == null) {
        //     history("/login");
        // }
        document.title = "Snapnote | Home";
        if (symptoms.length != 0) {
            setSymptomsList(symptoms.split(' '));
        }
    }, [symptoms]);

    return (
        <div className='h-screen'>
            <Navbar />
            <div className='flex flex-col md:flex-row mx-6 md:mx-10 my-2 md:my-6'>
                <div className='md:w-1/2'>
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
                <div className='md:w-1/2 '>
                    <p className="text-center mt-20 text-3xl font-semibold mb-10">
                        Changing the way you receive health information <br /> through the use of AI
                    </p>
                    <div className="flex flex-col justify-center h-4/5">
                        <div className="flex justify-center my-12 ">
                            <Link to="/stroke">
                                <div className="md:w-96 w-88 bg-slate-100 p-12 border border-slate-100 border-4 rounded-3xl hover:border-black hover:border-r-8 hover:border-b-8 hover:border-t-0 hover:border-l-0">
                                    <p className="text-center text-black text-xl">
                                        Stroke Prediction
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center my-12">
                            <Link to="/heart-attack">
                                <div className="md:w-96 w-88 bg-slate-100 p-12 border border-slate-100 border-4 rounded-3xl hover:border-black hover:border-r-8 hover:border-b-8 hover:border-t-0 hover:border-l-0">
                                    <p className="text-center text-black text-xl">
                                        Heart Attack Prediction
                                    </p>
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center my-12">
                            <Link to={"/diabetes"}>
                                <div className="md:w-96 w-88 bg-slate-100 p-12 border border-slate-100 border-4 rounded-3xl hover:border-black hover:border-r-8 hover:border-b-8 hover:border-t-0 hover:border-l-0">
                                    <p className="text-center text-black text-xl">
                                        Diabetes Prediction
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
