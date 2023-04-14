import React, { useState } from 'react'
import Navbar from './Navbar'
import DoctorCard from './DoctorCard';
import jwtDecode from 'jwt-decode';

function SearchDoctors() {

    const [doctor, setDoctor] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [city, setCity] = useState("");
    useState(() => {
        document.title = "MindMed | Search Doctors"
        const token = localStorage.getItem('token');
        if (token == null) {
            history("/login");
        } else {
            const userData = jwtDecode(token);
            console.log(userData.acc_type);
            if (userData.acc_type == "doctor") {
                history("/doctor-home");
            }
        }
    }, [])

    const changeSpecialization = (event) => {
        const newSpecialization = event.target.value;
        console.log(event.target.value);
        setSpecialization(newSpecialization);
    }

    const changeCity = (event) => {
        const newCity = event.target.value;
        console.log(event.target.value);
        setCity(newCity);
    }

    const searchDoctor = (event) => {
        event.preventDefault();
        console.log(specialization, city);
    }

    return (
        <div>
            <Navbar />
            <div className='flex justify-center mt-4 '>
                <div className='w-1/2 md:w-1/2 dark-blue p-8 rounded-xl'>
                    <form className='w-full' onSubmit={(event) => { searchDoctor(event) }}>
                        <div className="flex justify-center">
                            <input
                                onChange={changeSpecialization}
                                type="text"
                                id="search-doctors"
                                className="border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-2/3 w-2/3 p-2.5"
                                placeholder="Search Specialization"
                            />
                        </div>
                        <div className="flex justify-center mt-4">
                            <select
                                onChange={changeCity}
                                defaultValue={"select-one"}
                                name='gender'
                                id='gender'
                                className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 w-full focus:border-blue-500 block md:w-2/3 w-2/3 mt-2 py-2.5 px-2'
                                required
                            >
                                <option value={"select-one"} disabled>
                                    Select City
                                </option>
                                <option value={"Rajkot"}>Rajkot</option>
                                <option value={"Ahmedabad"}>Ahmedabad</option>
                            </select>
                        </div>
                        <div className="flex w-full justify-center mt-6">
                            <button type='submit' className="bg-black md:w-2/3 w-2/3 text-white px-4 py-3 rounded-md mx-3">
                                Search
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='md:my-12 my-12'>

                <DoctorCard name={"Tasnimul Hasan Hasan Tauhid"} hospital={"XYZ Hospital"} />
                {/* <DoctorCard name={"Tasnimul Hasan Tauhid"} hospital={"XYZ Hospital"} /> */}
            </div>


        </div>
    )
}

export default SearchDoctors
