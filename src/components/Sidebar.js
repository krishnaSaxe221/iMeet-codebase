import React, {useEffect, useState} from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebase";



const Sidebar = (props) => {
  
  const removeModalHandler = () => {
    props.setShowModal(false);
  };

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
  
  
  return (
    <div
      className={
        "h-[100vh] w-[100vw] z-30 bg-[#ffffff33] backdrop-blur-sm fixed " +
        props.className
      }
    >
      <div className="w-[80%] h-[100%] bg-white flex flex-col gap-5 items-center absolute right-0 rounded-lg">
        <button className=" p-3 mb-10 self-end" onClick={removeModalHandler}>
          <AiOutlineClose />
        </button>

        <Link to='/home' className="font-semibold hover:text-[#635DFF]">Home</Link>
        <Link to='/about' className="font-semibold hover:text-[#635DFF]">About</Link>
        <Link to='/comtact' className="font-semibold hover:text-[#635DFF]">Contact</Link>
        {authUser ? (<></>):(<><Link to='/login' className="font-semibold hover:bg-gray-200 border border-gray-500 py-1 px-3 rounded-lg">
          Login
        </Link>
        <Link  to='/signup' className="font-semibold bg-[#635DFF] text-white hover:bg-[#635Daa] border border-gray-500 py-1 px-3 rounded-lg">
          Sign Up
        </Link></>)}

        

      </div>
    </div>
  );
};

export default Sidebar;
