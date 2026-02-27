import React from 'react'
import Navbar from "../home/Navbar";

const Top = () => {
  return (
  <div className="min-h-screen relative overflow-hidden text-white">

     
      <div className="absolute inset-0 bg-gradient-to-br from-[#05010d] via-[#12042a] to-[#05010d]" />


      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(http://www.transparenttextures.com/patterns/gplay.png)",

            
        }}
      />

      <div className="absolute top-0 left-0 w-full h-[300px] bg-purple-600/20 blur-[120px]" />

     
        <Navbar />

   
      <div className="relative z-40 flex flex-col justify-center items-center px-28 mt-20">

    
        <h1 className="text-9xl font-bold font-serif top-0">
         Let's Build 
        </h1>

 
        <h1 className=" mt-4 text-9xl  whitespace-nowrap font-serif font-bold">
         Your Legacy
        </h1>
      </div>
    </div>
  )
}

export default Top
