import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import jwtDecode from "jwt-decode";
import DataCard from "./DataCard";

const comparisonData = [
  {
    feature_name: "pregnencies",
    formal_name: "No Of Pregnencies",
    min_value: 3.7,
    max_value: 17,
    standard_value: 3.31,
  },
  {
    feature_name: "glucose",
    formal_name: "Glucose",
    min_value: 121.98,
    max_value: 199,
    standard_value: 30.53,
  },
  {
    feature_name: "blood_pressure",
    formal_name: "Blood Pressure",
    min_value: 72.4,
    max_value: 122,
    standard_value: 11.95,
  },
  {
    feature_name: "skin_thickness",
    formal_name: "Skin Thickness",
    min_value: 29.24,
    max_value: 110,
    standard_value: 9.12,
  },
  {
    feature_name: "insulin",
    formal_name: "Insulin",
    min_value: 153.74,
    max_value: 744,
    standard_value: 80.38,
  },
  {
    feature_name: "bmi",
    formal_name: "BMI",
    min_value: 32.65,
    max_value: 80.6,
    standard_value: 7.19,
  },
  {
    feature_name: "diabetics_pedigree_function",
    formal_name: "Diabetics Pedigree Function",
    min_value: 0.47,
    max_value: 2.42,
    standard_value: 0.32,
  },
  // {
  //   feature_name: "age",
  //   formal_name: "Age",
  //   min_value: 33.09,
  //   max_value: 81,
  //   standard_value: 11.79,
  // },
];

function Diabetes() {
  useEffect(() => {
    document.title = "MindMed | Diabetes Prediction";
    const token = localStorage.getItem("token");
    if (token == null) {
      history("/login");
    } else {
      const userData = jwtDecode(token);
      if (userData.acc_type == "doctor") {
        history("/doctor-home");
      }
    }
  }, []);

  const predictionUrl = import.meta.env.VITE_PREDICTION_URL;
  const [age, setAge] = useState("");
  const [pregnancies, setPregnancies] = useState("");
  const [glucose, setGlucose] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [skinThickness, setSkinThickness] = useState("");
  const [insulin, setInsulin] = useState("");
  const [bmi, setBmi] = useState("");
  const [diabetesPedigree, setDiabetesPedigree] = useState("");
  const [outputMessage, setOutputMessage] = useState("");
  const [dataCardVisibile, setDataCardVisibile] = useState(false);
  const [prediction, setPrediction] = useState({});

  const changeAge = (event) => {
    const newAge = event.target.value;
    setAge(newAge);
  };

  const changePregnancies = (event) => {
    const newPregnancies = event.target.value;
    console.log(newPregnancies);
    setPregnancies(newPregnancies);
  };

  const changeGlucose = (event) => {
    const newGlucose = event.target.value;
    console.log(newGlucose);
    setGlucose(newGlucose);
  };

  const changeBloodPressure = (event) => {
    const newBloodPressure = event.target.value;
    console.log(newBloodPressure);
    setBloodPressure(newBloodPressure);
  };

  const changeSkinThickness = (event) => {
    const newSkinThickness = event.target.value;
    console.log(newSkinThickness);
    setSkinThickness(newSkinThickness);
  };

  const changeInsulin = (event) => {
    const newInsulin = event.target.value;
    console.log(newInsulin);
    setInsulin(newInsulin);
  };

  const changeBmi = (event) => {
    const newBmi = event.target.value;
    console.log(newBmi);
    setBmi(newBmi);
  };

  const changeDiabetesPedigree = (event) => {
    const newDiabetesPedigree = event.target.value;
    console.log(newDiabetesPedigree);
    setDiabetesPedigree(newDiabetesPedigree);
  };

  const checkDiabetes = async (event) => {
    event.preventDefault();

    console.log(
      ` Age: ${age} \n Pregnancies: ${pregnancies} \n Glucose: ${glucose} \n Blood Pressure: ${bloodPressure} \n Skin Thickness: ${skinThickness} \n Insulin: ${insulin} \n BMI: ${bmi} \n Diabetes Pedigree: ${diabetesPedigree}`
    );

    await fetch(`${predictionUrl}/diabetes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        age: age,
        pregnancies: pregnancies,
        glucose: glucose,
        blood_pressure: bloodPressure,
        skin_thickness: skinThickness,
        insulin: insulin,
        bmi: bmi,
        diabetes_pedigree_function: diabetesPedigree,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDataCardVisibile(true);
        const { prediction, yes, no } = data;
        setPrediction({ prediction, yes, no });
        if (prediction == 1) {
          setOutputMessage(
            "You have a high chance of getting a diabetes. It is a better idea to consult a doctor"
          );
          // console.log("You have a high chance of getting a stroke");
        } else if (prediction == 0) {
          setOutputMessage("You have a low chance of getting a diabetes.");
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

      {dataCardVisibile ? (
        <DataCard
          data={[
            {
              feature_name: "age",
              current_value: age,
            },
            {
              feature_name: "pregnencies",
              current_value: pregnancies,
            },
            {
              feature_name: "glucose",
              current_value: glucose,
            },
            {
              feature_name: "blood_pressure",
              current_value: bloodPressure,
            },
            {
              feature_name: "skin_thickness",
              current_value: skinThickness,
            },
            {
              feature_name: "insulin",
              current_value: insulin,
            },
            {
              feature_name: "bmi",
              current_value: bmi,
            },
            {
              feature_name: "diabetics_pedigree_function",
              current_value: diabetesPedigree,
            },
          ]}
          comparisonData={comparisonData}
          prediction={prediction}
          message={outputMessage}
        />
      ) : (
        <>
          <p className='text-center mt-8 text-3xl font-semibold text-white'>
            Diabetes Prediction
          </p>
          <form
            onSubmit={(event) => {
              checkDiabetes(event);
            }}
          >
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
                      />
                    </div>
                  </div>
                  <div className='my-4 flex justify-center'>
                    <div className='w-full'>
                      <label
                        className='text-white text-lg'
                        htmlFor='pregnancies'
                      >
                        Pregnancies
                      </label>
                      <input
                        onChange={changePregnancies}
                        type='text'
                        id='pregnancies'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                        placeholder='Enter no of pregnancies'
                      />
                    </div>
                  </div>
                  <div className='my-4 flex justify-center'>
                    <div className='w-full'>
                      <label className='text-white text-lg' htmlFor='glucose'>
                        Glucose
                      </label>
                      <input
                        onChange={changeGlucose}
                        type='text'
                        id='glucose'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                        placeholder='Enter your glucose level'
                      />
                    </div>
                  </div>
                  <div className='my-4 flex justify-center'>
                    <div className='w-full'>
                      <label
                        className='text-white text-lg'
                        htmlFor='blood-pressure'
                      >
                        Blood Pressure
                      </label>
                      <input
                        onChange={changeBloodPressure}
                        type='text'
                        id='blood-pressure'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                        placeholder='Enter your blood pressure'
                      />
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className='md:my-4 flex justify-center'>
                    <div className='w-full'>
                      <label
                        className='text-white text-lg'
                        htmlFor='skin-thickness'
                      >
                        Skin Thickness
                      </label>
                      <input
                        onChange={changeSkinThickness}
                        type='text'
                        id='skin-thickness'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                        placeholder='Enter your skin thickness'
                      />
                    </div>
                  </div>
                  <div className='my-4 flex justify-center'>
                    <div className='w-full'>
                      <label className='text-white text-lg' htmlFor='insulin'>
                        Insulin
                      </label>
                      <input
                        onChange={changeInsulin}
                        type='text'
                        id='insulin'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5'
                        placeholder='Enter your insulin level'
                      />
                    </div>
                  </div>
                  <div className='my-4 flex justify-center'>
                    <div className='w-full'>
                      <label className='text-white text-lg' htmlFor='bmi'>
                        BMI
                      </label>
                      <input
                        onChange={changeBmi}
                        type='text'
                        id='bmi'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                        placeholder='Enter your BMI value'
                      />
                    </div>
                  </div>
                  <div className='my-4 flex justify-center'>
                    <div className='w-full'>
                      <label
                        className='text-white text-lg'
                        htmlFor='pedigree-function'
                      >
                        Diabetes Pedigree Function
                      </label>
                      <input
                        onChange={changeDiabetesPedigree}
                        type='text'
                        id='pedigree-function'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                        placeholder='Enter your diabetes pedigree function'
                      />
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
        </>
      )}
    </div>
  );
}

export default Diabetes;
