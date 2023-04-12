import React from 'react'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const history = useNavigate();

    const navigateHome = () => {
        history("/home");
    }
    return (
        <div className='h-screen'>
            <Navbar />
            <div className="text-black justify-center h-5/6 flex flex-col">
                <form >
                    <div className="flex justify-center flex-row ">
                        <div className="md:w-1/4 w-3/4 mb-6">
                            <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900 ">Email address</label>
                            <input type="email" id="email" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@gmail.com" required />
                        </div>
                    </div>
                    <div className="flex justify-center flex-row">
                        <div className="md:w-1/4 w-3/4">
                            <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900">Password</label>
                            <input type="password" id="password" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
                        </div>
                    </div>
                    <div className="flex justify-center flex-row mt-5">
                        <div>
                            <button type='submit' onClick={navigateHome} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                                Log In
                            </button>
                        </div>
                    </div>
                </form>
                <p className="text-center mt-5">Don't have an account ?
                    <Link className="text-blue-500 ml-2" to={"/signup"}>
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
