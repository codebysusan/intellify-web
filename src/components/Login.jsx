import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Illustration from "../assets/illustration1.jpg";

function Login() {
  useEffect(() => {
    document.title = "MindMed | Login";
    const token = localStorage.getItem("token");
    if (token != null) {
      history("/new-home");
    }
  }, []);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const history = useNavigate();
  const navigateHome = () => {
    history("/new-home");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const changeEmail = (event) => {
    const newEmail = event.target.value;
    console.log(newEmail);
    setEmail(newEmail);
  };

  const changePassword = (event) => {
    const newPassword = event.target.value;
    console.log(newPassword);
    setPassword(newPassword);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    console.log(`Email: ${email} \nPassword: ${password}`);

    await fetch(`${baseUrl}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.message == "Login successful") {
          const token = data.token;
          console.log(token);
          localStorage.setItem("token", token);
          const user = jwtDecode(token);
          const accountType = user.acc_type;
          if (accountType == "doctor") {
            history("/disease-prediction");
          } else if (accountType == "user") {
            history("/new-home");
          }
        } else {
          console.log("Login failed");
          setError("Invalid email or password");
        }
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
        setError(error);
      });
  };

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
                Login
              </p>
              <div className='flex justify-center flex-row w-full mt-8'>
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
              <div className='flex justify-center flex-row mt-5'>
                <div>
                  <button
                    type='submit'
                    className='bg-white hover:bg-slate-200 text-black px-4 py-2 rounded-md'
                    onClick={handleLogin}
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
  );
}

export default Login;
