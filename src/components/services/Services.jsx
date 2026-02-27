import React from "react";
import Navbar from "../home/Navbar";

const Services = () => {
  return (
    <div className="min-h-screen relative overflow-hidden text-white">


      <div className="absolute inset-0 bg-gradient-to-br from-[#05010d] via-[#12042a] to-[#05010d]" />

 
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(https://www.transparenttextures.com/patterns/cubes.png)",
        }}
      />

    
      <div className="absolute top-0 left-0 w-full h-[300px] bg-purple-600/20 blur-[120px]" />

        <Navbar />

     
      <div className="relative z-40 flex flex-col justify-center items-center px-28 mt-40">

       
        <h1 className="text-8xl font-bold font-serif">
          Modern Solutions
        </h1>


        <p className="text-gray-400 mt-6 text-lg  whitespace-nowrap leading-relaxed">
          A suite of services designed for the global-first, digital-native enterprise.
        </p>
      </div>
    </div>
  );
};

export default Services;
