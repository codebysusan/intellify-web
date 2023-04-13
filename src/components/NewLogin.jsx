import React from 'react'
import Navbar from './Navbar'
import Illustration from "../assets/illustration1.jpg"
import { Link } from 'react-router-dom'

function NewLogin() {
    return (
        <div className=''>
            <Navbar />
            <div className='flex flex-grow'>
                <div className='w-1/2'>
                    <img className='object-cover w-full height-90' src={Illustration} alt="" />
                </div>
                <div className='w-1/2'>
                    <div className='flex flex-col justify-center items-center h-full'>
                        <form className='w-full' action="">
                            <p className='text-4xl font-semibold text-center text-white'>Login</p>
                            <div className='flex justify-center flex-row w-full mt-8'>
                                <div className='w-1/2 mb-6'>
                                    <label
                                        htmlFor='email'
                                        className='block mb-2 text-lg font-medium text-white'
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type='email'
                                        id='email'
                                        className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                        placeholder='john.doe@gmail.com'
                                        required
                                    />
                                </div>
                            </div>
                            <div className='flex justify-center flex-row w-full'>
                                <div className='w-1/2 mb-6'>
                                    <label
                                        htmlFor='password'
                                        className='block mb-2 text-lg font-medium text-white'
                                    >
                                        Password
                                    </label>
                                    <input
                                        type='password'
                                        id='password'
                                        className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                        placeholder='•••••••••'
                                        required
                                    />
                                </div>
                            </div>
                            <div className='flex justify-center flex-row mt-5'>
                                <div>
                                    <button
                                        type='submit'
                                        className='bg-white hover:bg-slate-200 text-black px-4 py-2 rounded-md'
                                    >
                                        Log In
                                    </button>
                                </div>
                            </div>
                        </form>
                        <p className='text-center mt-5'>
                            Don't have an account ?
                            <Link className='text-white ml-2' to={"/signup"}>
                                Sign Up
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewLogin
