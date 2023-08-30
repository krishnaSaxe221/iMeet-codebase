import React, { useState, useEffect } from "react";
import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import {AiFillCaretDown} from 'react-icons/ai'



const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });return () => {
      listen();
    };
  }, []);
  const showModalHandler = () => {
    setShowSidebar(true);
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const displayName = user.displayName;
          setUserName(displayName);
          console.log(displayName);
        }
      } catch (error) {
        console.log('Error fetching user name:', error.message);
      }
    };
    fetchUserName();
  }, []);


  return (
    <>
      <Sidebar
        className={`${showSidebar ? "block" : "hidden"}`}
        setShowModal={setShowSidebar}
      />
      <header className="flex justify-between py-5 px-10 md:px-15 lg:px-20 shadow-xl">
        <Link className="text-[#635DFF] text-xl font-semibold">
          {"{CodeBase}"}
        </Link>
        <div className=" justify-center items-center gap-5 hidden md:flex">
          
          
          {authUser ? (
            <>
            <p className="font-semibold hover:bg-gray-200  py-1 px-3 rounded-lg flex justify-center items-center">{userName} <AiFillCaretDown /></p>
            <button onClick={userSignOut} class="bg-[#635DFF]  hover:bg-[#635Daa] font-semibold  text-white border border-gray-500 py-1 px-3 rounded-lg"> <Link to = '/home'>Sign Out</Link></button>
            </>
          ) : (
            <>
            <Link to='/home' className="font-semibold hover:text-[#635DFF]">Home</Link>
            <Link to='/about' className="font-semibold hover:text-[#635DFF]">About</Link>
            <Link to='/contact' className="font-semibold hover:text-[#635DFF]">Contact</Link>
            <Link to='/login' className="font-semibold hover:bg-gray-200 border border-gray-500 py-1 px-3 rounded-lg">
            Login
            </Link>
            <Link to='/signup' className="font-semibold bg-[#635DFF] text-white hover:bg-[#635Daa] border border-gray-500 py-1 px-3 rounded-lg">
            Sign Up
            </Link>
            </>
          )}
        </div>
        {authUser ? (<><button onClick={userSignOut} class="bg-[#635DFF]  hover:bg-[#635Daa] font-semibold  text-white border border-gray-500 py-1 px-3 rounded-lg md:hidden ml-auto"> <Link to = '/home'>Sign Out</Link></button></>):(<></>)}
        
        <button onClick={showModalHandler} className="md:hidden">
          <IoReorderThree size={30} />
        </button>
        
      </header>
    </>
  );
};

export default Header;
