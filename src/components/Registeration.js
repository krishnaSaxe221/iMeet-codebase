import React from 'react';
import { auth } from '../Firebase/firebase';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsGoogle } from 'react-icons/bs';

const Registeration = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    name: '',
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

  const handleOnClick = async (e) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, value.email, value.password);
      await updateProfile(auth.currentUser, {
        displayName: value.name,
      });
      
      navigate('/dashboard');
    } catch (e) {
      alert(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full sm:w-96 px-4 py-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-5">Register</h1>
          </div>
          <div className="mb-5">
            <input
              type="text"
              className="w-full p-3 border border-gray-400 rounded-lg"
              name="name"
              value={value.name}
              onChange={handleOnChange}
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              className="w-full p-3 border border-gray-400 rounded-lg"
              name="email"
              value={value.email}
              onChange={handleOnChange}
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-5">
            <input
              type="password"
              className="w-full p-3 border border-gray-400 rounded-lg"
              name="password"
              value={value.password}
              onChange={handleOnChange}
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-5 text-center">
            <button
              className="bg-black text-white py-3 px-6 w-full mb-2 rounded-lg"
              onClick={handleOnClick}
            >
              Submit
            </button>
            <button
              className="bg-black text-white py-3 px-6 w-full mb-2 rounded-lg  flex justify-center items-center"
              onClick={handleOnGoogle}
            >
              <BsGoogle /> <span className='pl-10'>Signup With Google</span>
            </button>
            <Link to="/login" className="text-black">
              <h5>Already Have An Account ? Login</h5>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registeration;
