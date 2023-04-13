import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

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
    // console.log(`Fullname: ${fullname} \nEmail: ${email} \nPassword: ${password} \nConfirm Password: ${confirmpassword} \nUsertype: ${usertype}`);
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
            history("/home");
          } else if (accountType == "doctor") {
            history("/doctor-home");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const passwordNotMatched = (
    <div className='text-white bg-red-300 w-3/4 md:w-1/4 rounded p-4'>
      <p>Password didn't matched !!!</p>
    </div>
  );

  return (
    <div className='h-screen'>
      <Navbar />
      <div className='text-black justify-center h-5/6 flex flex-col'>
        <form onSubmit={handleSignup}>
          <div className='flex justify-center flex-row '>
            <div className='md:w-1/4 mb-6 w-3/4'>
              <label
                forhtml='fullname'
                className='block mb-2 text-lg font-medium text-gray-900 '
              >
                Full Name
              </label>
              <input
                onChange={changeFullname}
                type='text'
                id='fullname'
                className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='John Doe'
                required
              />
            </div>
          </div>
          <div className='flex justify-center flex-row '>
            <div className='md:w-1/4 mb-6 w-3/4'>
              <label
                forhtml='fullname'
                className='block mb-2 text-lg font-medium text-gray-900 '
              >
                Email address
              </label>
              <input
                onChange={changeEmail}
                type='email'
                id='email'
                className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='john.doe@gmail.com'
                required
              />
            </div>
          </div>
          <div className='flex justify-center flex-row'>
            <div className='md:w-1/4 mb-6 w-3/4'>
              <label
                forhtml='password'
                className='block mb-2 text-lg font-medium text-gray-900'
              >
                Password
              </label>
              <input
                onChange={changePassword}
                type='password'
                id='password'
                className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='•••••••••'
                required
              />
            </div>
          </div>
          <div className='flex justify-center flex-row'>
            <div className='md:w-1/4 w-3/4'>
              <label
                forhtml='confirmpassword'
                className='block mb-2 text-lg font-medium text-gray-900'
              >
                Confirm Password
              </label>
              <input
                onChange={changeConfirmPassword}
                type='password'
                id='confirmpassword'
                className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='•••••••••'
                required
              />
              <p className='mt-4 text-red-500' id='alertmsg'></p>
            </div>
          </div>

          <div className='flex justify-center flex-row mb-4'>
            <div className='md:w-1/4 w-3/4'>
              <label className='' htmlFor='usertype'>
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

          {/* <div className='flex justify-center'>
                        {passwordNotMatched}
                    </div> */}
          <div className='flex justify-center flex-row mt-5'>
            <div>
              <button
                type='submit'
                className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md'
                value='submit'
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
        <p className='text-center mt-5'>
          Already have an account ?
          <Link to='/login' className='text-blue-500 ml-2'>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
