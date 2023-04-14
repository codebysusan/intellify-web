import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import jwtDecode from "jwt-decode";
import DataCard from "./DataCard";

const comparisonData = [
  {
    feature_name: "age",
    formal_name: "Age",
    min_value: 54.36,
    max_value: 77,
    standard_value: 9.08,
  },
  {
    feature_name: "sex",
    formal_name: "Sex",
    min_value: 0.68,
    max_value: 1,
    standard_value: 0.47,
  },
  {
    feature_name: "cp",
    formal_name: "Chest Pain Type",
    min_value: 0.97,
    max_value: 3,
    standard_value: 1.03,
  },
  {
    feature_name: "trestbps",
    formal_name: "Blood Pressure",
    min_value: 131.62,
    max_value: 200,
    standard_value: 17.54,
  },
  {
    feature_name: "chol",
    formal_name: "Serum Cholesterol",
    min_value: 246.26,
    max_value: 564,
    standard_value: 51.83,
  },
  {
    feature_name: "fbs",
    formal_name: "Blood Sugar",
    min_value: 0.15,
    max_value: 1,
    standard_value: 0.36,
  },
  {
    feature_name: "restecg",
    formal_name: "Resting Electrocardiograph Result",
    min_value: 0.53,
    max_value: 2,
    standard_value: 0.53,
  },
  {
    feature_name: "thalach",
    formal_name: "Maximum Heart Rate Achived",
    min_value: 149.65,
    max_value: 202,
    standard_value: 22.91,
  },
  {
    feature_name: "exang",
    formal_name: "Exercise Induced Angina",
    min_value: 0.33,
    max_value: 1,
    standard_value: 0.47,
  },
  {
    feature_name: "oldpeak",
    formal_name: "St Depression Induced By exercise Relative To Rest",
    min_value: 1.04,
    max_value: 6.2,
    standard_value: 1.16,
  },
  {
    feature_name: "slope",
    formal_name: "The slope Of The Peak Exercise St Segment",
    min_value: 1.4,
    max_value: 2,
    standard_value: 0.62,
  },
  {
    feature_name: "ca",
    formal_name: "Number Of Major Vessels",
    min_value: 0.73,
    max_value: 4,
    standard_value: 1.02,
  },
  {
    feature_name: "thal",
    formal_name: "Thalach",
    min_value: 2.31,
    max_value: 3,
    standard_value: 0.61,
  },
];

function Heartattack() {
  useEffect(() => {
    document.title = "MindMed | Heart Attack Prediction";
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
  const [gender, setGender] = useState("");
  const [cp, setCp] = useState("");
  const [trestbps, setTrestbps] = useState("");
  const [chol, setChol] = useState("");
  const [slope, setSlope] = useState("");
  const [fbs, setFbs] = useState("");
  const [restecg, setRestecg] = useState("");
  const [thalach, setThalach] = useState("");
  const [exang, setExang] = useState("");
  const [oldpeak, setOldpeak] = useState("");
  const [ca, setCa] = useState("");
  const [thal, setThal] = useState("");
  const [outputMessage, setOutputMessage] = useState("");
  const [dataCardVisibile, setDataCardVisibile] = useState(false);
  const [prediction, setPrediction] = useState({});

  const changeAge = (event) => {
    const newAge = event.target.value;
    console.log(newAge);
    setAge(newAge);
  };

  const changeGender = (event) => {
    const newGender = event.target.value;
    console.log(newGender);
    setGender(newGender);
  };

  const changeCp = (event) => {
    const newCp = event.target.value;
    console.log(newCp);
    setCp(newCp);
  };

  const changeTrestbps = (event) => {
    const newTrestbps = event.target.value;
    console.log(newTrestbps);
    setTrestbps(newTrestbps);
  };

  const changeChol = (event) => {
    const newChol = event.target.value;
    console.log(newChol);
    setChol(newChol);
  };

  const changeSlope = (event) => {
    const newSlope = event.target.value;
    console.log(newSlope);
    setSlope(newSlope);
  };

  const changeFbs = (event) => {
    const newFbs = event.target.value;
    console.log(newFbs);
    setFbs(newFbs);
  };

  const changeRestecg = (event) => {
    const newRestecg = event.target.value;
    console.log(newRestecg);
    setRestecg(newRestecg);
  };

  const changeThalach = (event) => {
    const newThalach = event.target.value;
    console.log(newThalach);
    setThalach(newThalach);
  };

  const changeExang = (event) => {
    const newExang = event.target.value;
    console.log(newExang);
    setExang(newExang);
  };

  const changeOldpeak = (event) => {
    const newOldpeak = event.target.value;
    console.log(newOldpeak);
    setOldpeak(newOldpeak);
  };

  const changeCa = (event) => {
    const newCa = event.target.value;
    console.log(newCa);
    setCa(newCa);
  };

  const changeThal = (event) => {
    const newThal = event.target.value;
    console.log(newThal);
    setThal(newThal);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(
      ` Age: ${age} \n Gender: ${gender} \n cp: ${cp} \n trestbps: ${trestbps} \n chol: ${chol} \n slope: ${slope} \n fbs: ${fbs} \n restecg: ${restecg} \n thalach: ${thalach} \n exang: ${exang} \n oldpeak: ${oldpeak} \n ca: ${ca}`
    );

    await fetch(`${predictionUrl}/heartattack`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        age: age,
        sex: gender,
        cp: cp,
        trestbps: trestbps,
        chol: chol,
        fbs: fbs,
        restecg: restecg,
        thalach: thalach,
        exang: exang,
        oldpeak: oldpeak,
        slope: slope,
        ca: ca,
        thal: thal,
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
            "You have a high chance of getting a heart attack. It is a better idea to consult a doctor"
          );
        } else if (prediction == 0) {
          setOutputMessage("You have a low chance of getting a heart attack");
        }
      })
      .catch((err) => {
        console.log(err);
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
              feature_name: "sex",
              current_value: gender,
            },
            {
              feature_name: "cp",
              current_value: cp,
            },
            {
              feature_name: "trestbps",
              current_value: trestbps,
            },
            {
              feature_name: "chol",
              current_value: chol,
            },
            {
              feature_name: "slope",
              current_value: slope,
            },
            {
              feature_name: "fbs",
              current_value: fbs,
            },
            {
              feature_name: "restecg",
              current_value: restecg,
            },
            {
              feature_name: "thalach",
              current_value: thalach,
            },
            {
              feature_name: "exang",
              current_value: exang,
            },
            {
              feature_name: "oldpeak",
              current_value: oldpeak,
            },
            {
              feature_name: "ca",
              current_value: ca,
            },
            {
              feature_name: "thal",
              current_value: thal,
            },
          ]}
          comparisonData={comparisonData}
          prediction={prediction}
          message={outputMessage}
        />
      ) : (
        <>
          <p className='text-center mt-8 text-3xl font-semibold text-white'>
            Heart Attack Predicition
          </p>
          <form
            onSubmit={(event) => {
              handleSubmit(event);
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
                      <label className='text-white text-lg' htmlFor='gender'>
                        Gender
                      </label>
                      <select
                        onChange={changeGender}
                        defaultValue={"select-one"}
                        name='gender'
                        id='gender'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 w-full focus:border-blue-500 block mt-2 py-2.5 px-2'
                        required
                      >
                        <option value={"select-one"} disabled>
                          Select one
                        </option>
                        <option value={"1"}>Male</option>
                        <option value={"0"}>Female</option>
                      </select>
                    </div>
                  </div>
                  <div className='my-4 flex justify-center'>
                    <div className='w-full'>
                      <label className='text-white text-lg' htmlFor='cp'>
                        cp
                      </label>
                      <input
                        onChange={changeCp}
                        type='text'
                        id='cp'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                        placeholder='Enter cp value'
                      />
                    </div>
                  </div>
                  <div className='my-4 flex justify-center'>
                    <div className='w-full'>
                      <label className='text-white text-lg' htmlFor='trestbps'>
                        trestbps
                      </label>
                      <input
                        onChange={changeTrestbps}
                        type='text'
                        id='trestbps'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                        placeholder='Enter trestbps value'
                      />
                    </div>
                  </div>
                  <div className='my-4 flex justify-center'>
                    <div>
                      <label className='text-white text-lg' htmlFor='chol'>
                        chol
                      </label>
                      <input
                        onChange={changeChol}
                        type='text'
                        id='chol'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                        placeholder='Enter chol value'
                      />
                    </div>
                  </div>
                  <div className='my-4 flex justify-center'>
                    <div>
                      <label className='text-white text-lg' htmlFor='slope'>
                        slope
                      </label>
                      <input
                        onChange={changeSlope}
                        type='text'
                        id='slope'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                        placeholder='Enter slope value'
                      />
                    </div>
                  </div>
                  <div className='my-4 flex justify-center'>
                    <div>
                      <label className='text-white text-lg' htmlFor='thal'>
                        thal
                      </label>
                      <input
                        onChange={changeThal}
                        type='text'
                        id='thal'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                        placeholder='Enter thal value'
                      />
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className='md:my-4 flex justify-center'>
                    <div className='w-full'>
                      <label className='text-white text-lg' htmlFor='fbs'>
                        fbs
                      </label>
                      <input
                        onChange={changeFbs}
                        type='text'
                        id='fbs'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                        placeholder='Enter fbs value'
                      />
                    </div>
                  </div>
                  <div className='my-4 flex justify-center'>
                    <div className='w-full'>
                      <label className='text-white text-lg' htmlFor='restecg'>
                        restecg
                      </label>
                      <input
                        onChange={changeRestecg}
                        type='text'
                        id='restecg'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                        placeholder='Enter restecg value'
                      />
                    </div>
                  </div>
                  <div className='my-4 flex justify-center'>
                    <div className='w-full'>
                      <label className='text-white text-lg' htmlFor='thalach'>
                        thalach
                      </label>
                      <input
                        onChange={changeThalach}
                        type='text'
                        id='thalach'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                        placeholder='Enter thalach value'
                      />
                    </div>
                  </div>
                  <div className='my-4 flex justify-center'>
                    <div className='w-full'>
                      <label className='text-white text-lg' htmlFor='exang'>
                        exang
                      </label>
                      <input
                        onChange={changeExang}
                        type='text'
                        id='exang'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                        placeholder='Enter exang value'
                      />
                    </div>
                  </div>
                  <div className='my-4 flex justify-center'>
                    <div>
                      <label className='text-white text-lg' htmlFor='oldpeak'>
                        oldpeak
                      </label>
                      <input
                        onChange={changeOldpeak}
                        type='text'
                        id='oldpeak'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                        placeholder='Enter oldpeak value'
                      />
                    </div>
                  </div>
                  <div className='my-4 flex justify-center'>
                    <div>
                      <label className='text-white text-lg' htmlFor='ca'>
                        ca
                      </label>
                      <input
                        onChange={changeCa}
                        type='text'
                        id='ca'
                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                        placeholder='Enter ca value'
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

export default Heartattack;
