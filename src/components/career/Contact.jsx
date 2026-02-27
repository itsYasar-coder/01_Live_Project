import React from "react";

const Contact = () => {
  return (
    <div>
 
      <div
        className="relative w-[1000px] h-auto p-8 rounded-2xl 
        border border-white/10 shadow-xl ml-35 mt-30 
        overflow-hidden"
      >

        <div className="absolute inset-0 bg-gradient-to-br from-[#050014] via-[#00001a] to-black"></div>


        <div
          className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px]
          bg-purple-600 opacity-30 blur-[150px] rounded-full"
        ></div>


        <div
          className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px]
          bg-blue-500 opacity-30 blur-[150px] rounded-full"
        ></div>


        <div className="relative z-10">

          <h1 className="text-white text-3xl font-semibold mb-8">
            Contact
          </h1>


          <div className="grid grid-cols-2 gap-8">
       
            <div className="space-y-6">
          
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full p-3 rounded-lg bg-white/5 
                  border border-white/10 text-white 
                  placeholder-gray-500 focus:outline-none 
                  focus:border-purple-400 transition"
                />
              </div>

        
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Your email
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 rounded-lg bg-white/5 
                  border border-white/10 text-white 
                  placeholder-gray-500 focus:outline-none 
                  focus:border-purple-400 transition"
                />
              </div>

        
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full p-3 rounded-lg bg-white/5 
                  border border-white/10 text-white 
                  placeholder-gray-500 focus:outline-none 
                  focus:border-purple-400 transition"
                />
              </div>
            </div>


            <div className="space-y-6">
   
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full p-3 rounded-lg bg-white/5 
                  border border-white/10 text-white 
                  placeholder-gray-500 focus:outline-none 
                  focus:border-blue-400 transition"
                />
              </div>

        
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Your message
                </label>
                <textarea
                  placeholder="Your message"
                  rows="4"
                  className="w-full p-3 rounded-lg bg-white/5 
                  border border-white/10 text-white 
                  placeholder-gray-500 focus:outline-none 
                  focus:border-blue-400 transition resize-none"
                />
              </div>
            </div>
          </div>

      
          <div className="mt-8">
            <button
              className="w-[800px] py-3 rounded-full ml-15
              bg-white/10 border border-white/20 
              text-gray-200 hover:bg-white 
              hover:text-black transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
