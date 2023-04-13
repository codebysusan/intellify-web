import React, { useState } from "react";
import Navbar from "./Navbar";

function BreastCancerPredicition() {
  const predictionUrl = import.meta.env.VITE_PREDICTION_URL;

  const [textureMean, setTextureMean] = useState();
  const [smoothnessMean, setSmoothnessMean] = useState();
  const [compactnessMean, setCompactnessMean] = useState();
  const [concavePointsMean, setConcavePointsMean] = useState();
  const [symmetryMean, setSymmetryMean] = useState();
  const [fractalDimensionMean, setFractalDimensionMean] = useState();
  const [textureSe, setTextureSe] = useState();
  const [areaSe, setAreaSe] = useState();
  const [smoothnessSe, setSmoothnessSe] = useState();
  const [compactnessSe, setCompactnessSe] = useState();
  const [concavitySe, setConcavitySe] = useState();
  const [concavePointsSe, setConcavePointsSe] = useState();
  const [symmetrySe, setSymmetrySe] = useState();
  const [fractalDimensionSe, setFractalDimensionSe] = useState();
  const [textureWorst, setTextureWorst] = useState();
  const [areaWorst, setAreaWorst] = useState();
  const [smoothnessWorst, setSmoothnessWorst] = useState();
  const [compactnessWorst, setCompactnessWorst] = useState();
  const [concavityWorst, setConcavityWorst] = useState();
  const [concavePointsWorst, setConcavePointsWorst] = useState();
  const [symmetryWorst, setSymmetryWorst] = useState();
  const [fractalDimensionWorst, setFractalDimensionWorst] = useState();

  const [outputMessage, setOutputMessage] = useState("");

  const changeTextureMean = (event) => {
    const newTextureMean = event.target.value;
    setTextureMean(newTextureMean);
  };

  const changeSmoothnessMean = (event) => {
    const newSmoothnessMean = event.target.value;
    setSmoothnessMean(newSmoothnessMean);
  };

  const changeCompactnessMean = (event) => {
    const newCompactnessMean = event.target.value;
    setCompactnessMean(newCompactnessMean);
  };

  const changeConcavePointsMean = (event) => {
    const newConcavePointsMean = event.target.value;
    setConcavePointsMean(newConcavePointsMean);
  };

  const changeSymmetryMean = (event) => {
    const newSymmetryMean = event.target.value;
    setSymmetryMean(newSymmetryMean);
  };

  const changeFractalDimensionMean = (event) => {
    const newFractalDimensionMean = event.target.value;
    setFractalDimensionMean(newFractalDimensionMean);
  };

  const changeTextureSe = (event) => {
    const newTextureSe = event.target.value;
    setTextureSe(newTextureSe);
  };

  const changeAreaSe = (event) => {
    const newAreaSe = event.target.value;
    setAreaSe(newAreaSe);
  };

  const changeSmoothnessSe = (event) => {
    const newSmoothnessSe = event.target.value;
    setSmoothnessSe(newSmoothnessSe);
  };

  const changeCompactnessSe = (event) => {
    const newCompactnessSe = event.target.value;
    setCompactnessSe(newCompactnessSe);
  };

  const changeConcavitySe = (event) => {
    const newConcavitySe = event.target.value;
    setConcavitySe(newConcavitySe);
  };

  const changeConcavePointsSe = (event) => {
    const newConcavePointsSe = event.target.value;
    setConcavePointsSe(newConcavePointsSe);
  };

  const changeSymmetrySe = (event) => {
    const newSymmetrySe = event.target.value;
    setSymmetrySe(newSymmetrySe);
  };

  const changeFractalDimensionSe = (event) => {
    const newFractalDimensionSe = event.target.value;
    setFractalDimensionSe(newFractalDimensionSe);
  };

  const changeTextureWorst = (event) => {
    const newTextureWorst = event.target.value;
    setTextureWorst(newTextureWorst);
  };

  const changeAreaWorst = (event) => {
    const newAreaWorst = event.target.value;
    setAreaWorst(newAreaWorst);
  };

  const changeSmoothnessWorst = (event) => {
    const newSmoothnessWorst = event.target.value;
    setSmoothnessWorst(newSmoothnessWorst);
  };

  const changeCompactnessWorst = (event) => {
    const newCompactnessWorst = event.target.value;
    setCompactnessWorst(newCompactnessWorst);
  };

  const changeConcavityWorst = (event) => {
    const newConcavityWorst = event.target.value;
    setConcavityWorst(newConcavityWorst);
  };

  const changeConcavePointsWorst = (event) => {
    const newConcavePointsWorst = event.target.value;
    setConcavePointsWorst(newConcavePointsWorst);
  };

  const changeSymmetryWorst = (event) => {
    const newSymmetryWorst = event.target.value;
    setSymmetryWorst(newSymmetryWorst);
  };

  const changeFractalDimensionWorst = (event) => {
    const newFractalDimensionWorst = event.target.value;
    setFractalDimensionWorst(newFractalDimensionWorst);
  };

  const checkBreastCancer = async (event) => {
    event.preventDefault();

    await fetch(`${predictionUrl}/breastcancer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // allow cross-origin requests
        "Access-Control-Allow-Origin": "*",

        // allow cookies
        "Access-Control-Allow-Credentials": true,

        // allow headers
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",

        // allow methods

        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",

        // allow credentials
      },
      body: JSON.stringify({
        texture_mean: textureMean,
        smoothness_mean: smoothnessMean,
        compactness_mean: compactnessMean,
        concave_points_mean: concavePointsMean,
        symmetry_mean: symmetryMean,
        fractal_dimension_mean: fractalDimensionMean,
        texture_se: textureSe,
        area_se: areaSe,
        smoothness_se: smoothnessSe,
        compactness_se: compactnessSe,
        concavity_se: concavitySe,
        concave_points_se: concavePointsSe,
        symmetry_se: symmetrySe,
        fractal_dimension_se: fractalDimensionSe,
        texture_worst: textureWorst,
        area_worst: areaWorst,
        smoothness_worst: smoothnessWorst,
        compactness_worst: compactnessWorst,
        concavity_worst: concavityWorst,
        concave_points_worst: concavePointsWorst,
        symmetry_worst: symmetryWorst,
        fractal_dimension_worst: fractalDimensionWorst,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { prediction, yes, no } = data;
        if (prediction == 1) {
          setOutputMessage(
            "You have a high chance of having breast cancer. It is a better idea to consult a doctor"
          );
        } else if (prediction == 0) {
          setOutputMessage("You have a low chance of having breast cancer.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className=''>
      <Navbar />
      <p className='text-center mt-8 text-3xl font-semibold text-white'>Breast Cancer Prediction</p>
      
      <form
        className=""
        onSubmit={(event) => {
          checkBreastCancer(event);
        }}
      >
        <div className='flex justify-center'>
          <div className='flex flex-col justify-center md:gap-x-28 md:flex-row mx-6 md:mx-10 md:my-6 mt-8'>
            <div className=''>
              <div className='my-4 flex justify-center'>
                <div className=''>
                  <label className='text-white text-lg' htmlFor='age'>
                    Texture Mean
                  </label>
                  <input
                    onChange={changeTextureMean}
                    type='text'
                    id='age'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                    placeholder='Enter texture mean'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='age'>
                    Smoothness Mean
                  </label>
                  <input
                    onChange={changeSmoothnessMean}
                    type='text'
                    id='age'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                    placeholder='Enter smoothness mean'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='age'>
                    Compactness Mean
                  </label>
                  <input
                    onChange={changeCompactnessMean}
                    type='text'
                    id='age'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                    placeholder='Enter compactness mean'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div>
                  <label className='text-white text-lg' htmlFor='bmi'>
                    Concave Points Mean
                  </label>
                  <input
                    onChange={changeConcavePointsMean}
                    type='text'
                    id='bmi'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5'
                    placeholder='Enter concave points mean'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div>
                  <label className='text-white text-lg' htmlFor='bmi'>
                    Smoothness se
                  </label>
                  <input
                    onChange={changeSmoothnessSe}
                    type='text'
                    id='bmi'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5'
                    placeholder='Enter smoothness se'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div>
                  <label className='text-white text-lg' htmlFor='bmi'>
                    Concavity se
                  </label>
                  <input
                    onChange={changeConcavitySe}
                    type='text'
                    id='bmi'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5'
                    placeholder='Enter concavity se'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div>
                  <label className='text-white text-lg' htmlFor='bmi'>
                    Symmetry se
                  </label>
                  <input
                    onChange={changeSymmetrySe}
                    type='text'
                    id='bmi'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5'
                    placeholder='Enter symmetry se'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div>
                  <label className='text-white text-lg' htmlFor='bmi'>
                    Texture Worst
                  </label>
                  <input
                    onChange={changeTextureWorst}
                    type='text'
                    id='bmi'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5'
                    placeholder='Enter texture worst'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div>
                  <label className='text-white text-lg' htmlFor='bmi'>
                    Smoothness Worst
                  </label>
                  <input
                    onChange={changeSmoothnessWorst}
                    type='text'
                    id='bmi'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5'
                    placeholder='Enter smoothness worst'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div>
                  <label className='text-white text-lg' htmlFor='bmi'>
                    Concavity Worst
                  </label>
                  <input
                    onChange={changeConcavityWorst}
                    type='text'
                    id='bmi'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5'
                    placeholder='Enter concavity worst'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div>
                  <label className='text-white text-lg' htmlFor='bmi'>
                    Symmetry Worst
                  </label>
                  <input
                    onChange={changeSymmetryWorst}
                    type='text'
                    id='bmi'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5'
                    placeholder='Enter symmetry worst'
                    required
                  />
                </div>
              </div>
            </div>
            <div className=''>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='age'>
                    Symmetry Mean
                  </label>
                  <input
                    onChange={changeSymmetryMean}
                    type='text'
                    id='age'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                    placeholder='Enter Symmetry Mean'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='avgglucoselevel'>
                    Fractal Dimension Mean
                  </label>
                  <input
                    onChange={changeFractalDimensionMean}
                    type='text'
                    id='avgglucoselevel'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5'
                    placeholder='Enter fractional dimension mean'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='age'>
                    Texture se
                  </label>
                  <input
                    onChange={changeTextureSe}
                    type='text'
                    id='age'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                    placeholder='Enter texture se'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='age'>
                    Area se
                  </label>
                  <input
                    onChange={changeAreaSe}
                    type='text'
                    id='age'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                    placeholder='Enter area se'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='age'>
                    Compactness se
                  </label>
                  <input
                    onChange={changeCompactnessSe}
                    type='text'
                    id='age'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                    placeholder='Enter compactness se'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='age'>
                    Concave Points se
                  </label>
                  <input
                    onChange={changeConcavePointsSe}
                    type='text'
                    id='age'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                    placeholder='Enter concave points se'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='age'>
                    Fractal Dimension se
                  </label>
                  <input
                    onChange={changeFractalDimensionSe}
                    type='text'
                    id='age'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                    placeholder='Enter fractal dimension se'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='age'>
                    Area Worst
                  </label>
                  <input
                    onChange={changeAreaWorst}
                    type='text'
                    id='age'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                    placeholder='Enter area worst'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='age'>
                    Compactness Worst
                  </label>
                  <input
                    onChange={changeCompactnessWorst}
                    type='text'
                    id='age'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                    placeholder='Enter compactness worst'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='age'>
                    Concave Points Worst
                  </label>
                  <input
                    onChange={changeConcavePointsWorst}
                    type='text'
                    id='age'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                    placeholder='Enter concave points worst'
                    required
                  />
                </div>
              </div>
              <div className='my-4 flex justify-center'>
                <div className='w-full'>
                  <label className='text-white text-lg' htmlFor='age'>
                    Fractal Dimension Worst
                  </label>
                  <input
                    onChange={changeFractalDimensionWorst}
                    type='text'
                    id='age'
                    className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2'
                    placeholder='Enter fractal dimension worst'
                    required
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
    </div>
  );
}

export default BreastCancerPredicition;
