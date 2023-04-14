import React, { useState, useEffect } from "react";

import Navbar from "./Navbar";
import SymptomsCard from "./SymptomsCard";
import jwtDecode from "jwt-decode";

function SymptomSuggestion() {
  useEffect(() => {
    document.title = "MindMed | Symptom Suggestion";
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

  const [symptoms, setSymptoms] = useState("");
  const [symptomsList, setSymptomsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const changeSymptoms = (event) => {
    const newSymptom = event.target.value;
    const newSymptomsList = newSymptom.split(",");
    console.log(newSymptomsList);
    setSymptoms(newSymptom);
  };

  useEffect(() => {
    if (symptoms.length != 0) {
      setSymptomsList(symptoms.split(" "));
    }
  }, [symptoms]);

  const searchSymptoms = (event) => {
    event.preventDefault();
  };

  const getSuggestions = async (e) => {
    e.preventDefault();
    setLoading(true);

    const baseUrl = import.meta.env.VITE_BASE_URL;
    await fetch(`${baseUrl}/symptom`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        symptoms: symptoms,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setData(data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Navbar />
      <div className='flex justify-center mx-3 md:mx-10 my-2 md:my-6'>
        <div className='md:w-1/2'>
          <form
            onSubmit={() => {
              searchSymptoms;
            }}
          >
            <div className='flex justify-center'>
              <input
                onChange={changeSymptoms}
                type='text'
                id='search-doctors'
                className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-2/4 w-2/3 p-2.5'
                placeholder='Enter your symptoms'
                autoFocus
              />
              <button
                onClick={getSuggestions}
                className='bg-black text-white px-4 py-2 rounded-md mx-3'
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='md:my-12 my-12'>
        <div className='flex justify-center'>
          {symptomsList.map((symptom, index) => {
            return (
              <div
                key={index}
                className='mx-3 bg-slate-200 px-4 py-2 my-3 rounded-lg'
              >
                {symptom}
              </div>
            );
          })}
        </div>
        {loading ? (
          <div className='flex justify-center'>
            <div className='mx-3 bg-slate-200 px-4 py-2 my-3 rounded-lg'>
              Loading...
            </div>
          </div>
        ) : (
          ""
        )}
        {data ? (
          <div className='flex justify-center'>
            <div className='mx-3 bg-slate-200 px-4 py-2 my-3 rounded-lg md:max-w-[50%]'>
              {data}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SymptomSuggestion;
