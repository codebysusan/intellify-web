import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import jwtDecode from 'jwt-decode';
import axios from 'axios';

function Heartattack() {

  useEffect(() => {
    document.title = "MindMed | Heart Attack Prediction"
    const token = localStorage.getItem('token');
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


  const changeAge = (event) => {
    const newAge = event.target.value;
    console.log(newAge);
    setAge(newAge);
  }


  const changeGender = (event) => {
    const newGender = event.target.value;
    console.log(newGender);
    setGender(newGender);
  }


  const changeCp = (event) => {
    const newCp = event.target.value;
    console.log(newCp);
    setCp(newCp);
  }

  const changeTrestbps = (event) => {
    const newTrestbps = event.target.value;
    console.log(newTrestbps);
    setTrestbps(newTrestbps);
  }


  const changeChol = (event) => {
    const newChol = event.target.value;
    console.log(newChol);
    setChol(newChol);
  }

  const changeSlope = (event) => {
    const newSlope = event.target.value;
    console.log(newSlope);
    setSlope(newSlope);
  }

  const changeFbs = (event) => {
    const newFbs = event.target.value;
    console.log(newFbs);
    setFbs(newFbs);
  }

  const changeRestecg = (event) => {
    const newRestecg = event.target.value;
    console.log(newRestecg);
    setRestecg(newRestecg);
  }

  const changeThalach = (event) => {
    const newThalach = event.target.value;
    console.log(newThalach);
    setThalach(newThalach);
  }

  const changeExang = (event) => {
    const newExang = event.target.value;
    console.log(newExang);
    setExang(newExang);
  }

  const changeOldpeak = (event) => {
    const newOldpeak = event.target.value;
    console.log(newOldpeak);
    setOldpeak(newOldpeak);
  }

  const changeCa = (event) => {
    const newCa = event.target.value;
    console.log(newCa);
    setCa(newCa);
  }

  const changeThal = (event) => {
    const newThal = event.target.value;
    console.log(newThal);
    setThal(newThal);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(` Age: ${age} \n Gender: ${gender} \n cp: ${cp} \n trestbps: ${trestbps} \n chol: ${chol} \n slope: ${slope} \n fbs: ${fbs} \n restecg: ${restecg} \n thalach: ${thalach} \n exang: ${exang} \n oldpeak: ${oldpeak} \n ca: ${ca}`);

    axios
      .post(`${predictionUrl}/heartattack`, {
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
        thal: thal
      })
      .then((response) => {
        console.log(response.data);
        const output = response.data.prediction;
        if (output == 1) {
          setOutputMessage("You have a high chance of getting a heart attack. It is a better idea to consult a doctor")
        } else if (output == 0) {
          setOutputMessage("You have a low chance of getting a heart attack");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <div className=''>
      <Navbar />
      <p className='text-center mt-8 text-3xl'>Heart Attack Predicition</p>
      <form onSubmit={(event) => { handleSubmit(event) }}>
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
                  <label className='' htmlFor="gender">Gender</label>
                  <select
                    onChange={changeGender}
                    defaultValue={'select-one'}
                    name="gender"
                    id="gender"
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 w-full focus:border-blue-500 block mt-2 py-2.5 px-2'
                    required
                  >
                    <option value={"select-one"} disabled>Select one</option>
                    <option value={"1"}>Male</option>
                    <option value={"0"}>Female</option>
                  </select>
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='' htmlFor="cp">cp</label>
                  <input
                    onChange={changeCp}
                    type="text"
                    id="cp"
                    className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                    placeholder="Enter cp value"
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='' htmlFor="trestbps">trestbps</label>
                  <input
                    onChange={changeTrestbps}
                    type="text"
                    id="trestbps"
                    className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                    placeholder="Enter trestbps value"
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div>
                  <label className='' htmlFor="chol">chol</label>
                  <input
                    onChange={changeChol}
                    type="text"
                    id="chol"
                    className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                    placeholder="Enter chol value"
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div>
                  <label className='' htmlFor="slope">slope</label>
                  <input
                    onChange={changeSlope}
                    type="text"
                    id="slope"
                    className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                    placeholder="Enter slope value"

                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div>
                  <label className='' htmlFor="thal">thal</label>
                  <input
                    onChange={changeThal}
                    type="text"
                    id="thal"
                    className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                    placeholder="Enter thal value"

                  />
                </div>
              </div>
            </div>
            <div className=''>
              <div className='md:my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='' htmlFor="fbs">fbs</label>
                  <input
                    onChange={changeFbs}
                    type="text"
                    id="fbs"
                    className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                    placeholder="Enter fbs value"

                  />
                </div>

              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='' htmlFor="restecg">restecg</label>
                  <input
                    onChange={changeRestecg}
                    type="text"
                    id="restecg"
                    className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                    placeholder="Enter restecg value"
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='' htmlFor="thalach">thalach</label>
                  <input
                    onChange={changeThalach}
                    type="text"
                    id="thalach"
                    className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                    placeholder="Enter thalach value"
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='' htmlFor="exang">exang</label>
                  <input
                    onChange={changeExang}
                    type="text"
                    id="exang"
                    className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                    placeholder="Enter exang value"
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div>
                  <label className='' htmlFor="oldpeak">oldpeak</label>
                  <input
                    onChange={changeOldpeak}
                    type="text"
                    id="oldpeak"
                    className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                    placeholder="Enter oldpeak value"
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div>
                  <label className='' htmlFor="ca">ca</label>
                  <input
                    onChange={changeCa}
                    type="text"
                    id="ca"
                    className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                    placeholder="Enter ca value"
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
      <div>
        <p className='text-center text-2xl'>
          {outputMessage}
        </p>
      </div>
    </div>
  )
}

export default Heartattack;
