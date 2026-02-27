import React from "react";
import ServiceEnd from "./ServiceEnd";


const PremiumBG = () => {
  return (
    <>

      <div className="absolute inset-0 bg-gradient-to-br from-[#050014] via-[#00001a] to-black"></div>


      <div
        className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px]
        bg-purple-600 opacity-30 blur-[150px] rounded-full"
      ></div>

 
      <div
        className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px]
        bg-blue-500 opacity-30 blur-[150px] rounded-full"
      ></div>
    </>
  );
};

const ServicesCenter = () => {
  return (
    <div>
      {/* ================= TOP BIG CARD ================= */}
      <div className="relative w-[1250px] h-[350px] ml-3 mt-3 rounded-2xl border border-white/10 overflow-hidden flex justify-between items-center px-10 py-6">

       
        <PremiumBG />


    <div className="relative z-10 space-y-4 max-w-[600px]">
          <h1 className="text-white text-5xl font-bold">
            Executive <br />
            <span className="font-serif  italic font-medium text-fuchsia-500">
              Staffing
            </span>
          </h1>

          <p className="text-gray-300 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
             Exercitationem molestias voluptas amet quidem
             <br />
              architecto tenetur esse laborum. 
             
          </p>

              <div className="space-y-3 text-sm text-gray-300 mt-6">
              <p className="flex items-center gap-3">
                <span className="text-purple-400 text-lg">✔</span>
                C-Suite Recruitement
              </p>
              <p className="flex items-center gap-3">
                <span className="text-purple-400 text-lg">✔</span>
                Leadership Advisory
              </p>
              <p className="flex items-center gap-3">
                <span className="text-purple-400 text-lg">✔</span>
               Succesion Planing
              </p>
            </div>
        </div>

        
        <div className="relative z-10">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/054/956/195/small/a-colorful-magnifying-glass-icon-with-a-vibrant-pink-and-blue-design-symbolizing-search-and-exploration-png.png"
            alt="triangle"
            className="w-[400px] h-[348px] drop-shadow-xl rounded-2xl ml-120 "
          />
        </div>
      </div>

      {/* ================= TWO CARDS ROW ================= */}
      <div className="flex gap-10 ml-4 mt-15">

 
<div className="relative w-[600px] h-[330px] rounded-2xl 
border border-white/10 overflow-hidden">

 
  <PremiumBG />


  <div className="relative z-10 flex justify-center items-center h-full">
    <img
      src="https://static.vecteezy.com/system/resources/thumbnails/024/165/286/small/bubble-speech-label-free-png.png"
      alt=""
      className="h-[370px] w-[370px]"
    />
  </div>

</div>



        <div className="relative w-[600px] h-[330px] rounded-2xl border border-white/10 overflow-hidden px-12 py-10">

   
          <PremiumBG />

        
          <div className="relative z-10">
            <h1 className="text-white text-5xl font-bold">
              CXO <br />
              <span className="font-serif text-purple-300 italic font-medium">
                Consulting
              </span>
            </h1>

            <p className="text-gray-400 text-sm leading-relaxed mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <div className="space-y-3 text-sm text-gray-300 mt-6">
              <p className="flex items-center gap-3">
                <span className="text-purple-400 text-lg">✔</span>
                Compliance & Visa Support
              </p>
              <p className="flex items-center gap-3">
                <span className="text-purple-400 text-lg">✔</span>
                Remote Hub Setup & Management
              </p>
              <p className="flex items-center gap-3">
                <span className="text-purple-400 text-lg">✔</span>
                Strategic Business Expansion
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECOND BIG CARD ================= */}
      <div className="relative w-[1250px] h-[350px] ml-3 mt-15 rounded-2xl border border-white/10 overflow-hidden flex justify-between items-center px-10 py-6">

       
        <PremiumBG />

        
       <div className="relative z-10 space-y-4 max-w-[600px]">
          <h1 className="text-white text-5xl font-bold">
            Permanent <br />
            <span className="font-serif  italic font-medium text-fuchsia-500">
              Staffing
            </span>
          </h1>

          <p className="text-gray-300 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
             Exercitationem molestias voluptas amet quidem
             <br />
              architecto tenetur esse laborum. 
             
          </p>

              <div className="space-y-3 text-sm text-gray-300 mt-6">
              <p className="flex items-center gap-3">
                <span className="text-purple-400 text-lg">✔</span>
                C-Suite Recruitement
              </p>
              <p className="flex items-center gap-3">
                <span className="text-purple-400 text-lg">✔</span>
                Leadership Advisory
              </p>
              <p className="flex items-center gap-3">
                <span className="text-purple-400 text-lg">✔</span>
               Succesion Planing
              </p>
            </div>
        </div>

      
        <div className="relative z-10">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/053/159/590/small/hands-holding-a-group-of-people-in-front-of-them-free-png.png"
            alt="triangle"
            className="w-[400px] h-[348px] drop-shadow-xl rounded-2xl"
          />
        </div>
      </div>

      {/* ================= LAST TWO CARDS ================= */}
      <div className="flex gap-10 ml-4 mt-15">

    
<div className="relative w-[600px] h-[330px] rounded-2xl 
border border-white/10 overflow-hidden">


  <PremiumBG />


  <div className="relative z-10 flex justify-center items-center h-full">
    <img
      src="https://static.vecteezy.com/system/resources/thumbnails/067/524/550/small/invoice-receipt-3d-illustration-png.png"
      alt=""
      className="w-[400px] h-[300px]"
    />
  </div>

</div>


       
        <div className="relative w-[600px] h-[330px] rounded-2xl border border-white/10 overflow-hidden px-12 py-10">


          <PremiumBG />

          <div className="relative z-10">
            <h1 className="text-white text-5xl font-bold">
              Contract <br />
              <span className="font-serif text-purple-300 italic font-medium">
                Staffing
              </span>
            </h1>

            <p className="text-gray-400 text-sm leading-relaxed mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
  
       <div className="space-y-3 text-sm text-gray-300 mt-6">
              <p className="flex items-center gap-3">
                <span className="text-purple-400 text-lg">✔</span>
                C-Suite Recruitement
              </p>
              <p className="flex items-center gap-3">
                <span className="text-purple-400 text-lg">✔</span>
                Leadership Advisory
              </p>
              <p className="flex items-center gap-3">
                <span className="text-purple-400 text-lg">✔</span>
               Succesion Planing
              </p>
            </div>

          </div>
        </div>
      </div>

      <ServiceEnd />
    </div>
  );
};

export default ServicesCenter;
