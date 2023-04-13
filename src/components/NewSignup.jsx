import React from 'react'
import Navbar from './Navbar'
import Illustration from "../assets/illustration1.jpg"
import { Link } from 'react-router-dom'

function NewSignup() {
    return (
        <div className=''>
            <Navbar />
            <div className='flex flex-grow'>
                <div className='w-1/2'>
                    <img className='object-cover w-full height-90' src={Illustration} alt="" />
                </div>
                <div className='w-1/2'>
                    <div className='flex flex-col justify-center items-center h-full'>
                        <form className='w-full' >
                            <p className='text-4xl font-semibold text-center text-white'>Sign Up</p>
                            <div className='flex justify-center flex-row w-full mt-8'>
                                <div className='w-1/2 mb-6'>
                                    <label
                                        forhtml='fullname'
                                        className='block mb-2 text-lg font-medium text-white'
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        // onChange={changeFullname}
                                        type='text'
                                        id='fullname'
                                        className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                        placeholder='John Doe'
                                        required
                                    />
                                </div>
                            </div>
                            <div className='flex justify-center flex-row w-full'>
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
                            <div className='flex justify-center flex-row w-full'>
                                <div className='w-1/2 mb-6'>
                                    <label
                                        forhtml='confirmpassword'
                                        className='block mb-2 text-lg font-medium text-white'
                                    >
                                        Confirm Password
                                    </label>
                                    <input
                                        // onChange={changeConfirmPassword}
                                        type='password'
                                        id='confirmpassword'
                                        className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                                        placeholder='•••••••••'
                                        required
                                    />
                                </div>
                            </div>
                            <div className='flex justify-center flex-row w-full'>
                                <div className='w-1/2 mb-6'>
                                    <label className='block mb-2 text-lg font-medium text-white' htmlFor='usertype'>
                                        Usertype
                                    </label>
                                    <select
                                        // onChange={changeUsertype}
                                        defaultValue={"select-one"}
                                        name='usertype'
                                        id='usertype'
                                        className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 w-full focus:border-blue-500 block mt-2 py-2.5 px-2'
                                    >
                                        <option value={"select-one"} disabled>
                                            Select one
                                        </option>
                                        <option value={"user"}>User</option>
                                        <option value={"doctor"}>Doctor</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex justify-center flex-row mt-5'>
                                <div>
                                    <button
                                        type='submit'
                                        className='bg-white hover:bg-slate-100 text-black px-4 py-2 rounded-md'
                                        value='submit'
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </form>
                        <p className='text-center mt-5'>
                            Already have an account ?
                            <Link to='/login' className='text-white ml-2'>
                                Sign In
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewSignup
