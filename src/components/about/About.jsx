import React from "react";
import Navbar from "../home/Navbar";
import { Dot } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden text-white">

   
      <div className="absolute inset-0 bg-gradient-to-br from-[#050014] via-[#0b0b3a] to-black"></div>

      <div className="absolute top-[-250px] left-[-250px] w-[650px] h-[650px]
        bg-purple-700 opacity-40 blur-[200px] rounded-full"></div>

      <div className="absolute bottom-[-250px] right-[-250px] w-[650px] h-[650px]
        bg-blue-600 opacity-40 blur-[200px] rounded-full"></div>

      <div className="absolute top-[200px] right-[200px] w-[500px] h-[500px]
        bg-pink-600 opacity-25 blur-[180px] rounded-full"></div>

      <div className="relative z-10">

        <Navbar />

        <div className="max-w-7xl mx-auto px-16 pt-20 grid grid-cols-2 gap-20 items-center">

          <div>

            <div className="flex items-center gap-2 mb-4 mt-3 text-sm w-[200px]
              px-2 py-1 rounded-full bg-black/1 border border-white/10">
              <Dot size={26} className="text-purple-500" />
              <h1 className="text-purple-300 uppercase tracking-wide">
                ABOUT OUR LEGACY
              </h1>
            </div>
            
            <div className="text-7xl font-extrabold leading-[0.85] mt-1">
        
            <h1>
              WE ARE <br />
              <span className="font-serif italic text-purple-500 font-medium">
                Recruit
              </span>
              <br />
              KINGS
            </h1>
              </div>
 
          
            <p className="mt-4 text-gray-300 text-sm leading-relaxed max-w-md ">
              Recruit Kings is an International Recruitment Firm Serving more than
              50+ Industries across Africa, Middle East, India, USA, Canada,
              South East Asia, and European countries.
            </p>

          
            <div className="mt-4 grid grid-cols-2 gap-3 max-w-[520px]">
             
             
              <button className="py-2 rounded-full bg-white/5 border border-white/10
              hover:bg-white hover:text-black transition">
                Recruitment Solutions
              </button>
                 

              <button className="py-2 rounded-full bg-white/5 border border-white/10
              hover:bg-white hover:text-black transition">
                Turnkey Project Management
              </button>

              <button className="py-2 rounded-full mb-6 bg-white/5 border border-white/10
              hover:bg-white hover:text-black transition">
                Executive Search
              </button>

              <button className="py-2 rounded-full mb-6 bg-white/5 border border-white/10
              hover:bg-white hover:text-black transition">
                CxO Level Consulting
              </button>

            </div>
          </div>

         
          <div className="flex justify-center">
            <div className="w-[540px] h-[420px] rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://imgs.search.brave.com/kWD0r0Rv7fBJoGmwpWhAZURJQ6JARs6HDlw5X2mZNVI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tb2Rl/cm4tb2ZmaWNlLWJ1/aWxkaW5nLWV4dGVy/aW9yLXNtYWxsLTM1/MTQ3MzQzLmpwZw"
                alt="Office"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
