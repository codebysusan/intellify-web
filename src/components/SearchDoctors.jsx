import React, { useState } from 'react'
import Navbar from './Navbar'
import DoctorCard from './DoctorCard';

function SearchDoctors() {

    const [doctor, setDoctor] = useState("");
    useState(() => {
        document.title = "Search Doctors"
    }, [])

    const changeDoctor = (event) => {
        const newDoctor = event.target.value;
        console.log(event.target.value);
        setDoctor(newDoctor);
    }

    const searchDoctor = (event) => {
        event.preventDefault();
        console.log(doctor);
    }

    return (
        <div>
            <Navbar />
            <div className='flex justify-center mx-3 md:mx-10 my-2 md:my-6'>
                <div className='md:w-1/2'>
                    <form onSubmit={(event) => { searchDoctor(event) }}>
                        <div className="flex justify-center">
                            <input
                                onChange={changeDoctor}
                                type="text"
                                id="search-doctors"
                                className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-2/4 w-2/3 p-2.5"
                                placeholder="Search Doctors"
                                autoFocus
                            />
                            <button type='submit' className="bg-black text-white px-4 py-2 rounded-md mx-3">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='md:my-12 my-12'>

                <DoctorCard name={"Tasnimul Hasan Hasan Tauhid"} hospital={"XYZ Hospital"} />
                <DoctorCard name={"Tasnimul Hasan Tauhid"} hospital={"XYZ Hospital"} />
            </div>


        </div>
    )
}

export default SearchDoctors
