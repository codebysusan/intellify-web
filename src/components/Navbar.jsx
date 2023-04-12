import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();

    const toggleLoginVisibility = () => {
        if (location.pathname === '/signup' || location.pathname === "/") {
            return <button className={`bg-blue-500 hover:bg-blue-700 text-white font-medium text-base py-2 px-4 rounded-md`} >
                Log In
            </button>;
        }
        else {
            return null;
        }
    }

    const toggleSignUpVisibility = () => {
        if (location.pathname === '/login' || location.pathname === "/") {
            return <button className={`bg-slate-50 hover:bg-slate-200 text-black font-medium text-base py-2 px-4 rounded-md mr-8`} >
                Sign Up
            </button>;
        }
        else {
            return null;
        }
    }

    return (
        <div className='flex sm:flex-row justify-between px-8 py-4 items-center '>
            <div className='text-2xl font-semibold'>
                <Link to="/">
                    TAST
                </Link>
            </div>
            <div >
                <Link to="/signup">
                    {
                        toggleSignUpVisibility()
                    }
                </Link>
                <Link to="/login">
                    {
                        toggleLoginVisibility()
                    }
                </Link>
            </div>
        </div>
    )
}

export default Navbar
