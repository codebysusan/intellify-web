import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function Signup() {

    return (
        <div className='h-screen'>
            <Navbar />
            <div className="text-black justify-center h-5/6 flex flex-col">
                <form >
                    <div className="flex justify-center flex-row ">
                        <div className="md:w-1/4 mb-6 w-3/4">
                            <label forhtml="fullname" className="block mb-2 text-lg font-medium text-gray-900 ">Full Name</label>
                            <input type="text" id="fullname" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Doe" required />
                        </div>
                    </div>
                    <div className="flex justify-center flex-row ">
                        <div className="md:w-1/4 mb-6 w-3/4">
                            <label forhtml="fullname" className="block mb-2 text-lg font-medium text-gray-900 ">Email address</label>
                            <input type="email" id="email" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@gmail.com" required />
                        </div>
                    </div>
                    <div className="flex justify-center flex-row">
                        <div className="md:w-1/4 mb-6 w-3/4">
                            <label forhtml="password" className="block mb-2 text-lg font-medium text-gray-900">Password</label>
                            <input type="password" id="password" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
                        </div>
                    </div>
                    <div className="flex justify-center flex-row">
                        <div className="md:w-1/4 w-3/4">
                            <label forhtml="confirmpassword" className="block mb-2 text-lg font-medium text-gray-900">Confirm Password</label>
                            <input type="password" id="confirmpassword" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
                            <p className='mt-4 text-red-500' id='alertmsg'></p>
                        </div>
                    </div>
                    <div className="flex justify-center flex-row mt-5">
                        <div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md" value="submit">Sign Up</button>
                        </div>
                    </div>
                </form>
                <p className="text-center mt-5">Already have an account ?
                    <Link to="/login" className="text-blue-500 ml-2">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Signup
