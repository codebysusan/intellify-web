import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'


function Stroke() {


    useEffect(() => {
        document.title = " MindMed | Stroke Prediction"
    }, []);

    const [age, setAge] = useState('');
    const [hypertension, setHypertension] = useState('');
    const [evermarried, setEvermarried] = useState("");
    const [residencetype, setResidencetype] = useState("");
    const [bmi, setBmi] = useState("");
    const [gender, setGender] = useState("");
    const [heartdisease, setHeartdisease] = useState("");
    const [worktype, setWorktype] = useState("");
    const [avgglucoselevel, setAvgglucoselevel] = useState("");
    const [smokingstatus, setSmokingstatus] = useState("");


    const changeAge = (event) => {
        const newAge = event.target.value;
        console.log(newAge);
        setAge(newAge);
    }

    const changeHypertension = (event) => {
        const newHypertension = event.target.value;
        console.log(newHypertension);
        setHypertension(newHypertension);
    }


    const changeEvermarried = (event) => {
        const newEvermarried = event.target.value;
        console.log(newEvermarried);
        setEvermarried(newEvermarried);
    }


    const changeResidencetype = (event) => {
        const newResidencetype = event.target.value;
        console.log(newResidencetype);
        setResidencetype(newResidencetype);
    }


    const changeBmi = (event) => {
        const newBmi = event.target.value;
        console.log(newBmi);
        setBmi(newBmi);
    }

    const changeGender = (event) => {
        const newGender = event.target.value;
        console.log(newGender);
        setGender(newGender);
    }

    const changeHeartdisease = (event) => {
        const newHeartdisease = event.target.value;
        console.log(newHeartdisease);
        setHeartdisease(newHeartdisease);
    }


    const changeWorktype = (event) => {
        const newWorktype = event.target.value;
        console.log(newWorktype);
        setWorktype(newWorktype);
    }

    const changeAvgglucoselevel = (event) => {
        const newAvgglucoselevel = event.target.value;
        console.log(newAvgglucoselevel);
        setAvgglucoselevel(newAvgglucoselevel);
    }

    const changeSmokingstatus = (event) => {
        const newSmokingstatus = event.target.value;
        console.log(newSmokingstatus);
        setSmokingstatus(newSmokingstatus);
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(` Age: ${age} \n Hypertension: ${hypertension} \n Evermarried: ${evermarried} \n Residence Type: ${residencetype} \n Bmi: ${bmi} \n Gender: ${gender} \n Heart Disease: ${heartdisease} \n Work Type: ${worktype} \n Avg Glucose Level: ${avgglucoselevel} \n Smoking Status: ${smokingstatus}`);

    }


    return (
        <div className=''>
            <Navbar />
            <p className='text-center mt-8 text-3xl'>Stroke Prediction</p>

            <form onSubmit={(event) => handleSubmit(event)}>

                <div className='flex justify-center'>
                    <div className='flex flex-col justify-center md:gap-x-28 md:flex-row mx-6 md:mx-10 md:my-6 mt-8'>
                        <div className=''>
                            <div className='my-4 flex justify-center'>
                                <div className=''>
                                    <label className='' htmlFor="age">Age</label>
                                    <input
                                        onChange={changeAge}
                                        type="text"
                                        id="age"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter your age"
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="hypertension">Hypertension</label>
                                    <select
                                        onChange={changeHypertension}
                                        defaultValue={"select-one"}
                                        name="hypertension"
                                        id="hypertension"
                                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 w-full focus:border-blue-500 block mt-2 py-2.5 px-2'>
                                        <option value="select-one" disabled >Select one</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="evermarried">Ever Married</label>
                                    <select
                                        onChange={changeEvermarried}
                                        defaultValue={"select-one"}
                                        name="evermarried"
                                        id="evermarried"
                                        className='border border-gray-300 text-gray-900 text-lg rounded-lg mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-2'>
                                        <option value="select-one" disabled >Select one</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="residencetype">Residence Type</label>
                                    <select
                                        onChange={changeResidencetype}
                                        defaultValue={"select-one"}
                                        name="residencetype"
                                        id="residencetype"
                                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-2 mt-2'>
                                        <option value="select-one" disabled >Select one</option>
                                        <option value="rural">Rural</option>
                                        <option value="urban">Urban</option>
                                    </select>
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div>
                                    <label className='' htmlFor="bmi">BMI</label>
                                    <input
                                        onChange={changeBmi}
                                        type="text"
                                        id="bmi"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5"
                                        placeholder="Enter BMI value"
                                    />
                                </div>

                            </div>
                        </div>
                        <div className=''>
                            <div className='md:my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="gender">Gender</label>
                                    <select
                                        onChange={changeGender}
                                        defaultValue={"select-one"}
                                        name="gender"
                                        id="gender"
                                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-2 mt-2'>
                                        <option value="select-one" disabled >Select one</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="heartDisease">Heart Disease</label>
                                    <input
                                        onChange={changeHeartdisease}
                                        type="text"
                                        id="heartDisease"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5"
                                        placeholder="Enter Heart Diseases"
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="worktype">Work Type</label>
                                    <select
                                        onChange={changeWorktype}
                                        defaultValue={"select-one"}
                                        name="worktype"
                                        id="worktype"
                                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-2 mt-2'>
                                        <option value="select-one" disabled>Select one</option>
                                        <option value="self-employed">Self Employed</option>
                                        <option value="private">Private</option>
                                        <option value="government">Goverment</option>
                                    </select>
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="avgglucoselevel">Average Glucose Level</label>
                                    <input
                                        onChange={changeAvgglucoselevel}
                                        type="text"
                                        id="avgglucoselevel"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5"
                                        placeholder="Enter Glucose Level"
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div>
                                    <label className='' htmlFor="smokingstatus">Smoking Status</label>
                                    <input
                                        onChange={changeSmokingstatus}
                                        type="text"
                                        id="smokingstatus"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5"
                                        placeholder="Enter Smoking Status"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center my-8'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-medium text-lg py-2 px-4 rounded-md' type="submit">Check</button>
                </div>
            </form>
        </div>
    )
}

export default Stroke
