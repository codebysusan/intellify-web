import React, { useState } from "react";
import Navbar from "./Navbar";
import DataCard from "./DataCard";

const comparisonData = [
  {
    feature_name: "texture_mean",
    formal_name: "Texture Mean",
    min_value: 19.28964851,
    max_value: 39.28,
    standard_value: 4.3,
  },
  {
    feature_name: "smoothness_mean",
    formal_name: "Smoothness Mean",
    min_value: 0.096360281,
    max_value: 0.1634,
    standard_value: 0.014,
  },
  {
    feature_name: "compactness_mean",
    formal_name: "Compactness Mean",
    min_value: 0.104340984,
    max_value: 0.3454,
    standard_value: 0.05,
  },
  {
    feature_name: "concave_points_mean",
    formal_name: "Concave Points Mean",
    min_value: 0.048919146,
    max_value: 0.2012,
    standard_value: 0.03,
  },
  {
    feature_name: "symmetry_mean",
    formal_name: "Symmetry Mean",
    min_value: 0.181161863,
    max_value: 0.304,
    standard_value: 0.02,
  },
  {
    feature_name: "fractal_dimension_mean",
    formal_name: "Fractal Dimension Mean",
    min_value: 0.06279761,
    max_value: 0.09744,
    standard_value: 0.007,
  },
  {
    feature_name: "texture_se",
    formal_name: "Texture Standard Error",
    min_value: 1.216853427,
    max_value: 4.885,
    standard_value: 0.55,
  },
  {
    feature_name: "area_se",
    formal_name: "Area Standard Error",
    min_value: 40.33707909,
    max_value: 542.2,
    standard_value: 45.49,
  },
  {
    feature_name: "smoothness_se",
    formal_name: "Smoothness Standard Error",
    min_value: 0.007040979,
    max_value: 0.03113,
    standard_value: 0.003,
  },
  {
    feature_name: "compactness_se",
    formal_name: "Compactness Standard Error",
    min_value: 0.025478139,
    max_value: 0.1354,
    standard_value: 0.017,
  },
  {
    feature_name: "concavity_se",
    formal_name: "Concavity Standard Error",
    min_value: 0.031893716,
    max_value: 0.396,
    standard_value: 0.03,
  },
  {
    feature_name: "concave_points_se",
    formal_name: "Concave Points Standard Error",
    min_value: 0.011796137,
    max_value: 0.05279,
    standard_value: 0.006,
  },
  {
    feature_name: "symmetry_se",
    formal_name: "Symmetry Standard Error",
    min_value: 0.020542299,
    max_value: 0.07895,
    standard_value: 0.008,
  },
  {
    feature_name: "fractal_dimension_se",
    formal_name: "Fractal Dimension Standard Error",
    min_value: 0.003794904,
    max_value: 0.02984,
    standard_value: 0.002,
  },
  {
    feature_name: "texture_worst",
    formal_name: "Texture Worst",
    min_value: 25.6772232,
    max_value: 49.54,
    standard_value: 6.14,
  },
  {
    feature_name: "area_worst",
    formal_name: "Area Worst",
    min_value: 880.5831283,
    max_value: 4254,
    standard_value: 569.35,
  },
  {
    feature_name: "smoothness_worst",
    formal_name: "Smoothness Worst",
    min_value: 0.132368594,
    max_value: 0.2226,
    standard_value: 0.022,
  },
  {
    feature_name: "compactness_worst",
    formal_name: "Compactness Worst",
    min_value: 0.254265044,
    max_value: 1.058,
    standard_value: 0.157,
  },
  {
    feature_name: "concavity_worst",
    formal_name: "Concavity Worst",
    min_value: 0.272188483,
    max_value: 1.252,
    standard_value: 0.208,
  },
  {
    feature_name: "concave_points_worst",
    formal_name: "Concave Points Worst",
    min_value: 0.114606223,
    max_value: 0.291,
    standard_value: 0.065,
  },
  {
    feature_name: "symmetry_worst",
    formal_name: "Symmetry Worst",
    min_value: 0.290075571,
    max_value: 0.6638,
    standard_value: 0.061,
  },
  {
    feature_name: "fractal_dimension_worst",
    formal_name: "Fractal Dimension Worst",
    min_value: 0.083945817,
    max_value: 0.2075,
    standard_value: 0.018,
  },
];
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
  const [dataCardVisibile, setDataCardVisibile] = useState(false);
  const [prediction, setPrediction] = useState({});

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
        setDataCardVisibile(true);
        const { prediction, yes, no } = data;
        setPrediction({ prediction, yes, no });
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
      {dataCardVisibile ? (
        <DataCard
          data={[
            {
              feature_name: "texture_mean",
              current_value: textureMean,
            },
            {
              feature_name: "smoothness_mean",
              current_value: smoothnessMean,
            },
            {
              feature_name: "compactness_mean",
              current_value: compactnessMean,
            },
            {
              feature_name: "concave_points_mean",
              current_value: concavePointsMean,
            },
            {
              feature_name: "symmetry_mean",
              current_value: symmetryMean,
            },
            {
              feature_name: "fractal_dimension_mean",
              current_value: fractalDimensionMean,
            },
            {
              feature_name: "texture_se",
              current_value: textureSe,
            },
            {
              feature_name: "area_se",
              current_value: areaSe,
            },
            {
              feature_name: "smoothness_se",
              current_value: smoothnessSe,
            },
            {
              feature_name: "compactness_se",
              current_value: compactnessSe,
            },
            {
              feature_name: "concavity_se",
              current_value: concavitySe,
            },
            {
              feature_name: "concave_points_se",
              current_value: concavePointsSe,
            },
            {
              feature_name: "symmetry_se",
              current_value: symmetrySe,
            },
            {
              feature_name: "fractal_dimension_se",
              current_value: fractalDimensionSe,
            },
            {
              feature_name: "texture_worst",
              current_value: textureWorst,
            },
            {
              feature_name: "area_worst",
              current_value: areaWorst,
            },
            {
              feature_name: "smoothness_worst",
              current_value: smoothnessWorst,
            },
            {
              feature_name: "compactness_worst",
              current_value: compactnessWorst,
            },
            {
              feature_name: "concavity_worst",
              current_value: concavityWorst,
            },
            {
              feature_name: "concave_points_worst",
              current_value: concavePointsWorst,
            },
            {
              feature_name: "symmetry_worst",
              current_value: symmetryWorst,
            },
            {
              feature_name: "fractal_dimension_worst",
              current_value: fractalDimensionWorst,
            },
          ]}
          comparisonData={comparisonData}
          prediction={prediction}
          message={outputMessage}
        />
      ) : (
        <>
          <p className='text-center mt-8 text-3xl font-semibold text-white'>
            Breast Cancer Prediction
          </p>

          <form
            className=''
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
                      <label
                        className='text-white text-lg'
                        htmlFor='avgglucoselevel'
                      >
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
        </>
      )}
    </div>
  );
}

export default BreastCancerPredicition;
