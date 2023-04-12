import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
    const location = useLocation();

    const history = useNavigate();

    const navigateSignup = () => {
        history("/signup");
    }

    const navigateLogin = () => {
        history("/login");
    }

    const toggleLoginVisibility = () => {
        if (location.pathname === '/signup' || location.pathname === "/") {
            return <button onClick={navigateLogin} className={`bg-blue-500 hover:bg-blue-700 text-white font-medium text-base py-2 px-4 rounded-md md:mr-8`} >
                Log In
            </button>;
        }
        else {
            return null;
        }
    }

    const toggleSignUpVisibility = () => {
        if (location.pathname === '/login' || location.pathname === "/") {
            return <button onClick={navigateSignup} className={`bg-slate-50 hover:bg-slate-200 text-black font-medium text-base py-2 px-4 rounded-md mr-8`} >
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
                {
                    toggleSignUpVisibility()
                }
                {
                    toggleLoginVisibility()
                }

            </div>
        </div>
    )
}

export default Navbar
