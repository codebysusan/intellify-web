import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Illustration from "../assets/illustration1.jpg";

function Signup() {
  useEffect(() => {
    document.title = "MindMed | Signup";
    // const token = localStorage.getItem('token');
    // if (token == null) {
    //     history("/login");
    // }
  }, []);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [usertype, setUsertype] = useState("");
  const [error, setError] = useState(null);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const history = useNavigate();

  const changeFullname = (event) => {
    const newFullname = event.target.value;
    // console.log(newFullname);
    setFullname(newFullname);
  };

  const changeEmail = (event) => {
    const newEmail = event.target.value;
    // console.log(newEmail);
    setEmail(newEmail);
  };

  const changePassword = (event) => {
    const newPassword = event.target.value;
    // console.log(newPassword);
    setPassword(newPassword);
  };

  const changeConfirmPassword = (event) => {
    const newConfirmPassword = event.target.value;
    // console.log(newConfirmPassword);
    setConfirmpassword(newConfirmPassword);
  };

  const changeUsertype = (event) => {
    const newUsertype = event.target.value;
    // console.log(newUsertype);
    setUsertype(newUsertype);
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    console.log(
      `Fullname: ${fullname} \nEmail: ${email} \nPassword: ${password} \nConfirm Password: ${confirmpassword} \nUsertype: ${usertype}`
    );
    console.log(import.meta.env.VITE_BASE_URL);

    await fetch(`${baseUrl}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fullname,
        email: email,
        password: password,
        userType: usertype,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          const token = data.token;
          localStorage.setItem("token", token);
          const user = jwtDecode(token);
          const accountType = user.acc_type;
          if (accountType == "user") {
            history("/new-home");
          } else if (accountType == "doctor") {
            history("/doctor-home");
          }
        } else {
          console.log(data);
          setError("Email already exists !!!");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  const passwordNotMatched = (
    <div className='text-white bg-red-300 w-3/4 md:w-1/4 rounded p-4'>
      <p>Password didn't matched !!!</p>
    </div>
  );

  return (
    <div className=''>
      <Navbar />
      <div className='flex flex-grow'>
        <div className='w-1/2'>
          <img
            className='object-cover w-full height-90'
            src={Illustration}
            alt=''
          />
        </div>
        <div className='w-1/2'>
          <div className='flex flex-col justify-center items-center h-full'>
            <form className='w-full'>
              <p className='text-4xl font-semibold text-center text-white'>
                Sign Up
              </p>
              <div className='flex justify-center flex-row w-full mt-8'>
                <div className='w-1/2 mb-6'>
                  <label
                    forhtml='fullname'
                    className='block mb-2 text-lg font-medium text-white'
                  >
                    Full Name
                  </label>
                  <input
                    value={fullname}
                    onChange={changeFullname}
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
                    value={email}
                    onChange={changeEmail}
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
                    value={password}
                    onChange={changePassword}
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
                    onChange={changeConfirmPassword}
                    value={confirmpassword}
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
                  <label
                    className='block mb-2 text-lg font-medium text-white'
                    htmlFor='usertype'
                  >
                    Usertype
                  </label>
                  <select
                    onChange={changeUsertype}
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
                    onClick={handleSignup}
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
  );
}

export default Signup;
