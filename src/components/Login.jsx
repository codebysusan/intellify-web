import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

function Login() {
  useEffect(() => {
    document.title = "MindMed | Login";
    const token = localStorage.getItem("token");
    if (token != null) {
      history("/home");
    }
  }, []);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const history = useNavigate();
  const navigateHome = () => {
    history("/home");
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
            history("/doctor-home");
          } else if (accountType == "user") {
            history("/home");
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
    <div className='h-screen'>
      <Navbar />
      <div className='text-black justify-center h-5/6 flex flex-col'>
        <form onSubmit={handleLogin}>
          <div className='flex justify-center flex-row '>
            <div className='md:w-1/4 w-3/4 mb-6'>
              {error ? (
                <div className='bg-red-500 rounded py-2 px-4 text-white'>
                  {error}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className='flex justify-center flex-row '>
            <div className='md:w-1/4 w-3/4 mb-6'>
              <label
                htmlFor='email'
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
            <div className='md:w-1/4 w-3/4'>
              <label
                htmlFor='password'
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
          <div className='flex justify-center flex-row mt-5'>
            <div>
              <button
                type='submit'
                // onClick={navigateHome}
                className='bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md'
              >
                Log In
              </button>
            </div>
          </div>
        </form>
        <p className='text-center mt-5'>
          Don't have an account ?
          <Link className='text-blue-500 ml-2' to={"/signup"}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
