import React from 'react'
import Navbar from './components/Navbar';
import Hero from "./assets/medi.png"
import { Link } from 'react-router-dom';
import FeatureSection from './components/FeatureSection';


function App() {
  return (
    <div className='mb-24'>
      <Navbar />
      <div className='flex text-white mb-16'>
        <div className='mt-20 w-1/3 flex justify-end'>
          <div>
            <img width={"500rem"} src={Hero} alt="" />
          </div>
        </div>
        <div className='mt-20 p-12 w-1/2 flex justify-center'>
          <div>
            <p className='md:text-5xl text-center font-bold text-3xl px-10 line-height-1'>
              Changing the way you receive health information through the use of AI
            </p>
            <div className=' mt-20 text-center px-10 text-2xl '>
              Our app is designed to help you keep track of your health information.
              Through the modern use of AI, we are able to provide you with the most
              accurate and up to date information.
            </div>
            <div className='flex justify-center pt-12'>
              <Link to='/signup'>
                <button className='bg-white hover:bg-slate-200 hover:text-black text-black font-medium md:text-2xl md:py-4 md:px-8 md:font-medium text-md py-3 px-6 rounded-md'>
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <FeatureSection />
    </div>
  )
}

export default App
