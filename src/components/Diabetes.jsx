import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

function Diabetes() {

    useEffect(() => {
        document.title = "Diabetes Prediction"
    }, []);


    const [age, setAge] = useState('');
    const [pregnancies, setPregnancies] = useState('');
    const [glucose, setGlucose] = useState("");
    const [bloodPressure, setBloodPressure] = useState("");
    const [skinThickness, setSkinThickness] = useState("");
    const [insulin, setInsulin] = useState("");
    const [bmi, setBmi] = useState("");
    const [diabetesPedigree, setDiabetesPedigree] = useState("");


    const changeAge = (event) => {
        const newAge = event.target.value;
        setAge(newAge);
    }

    const changePregnancies = (event) => {
        const newPregnancies = event.target.value;
        console.log(newPregnancies);
        setPregnancies(newPregnancies);
    }


    const changeGlucose = (event) => {
        const newGlucose = event.target.value;
        console.log(newGlucose);
        setGlucose(newGlucose);
    }

    const changeBloodPressure = (event) => {
        const newBloodPressure = event.target.value;
        console.log(newBloodPressure);
        setBloodPressure(newBloodPressure);
    }

    const changeSkinThickness = (event) => {
        const newSkinThickness = event.target.value;
        console.log(newSkinThickness);
        setSkinThickness(newSkinThickness);
    }

    const changeInsulin = (event) => {
        const newInsulin = event.target.value;
        console.log(newInsulin);
        setInsulin(newInsulin);
    }


    const changeBmi = (event) => {
        const newBmi = event.target.value;
        console.log(newBmi);
        setBmi(newBmi);
    }

    const changeDiabetesPedigree = (event) => {
        const newDiabetesPedigree = event.target.value;
        console.log(newDiabetesPedigree);
        setDiabetesPedigree(newDiabetesPedigree);
    }

    const checkDiabetes = (event) => {
        event.preventDefault();
        console.log(` Age: ${age} \n Pregnancies: ${pregnancies} \n Glucose: ${glucose} \n Blood Pressure: ${bloodPressure} \n Skin Thickness: ${skinThickness} \n Insulin: ${insulin} \n BMI: ${bmi} \n Diabetes Pedigree: ${diabetesPedigree}`);
    }

    return (
        <div className=''>
            <Navbar />
            <p className='text-center mt-8 mb-4 text-3xl'>Diabetes Prediction</p>
            <form onSubmit={(event) => { checkDiabetes(event) }}>
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
                                    <label className='' htmlFor="pregnancies">Pregnancies</label>
                                    <input
                                        onChange={changePregnancies}
                                        type="text"
                                        id="pregnancies"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter no of pregnancies"
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="glucose">Glucose</label>
                                    <input
                                        onChange={changeGlucose}
                                        type="text"
                                        id="glucose"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter your glucose level"
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="blood-pressure">Blood Pressure</label>
                                    <input
                                        onChange={changeBloodPressure}
                                        type="text"
                                        id="blood-pressure"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter your blood pressure"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='md:my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="skin-thickness">Skin Thickness</label>
                                    <input
                                        onChange={changeSkinThickness}
                                        type="text"
                                        id="skin-thickness"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter your skin thickness"
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="insulin">Insulin</label>
                                    <input
                                        onChange={changeInsulin}
                                        type="text"
                                        id="insulin"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5"
                                        placeholder="Enter your insulin level"
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="bmi">BMI</label>
                                    <input
                                        onChange={changeBmi}
                                        type="text"
                                        id="bmi"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter your BMI value"
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="pedigree-function">Diabetes Pedigree Function</label>
                                    <input
                                        onChange={changeDiabetesPedigree}
                                        type="text"
                                        id="pedigree-function"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter your diabetes pedigree function"
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

export default Diabetes
