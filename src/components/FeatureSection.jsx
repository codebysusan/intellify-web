import React from 'react'
import HeartattackImg from "../assets/heart_disease.png";
import StrokeImg from "../assets/stroke.png";
import BreastCancerImg from "../assets/breastcancer.png";
import DiabetesImg from "../assets/diabetes.png"
import SuggestionImg from "../assets/suggestion.png"
import Doctor from '../assets/doctor.png'

function FeatureSection() {

    const stroke = (
        <div className="w-1/3">
            <div className='flex flex-row gap-x-6 items-center '>
                <div className='rounded-md'>
                    <img className='bg-white p-2 rounded-xl' src={StrokeImg} width={"60rem"} alt="" />
                </div>
                <div>
                    <p className='text-3xl font-bold text-white'>Stroke</p>
                </div>
            </div>
            <div className='px-20 pt-2 text-white '>
                <p>
                    Predict strokes before they strike: Our cutting-edge model keeps you informed and protected. It helps to proactively identify individuals at risk, empowering healthcare providers with valuable insights for timely interventions.
                </p>
                <p>
                    Symptoms :
                </p>
                <ul className='list-disc pl-4'>
                    <li>Sudden numbness or weakness in the face, arm, or leg, especially on one side of the body.</li>
                    <li>Sudden confusion, trouble speaking, or difficulty understanding speech.</li>
                    <li>Sudden trouble seeing in one or both eyes.</li>
                    <li>Sudden trouble walking, dizziness, or loss of balance or coordination.</li>
                    <li>Sudden severe headache with no known cause.</li>
                </ul>
            </div>
        </div>
    );

    const diabetes = (
        <div className="w-1/3">
            <div className='flex flex-row gap-x-6 items-center '>
                <div className='rounded-md'>
                    <img className='bg-white p-2 rounded-xl' src={DiabetesImg} width={"60rem"} alt="" />
                </div>
                <div>
                    <p className='text-3xl font-bold text-white'>Diabetes</p>
                </div>
            </div>
            <div className='px-20 pt-2 text-white'>
                <p>
                    Introducing our cutting-edge diabetes prediction model: accurate, efficient, and tailored to individual risk factors, providing proactive healthcare for improved patient outcomes.
                </p>
                <p>
                    Symptoms :
                </p>
                Increased thirst
                Frequent urination
                Extreme hunger
                Unexplained weight loss
                Blurred vision
                <ul className='list-disc pl-4'>
                    <li>Increased thirst</li>
                    <li>Frequent urination</li>
                    <li>Extreme hunger</li>
                    <li>Unexplained weight loss</li>
                    <li>Blurred vision</li>
                </ul>
            </div>
        </div>
    );

    const heartAttack = (
        <div className="w-1/3">
            <div className='flex flex-row gap-x-6 items-center '>
                <div className='rounded-md'>
                    <img className='bg-white p-2 rounded-xl' src={HeartattackImg} width={"60rem"} alt="" />
                </div>
                <div>
                    <p className='text-3xl font-bold text-white'>Heart Attack</p>
                </div>
            </div>
            <div className='px-20 pt-2 text-white'>
                <p>
                    Our advanced heart attack prediction model leverages analytics and personalized risk assessments to proactively identify individuals at risk of cardiovascular events, empowering healthcare providers with valuable insights for early interventions.
                </p>
                <p>
                    Symptoms :
                </p>
                <ul className='list-disc pl-4'>
                    <li>Pounding or racing heart (palpitations)</li>
                    <li>Chest pain</li>
                    <li>Sweating</li>
                    <li>Lightheadedness</li>
                    <li>Shortness of breath</li>
                </ul>
            </div>
        </div>
    );

    const breastCancer = (
        <div className="w-1/3">
            <div className='flex flex-row gap-x-6 items-center '>
                <div className='rounded-md'>
                    <img className='bg-white p-2 rounded-xl' src={BreastCancerImg} width={"60rem"} alt="" />
                </div>
                <div>
                    <p className='text-3xl font-bold text-white'>Breast Cancer</p>
                </div>
            </div>
            <div className='px-20 pt-2 text-white '>
                <p>
                    Introducing our cutting-edge diabetes prediction model: accurate, efficient, and tailored to individual risk factors, providing proactive healthcare for improved patient outcomes.
                </p>
                <p>
                    Symptoms :
                </p>
                <ul className='list-disc pl-4'>
                    <li>Pulling in of the nipple or pain in the nipple area</li>
                    <li>New lump in the breast or underarm (armpit)</li>
                    <li>Thickening or swelling of part of the breast.</li>
                    <li>Irritation or dimpling of breast skin</li>
                    <li>Redness or flaky skin in the nipple area or the breast</li>
                    <li>Pulling in of the nipple or pain in the nipple area</li>
                </ul>
            </div>
        </div>
    );

    const symptomsBasedSuggestions = (
        <div className="w-1/3">
            <div className='flex flex-row gap-x-6 items-center '>
                <div className='rounded-md'>
                    <img className='bg-white p-2 rounded-xl' src={SuggestionImg} width={"60rem"} alt="" />
                </div>
                <div>
                    <p className='text-3xl font-bold text-white'>Symptoms Based Suggestion</p>
                </div>
            </div>
            <div className='px-20 pt-2 text-white'>
                <p>
                    Symptom-Driven Suggestion is an AI-based system that provides tailored recommendations for symptoms. It's not 100% accurate and should not replace medical advice. Consulting with a medical professional is still necessary for an accurate diagnosis and treatment plan.
                </p>
            </div>
        </div>
    );

    const findDoctor = (
        <div className="w-1/3">
            <div className='flex flex-row gap-x-6 items-center '>
                <div className='rounded-md'>
                    <img className='bg-white p-2 rounded-xl' src={Doctor} width={"60rem"} alt="" />
                </div>
                <div>
                    <p className='text-3xl font-bold text-white'>Find Doctor</p>
                </div>
            </div>
            <div className='px-20 pt-2 text-white'>
                <p>
                    Finding the right doctor is important for good health.
                    Find your ideal doctor in seconds! Our search tool makes it easy to connect with top-rated healthcare professionals. Start your search for the perfect doctor here!
                </p>
            </div>
        </div>
    );

    return (
        <div>
            <div className='text-white flex justify-center border-t-4 mt-12'>
                <div className='mt-12'>
                    <p className='text-5xl font-bold'>Features</p>
                </div>
            </div>
            <div className='ml-24 mt-24 flex'>
                {
                    stroke
                }
                {
                    diabetes
                }
                {
                    heartAttack
                }
            </div>
            <div className='ml-24 mt-24 flex'>
                {
                    breastCancer
                }
                {
                    symptomsBasedSuggestions
                }
                {
                    findDoctor
                }

            </div>
        </div>
    )
}

export default FeatureSection
