import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import jwtDecode from "jwt-decode";

import { useNavigate } from "react-router-dom";

function Stroke() {
  const history = useNavigate();
  useEffect(() => {
    document.title = " MindMed | Stroke Prediction";
    const token = localStorage.getItem("token");
    if (token == null) {
      history("/login");
    } else {
      const userData = jwtDecode(token);
      console.log(userData.acc_type);
      if (userData.acc_type == "doctor") {
        history("/doctor-home");
      }
    }
  }, []);

  const predictionUrl = import.meta.env.VITE_PREDICTION_URL;

  const [age, setAge] = useState("");
  const [hypertension, setHypertension] = useState("");
  const [heartdisease, setHeartdisease] = useState("");
  const [evermarried, setEvermarried] = useState("");
  const [avgglucoselevel, setAvgglucoselevel] = useState("");
  const [bmi, setBmi] = useState("");
  const [smokingstatus, setSmokingstatus] = useState("");
  const [outputMessage, setOutputMessage] = useState("");

  const changeAge = (event) => {
    const newAge = event.target.value;
    console.log(newAge);
    setAge(newAge);
  };

  const changeHypertension = (event) => {
    const newHypertension = event.target.value;
    console.log(newHypertension);
    setHypertension(newHypertension);
  };

  const changeEvermarried = (event) => {
    const newEvermarried = event.target.value;
    console.log(newEvermarried);
    setEvermarried(newEvermarried);
  };

  const changeBmi = (event) => {
    const newBmi = event.target.value;
    console.log(newBmi);
    setBmi(newBmi);
  };

  const changeHeartdisease = (event) => {
    const newHeartdisease = event.target.value;
    console.log(newHeartdisease);
    setHeartdisease(newHeartdisease);
  };

  const changeAvgglucoselevel = (event) => {
    const newAvgglucoselevel = event.target.value;
    console.log(newAvgglucoselevel);
    setAvgglucoselevel(newAvgglucoselevel);
  };

  const changeSmokingstatus = (event) => {
    const newSmokingstatus = event.target.value;
    console.log(newSmokingstatus);
    setSmokingstatus(newSmokingstatus);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(
      ` Age: ${age} \n Hypertension: ${hypertension} \n Evermarried: ${evermarried} \n Bmi: ${bmi} \n Heart Disease: ${heartdisease} \n Avg Glucose Level: ${avgglucoselevel} \n Smoking Status: ${smokingstatus}`
    );


    await fetch(`${predictionUrl}/stroke`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age: age,
        hypertension: hypertension,
        heart_disease: heartdisease,
        ever_married: evermarried,
        avg_glucose_level: avgglucoselevel,
        bmi: bmi,
        smoking_status: smokingstatus,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { prediction, yes, no } = data;
        if (prediction == 1) {
          setOutputMessage(
            "You have a high chance of getting a stroke. It is a better idea to consult a doctor"
          );
          // console.log("You have a high chance of getting a stroke");
        } else if (prediction == 0) {
          setOutputMessage("You have a low chance of getting a stroke");
          // console.log("You have a low chance of getting a stroke");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=''>
      <Navbar />
      <p className='text-center mt-8 text-3xl font-semibold text-white'>Stroke Prediction</p>
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className='flex justify-center'>
          <div className='flex flex-col justify-center md:gap-x-28 md:flex-row mx-6 md:mx-10 md:my-6 mt-8'>
            <div className=''>
              <div className='my-4 flex justify-center'>
                <div className=''>
                  <label className='text-white text-lg' htmlFor='age'>
                    Age
                  </label>
                  <input
                    onChange={changeAge}
                    type='text'
                    id='age'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                    placeholder='Enter your age'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='hypertension'>
                    Hypertension
                  </label>
                  <select
                    onChange={changeHypertension}
                    defaultValue={"select-one"}
                    name='hypertension'
                    id='hypertension'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 w-full focus:border-blue-500 block mt-2 py-2.5 px-2'
                    required
                  >
                    <option value='select-one' disabled>
                      Select one
                    </option>
                    <option value='1'>Yes</option>
                    <option value='0'>No</option>
                  </select>
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='evermarried'>
                    Ever Married
                  </label>
                  <select
                    onChange={changeEvermarried}
                    defaultValue={"select-one"}
                    name='evermarried'
                    id='evermarried'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-2'
                    required
                  >
                    <option value='select-one' disabled>
                      Select one
                    </option>
                    <option value='1'>Yes</option>
                    <option value='0'>No</option>
                  </select>
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div>
                  <label className='text-white text-lg' htmlFor='bmi'>
                    BMI
                  </label>
                  <input
                    onChange={changeBmi}
                    type='text'
                    id='bmi'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5'
                    placeholder='Enter BMI value'
                    required
                  />
                </div>
              </div>
            </div>
            <div className=''>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='heartDisease'>
                    Heart Disease
                  </label>
                  <select
                    onChange={changeHeartdisease}
                    defaultValue={"select-one"}
                    name='heartDisease'
                    id='heartDisease'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg mt-2 focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-2'
                    required
                  >
                    <option value='select-one' disabled>
                      Select one
                    </option>
                    <option value='1'>Yes</option>
                    <option value='0'>No</option>
                  </select>
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='avgglucoselevel'>
                    Average Glucose Level
                  </label>
                  <input
                    onChange={changeAvgglucoselevel}
                    type='text'
                    id='avgglucoselevel'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5'
                    placeholder='Enter Glucose Level'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='smokingstatus'>
                    Smoking Status
                  </label>
                  <select
                    onChange={changeSmokingstatus}
                    defaultValue={"select-one"}
                    name='smokingstatus'
                    id='smokingstatus'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-2 mt-2'
                    required
                  >
                    <option value='select-one' disabled>
                      Select one
                    </option>
                    <option value='1'>Former Smoker</option>
                    <option value='0'>Never Smoke</option>
                    <option value='1'>Current Smoker</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center my-8'>
          <button
            className='bg-white hover:bg-slate-200 text-black font-medium text-lg py-2 px-4 rounded-md'
            type='submit'
          >
            Check
          </button>
        </div>
      </form>
      <div>
        <p className='text-center text-2xl'>{outputMessage}</p>
      </div>
    </div>
  );
}

export default Stroke;
