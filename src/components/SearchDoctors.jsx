import React, { useState } from "react";
import Navbar from "./Navbar";
import DoctorCard from "./DoctorCard";
import jwtDecode from "jwt-decode";

const hospitals = [
  {
    name_of_doctor: "Dr. Anjali Desai",
    specialization: "Cardiologist",
    name_of_hospital: "Rajkot Heart Institute",
    address: "Kalavad Road, Rajkot",
    phone: "0281-7654321",
    email: "anjalidesai@rajkotheartinstitute.com",
    city: "Rajkot",
  },
  {
    name_of_doctor: "Dr. Rakesh Patel",
    specialization: "Neurologist",
    name_of_hospital: "Nidhi Hospital",
    address: "Maninagar, Ahmedabad",
    phone: "079-22233344",
    email: "rakeshpatel@nidhihospital.com",
    city: "Ahmedabad",
  },
  {
    name_of_doctor: "Dr. Nisha Shah",
    specialization: "Pediatrician",
    name_of_hospital: "Saroj Hospital",
    address: "Jubilee Baug, Rajkot",
    phone: "0281-2468101",
    email: "nishashah@sarojhospital.com",
    city: "Rajkot",
  },
  {
    name_of_doctor: "Dr. Rajiv Mehta",
    specialization: "Orthopedic Surgeon",
    name_of_hospital: "Mehta Hospital",
    address: "Paldi, Ahmedabad",
    phone: "079-55566677",
    email: "rajivmehta@mehtahospital.com",
    city: "Ahmedabad",
  },
  {
    name_of_doctor: "Dr. Jay Patel",
    specialization: "Gynecologist",
    name_of_hospital: "Adarsh Hospital",
    address: "Bhavnagar Road, Rajkot",
    phone: "0281-6789012",
    email: "jaypatel@adarshhospital.com",
    city: "Rajkot",
  },
  {
    name_of_doctor: "Dr. Shruti Shah",
    specialization: "Dermatologist",
    name_of_hospital: "Aarna Hospital",
    address: "Satellite, Ahmedabad",
    phone: "079-77788899",
    email: "shrutishah@aarnahospital.com",
    city: "Ahmedabad",
  },
  {
    name_of_doctor: "Dr. Sanjeev Gupta",
    specialization: "Ophthalmologist",
    name_of_hospital: "Gupta Hospital",
    address: "University Road, Rajkot",
    phone: "0281-3456789",
    email: "sanjeevgupta@guptahospital.com",
    city: "Rajkot",
  },
  {
    name_of_doctor: "Dr. Hiral Patel",
    specialization: "ENT Specialist",
    name_of_hospital: "Sneh Hospital",
    address: "Naranpura, Ahmedabad",
    phone: "079-44455566",
    email: "hiralpatel@snehhospital.com",
    city: "Ahmedabad",
  },
];

function SearchDoctors() {
  const [doctor, setDoctor] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [city, setCity] = useState("");

  const [filteredDoctors, setFilteredDoctors] = useState([]);
  useState(() => {
    document.title = "MindMed | Search Doctors";
    const token = localStorage.getItem("token");
    if (token == null) {
      history("/login");
    } else {
      const userData = jwtDecode(token);
      console.log(userData.acc_type);
      if (userData.acc_type == "doctor") {
        history("/doctor-home");
      }
    }
  }, []);

  const changeSpecialization = (event) => {
    const newSpecialization = event.target.value;
    console.log(event.target.value);
    setSpecialization(newSpecialization);
  };

  const changeCity = (event) => {
    const newCity = event.target.value;
    console.log(event.target.value);
    setCity(newCity);
  };

  const searchDoctor = (event) => {
    event.preventDefault();

    const filteredDoctors = hospitals.filter((hospital) => {
      return hospital.specialization == specialization && hospital.city == city;
    });

    setFilteredDoctors(filteredDoctors);
  };

  return (
    <div>
      <Navbar />
      <div className='flex justify-center mt-4 '>
        <div className='w-1/2 md:w-1/2 dark-blue p-8 rounded-xl'>
          <form className='w-full'>
            <div className='flex justify-center'>
              <select
                onChange={changeSpecialization}
                defaultValue={"select-one"}
                name='gender'
                id='gender'
                className='border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 w-full focus:border-blue-500 block md:w-2/3 w-2/3 mt-2 py-2.5 px-2'
                required
              >
                <option value={"select-one"} disabled>
                  Select Specialization
                </option>

                {
                  //  return list of specializations from hospitals, remove duplicate
                  hospitals.map((hospital) => {
                    return (
                      <option value={hospital.specialization}>
                        {hospital.specialization}
                      </option>
                    );
                  })
                }
              </select>
            </div>
            <div className='flex justify-center mt-4'>
              <select
                onChange={changeCity}
                defaultValue={"select-one"}
                name='city'
                id='city'
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
            <div className='flex w-full justify-center mt-6'>
              <button
                onClick={searchDoctor}
                className='bg-black md:w-2/3 w-2/3 text-white px-4 py-3 rounded-md mx-3'
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='md:my-12 my-12'>
        {filteredDoctors.length == 0 && (
          <div className='w-full'>
            <div className='flex justify-center w-full my-3'>
              <div className='flex items-center gap-x-8 bg-slate-100 p-4 rounded-lg md:w-1/2 w-1/2 mx-6'>
                <div className=''></div>
                <div className='text-lg '>
                  <p className='text-gray-500'>No Doctors Found</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {filteredDoctors.map((doctor) => {
          return (
            <DoctorCard
              name={doctor.name_of_doctor}
              hospital={doctor.name_of_hospital}
              specialization={doctor.specialization}
              address={doctor.address}
              phone={doctor.phone}
              email={doctor.email}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SearchDoctors;
