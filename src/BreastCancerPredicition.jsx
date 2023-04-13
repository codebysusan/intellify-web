import React from 'react'
import Navbar from './components/Navbar'

function BreastCancerPredicition() {



    const [textureMean, setTextureMean] = useState("");
    const [smoothnessMean, setSmoothnessMean] = useState("");
    const [compactnessMean, setCompactnessMean] = useState("");
    const [concavePointsMean, setConcavePointsMean] = useState("");
    const [symmetryMean, setSymmetryMean] = useState("");
    const [fractalDimensionMean, setFractalDimensionMean] = useState("");
    const [textureSe, setTextureSe] = useState("");
    const [areaSe, setAreaSe] = useState("");
    const [smoothnessSe, setSmoothnessSe] = useState("");
    const [compactnessSe, setCompactnessSe] = useState("");
    const [concavitySe, setConcavitySe] = useState("");
    const [concavePointsSe, setConcavePointsSe] = useState("");
    const [symmetrySe, setSymmetrySe] = useState("");
    const [fractalDimensionSe, setFractalDimensionSe] = useState("");
    const [textureWorst, setTextureWorst] = useState("");
    const [areaWorst, setAreaWorst] = useState("");
    const [smoothnessWorst, setSmoothnessWorst] = useState("");
    const [compactnessWorst, setCompactnessWorst] = useState("");
    const [concavityWorst, setConcavityWorst] = useState("");
    const [concavePointsWorst, setConcavePointsWorst] = useState("");
    const [symmetryWorst, setSymmetryWorst] = useState("");
    const [fractalDimensionWorst, setFractalDimensionWorst] = useState("");
    
    return (
        <div className=''>
            <Navbar />
            <p className='text-center mt-8 text-3xl'>Stroke Prediction</p>
            <form onSubmit={(event) => { }}>
                <div className='flex justify-center'>
                    <div className='flex flex-col justify-center md:gap-x-28 md:flex-row mx-6 md:mx-10 md:my-6 mt-8'>
                        <div className=''>
                            <div className='my-4 flex justify-center'>
                                <div className=''>
                                    <label className='' htmlFor="age">Texture Mean</label>
                                    <input
                                        type="text"
                                        id="age"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter texture mean"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="age">Smoothness Mean</label>
                                    <input
                                        type="text"
                                        id="age"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter smoothness mean"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="age">Compactness Mean</label>
                                    <input
                                        type="text"
                                        id="age"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter compactness mean"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div>
                                    <label className='' htmlFor="bmi">Concave Points Mean</label>
                                    <input
                                        // onChange={changeBmi}
                                        type="text"
                                        id="bmi"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5"
                                        placeholder="Enter concave points mean"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div>
                                    <label className='' htmlFor="bmi">Smoothness se</label>
                                    <input
                                        type="text"
                                        id="bmi"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5"
                                        placeholder="Enter smoothness se"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div>
                                    <label className='' htmlFor="bmi">Concavity se</label>
                                    <input
                                        type="text"
                                        id="bmi"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5"
                                        placeholder="Enter concavity se"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div>
                                    <label className='' htmlFor="bmi">Symmetry se</label>
                                    <input
                                        type="text"
                                        id="bmi"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5"
                                        placeholder="Enter symmetry se"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div>
                                    <label className='' htmlFor="bmi">Texture Worst</label>
                                    <input
                                        type="text"
                                        id="bmi"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5"
                                        placeholder="Enter texture worst"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div>
                                    <label className='' htmlFor="bmi">Smoothness Worst</label>
                                    <input
                                        type="text"
                                        id="bmi"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5"
                                        placeholder="Enter smoothness worst"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div>
                                    <label className='' htmlFor="bmi">Concavity Worst</label>
                                    <input
                                        type="text"
                                        id="bmi"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5"
                                        placeholder="Enter concavity worst"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div>
                                    <label className='' htmlFor="bmi">Symmetry Worst</label>
                                    <input
                                        type="text"
                                        id="bmi"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5"
                                        placeholder="Enter symmetry worst"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="age">Symmetry Mean</label>
                                    <input
                                        type="text"
                                        id="age"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter Symmetry Mean"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="avgglucoselevel">Fractal Dimension Mean</label>
                                    <input
                                        type="text"
                                        id="avgglucoselevel"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-2 p-2.5"
                                        placeholder="Enter fractional dimension mean"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="age">Texture se</label>
                                    <input
                                        type="text"
                                        id="age"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter texture se"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="age">Area se</label>
                                    <input
                                        type="text"
                                        id="age"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter area se"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="age">Compactness se</label>
                                    <input
                                        type="text"
                                        id="age"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter compactness se"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="age">Concave Points se</label>
                                    <input
                                        type="text"
                                        id="age"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter concave points se"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="age">Fractal Dimension se</label>
                                    <input
                                        type="text"
                                        id="age"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter fractal dimension se"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="age">Area Worst</label>
                                    <input
                                        type="text"
                                        id="age"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter area worst"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="age">Compactness Worst</label>
                                    <input
                                        type="text"
                                        id="age"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter compactness worst"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="age">Concave Points Worst</label>
                                    <input
                                        type="text"
                                        id="age"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter concave points worst"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='my-4 flex justify-center'>
                                <div className='w-full'>
                                    <label className='' htmlFor="age">Fractal Dimension Worst</label>
                                    <input
                                        type="text"
                                        id="age"
                                        className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
                                        placeholder="Enter fractal dimension worst"
                                        required
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
                {/* <p className='text-center text-2xl'>
                    {outputMessage}
                </p> */}
            </div>
        </div>
    )
}

export default BreastCancerPredicition
