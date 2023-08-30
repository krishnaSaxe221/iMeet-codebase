import React from 'react';
import { auth } from '../Firebase/firebase';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {BsGoogle} from 'react-icons/bs'
import AuthLayout from '../Layout/AuthLayout';

const Login = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleOnGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOnClick = async () => {
    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
      navigate('/dashboard');
    } catch (e) {
      alert(e.message);
      console.log(e.massage);
    }
  };

  return (
    <AuthLayout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full sm:w-96 px-4 py-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-5">Login</h1>
          </div>
          <div className="mb-5">
            <input
              type="email"
              className="w-full p-3 border border-gray-400 rounded-lg"
              name="email"
              value={value.email}
              onChange={handleOnChange}
              placeholder="Enter Email/Username"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              className="w-full p-3 border border-gray-400 rounded-lg"
              name="password"
              onChange={handleOnChange}
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-3 text-center">
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 w-full mb-3 rounded-lg"
              onClick={handleOnClick}
            >
              Submit
            </button>
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 w-full mb-2 rounded-lg flex justify-center items-center"
              onClick={handleOnGoogle} 
              
            >
             <BsGoogle /> <span className='pl-10'>Login With Google</span>
            </button>
            <Link to="/signup" className="text-black">
              <h5>Don’t Have An Account ? Sign Up</h5>
            </Link>
          </div>
          <div className="text-center">
            <Link to="/ForgotPassword" className="text-black text-base ">
              <h6>Forgot Password</h6>
            </Link>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
