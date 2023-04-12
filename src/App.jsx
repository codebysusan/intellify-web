import './App.css'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App h-screen">
      <Navbar />
      <div className='h-full light-color text-center' id='herosection'>
        <div className='pt-28 '>
          <p className='md:text-5xl text-dark font-bold text-3xl px-10 md:px-96 md:mt-52 md:leading-normal'>
            Changing the way you receive health information through the use of AI
          </p>
        </div>
        <div className='md:mt-16 text-dark mt-10 px-10 md:px-96 text-xl '>
          Our app is designed to help you keep track of your health information. Through the modern use of AI, we are able to provide you with the most accurate and up to date information.
        </div>
        <div className='flex justify-center pt-12'>
          <Link to="/signup">
            <button className='bg-slate-50 hover:bg-blue-800 hover:text-white font-medium md:text-2xl md:py-4 md:px-8 md:font-medium text-md py-3 px-6 rounded-md' >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default App
