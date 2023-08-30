import React from 'react'
import {BiSearch} from 'react-icons/bi'
import img1 from '../images/Ellipse1.png';
import img2 from '../images/Ellipse2.png';
import img3 from '../images/Ellipse3.png';
import {BiSolidDownload} from 'react-icons/bi'




const Viewcode = () => {
  return (
    <>
        <div className="container px-5">
        <div className="mt-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BiSearch />
            </div>
            <input type="search" id="default-search" className=" w-full py-3 px-4 rounded-lg shadow mb-4 block p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50  " placeholder="Search Codes..."  />
        </div>
        </div>
        <div className="flex flex-col shadow mb-5 rounded-br-2xl rounded-bl-2xl md:flex-row">
          <div className="md:w-1/4 mt-2 flex justify-center items-center">
            <img src={img1} className="w-full" alt="" />
          </div>
          <div className="md:w-1/2 p-4">
            <h3 className="mb-4 mt-2 text-xl">Face Machine using Python</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
          </div>
          <div className="md:w-1/4 flex justify-center items-center">
            <button className="btn btn-primary btn-lg px-4 py-4 rounded-lg mt-5 mb-4" style={{ backgroundColor: "#635DFF" }}>
              <BiSolidDownload />
            </button>
          </div>
        </div>
        <div className="flex flex-col shadow mb-5 rounded-br-2xl rounded-bl-2xl md:flex-row">
          <div className="md:w-1/4 flex justify-center items-center">
            <img src={img2} alt="" className="w-full" />
          </div>
          <div className="md:w-1/2 p-4">
            <h3 className="mb-4 mt-2 text-xl">ML/AI Project Steps</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
          </div>
          <div className="md:w-1/4 flex justify-center items-center">
            <button className="btn btn-primary btn-lg px-4 py-4 rounded-lg  mt-5 mb-4" style={{ backgroundColor: "#635DFF" }}>
              <BiSolidDownload />
            </button>
          </div>
        </div>
        <div className="flex flex-col shadow mb-5 rounded-br-2xl rounded-bl-2xl md:flex-row">
          <div className="md:w-1/4 flex justify-center items-center">
            <img src={img3} alt="" className="w-full" />
          </div>
          <div className="md:w-1/2 p-4">
            <h3 className="mb-4 mt-2 text-xl">Flutter Rating App</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit....</p>
          </div>
          <div className="md:w-1/4 flex justify-center items-center">
            <button className="btn btn-primary btn-lg px-4 py-4 rounded-lg  mt-5 mb-4" style={{ backgroundColor: "#635DFF" }}>
              <BiSolidDownload />
            </button>
          </div>
        </div>
        </div>
        <div className="col text-center mb-3">
          <button className="btn btn-danger btn-lg rounded-pill text-center">Show More</button>
        </div>
    </>
  )
}

export default Viewcode