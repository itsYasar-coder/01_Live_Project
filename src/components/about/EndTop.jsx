import React from "react";

const EndTop = () => {
  return (
    <div className="mt-40 flex justify-center px-10">
      

      <div
        className="w-[940px] h-[450px]
        bg-[#060212]backdrop-blur-xl 
        border border-white/10 
        rounded-3xl 
        px-14 py-12
        flex items-center justify-between gap-20
        shadow-2xl"
      >
        

        <div className="flex-1 ">
          <h1 className="text-6xl  font-bold font-serif text-white mb-8">
            Our
            <span className="italic ml-2 text-purple-500 font-medium">
              Philosophy
            </span>
          </h1>

          <div className="text-sm text-gray-300 space-y-6 leading-relaxed max-w-md">
            <p>
              We believe in providing Best Recruitment services for our Clients.
              Our values are at core of everything we do, they are foundation to
              our culture and key to our successful performance.
            </p>

            <p>
              "We strongly believe that we exist because of our clients and
              candidates. We aim to help our clients build exceptional
              organizations by addressing their recruitment requirements."
            </p>
          </div>
        </div>

   
        <div className="flex-1 flex justify-center">
          
  
          <div className="relative">

      
            <div
                     className=" max-w-1xl 
        bg-black/40 backdrop-blur-xl 
        border border-white/10 
        rounded-3xl 
        px-4 py-4
        flex items-center justify-between 
        shadow-1xl "

            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
                alt="Office"
                className="w-[450px] h-[320px] object-cover rounded-2xl"
              />
       <div
         className="
    absolute bottom-[-26px] right-[210px]
    w-[170px] h-[85px]
    rounded-2xl
    
    bg-black/0
    backdrop-blur-xl
    border border-white/20
    
    flex flex-col justify-center items-center
    shadow-xl
    "
  >
    <h2 className="text-4xl font-bold text-white mr-13">2021</h2>

    <p className="text-[11px] uppercase tracking-widest text-purple-500">
      FOUNDED & FORGING
    </p>
  </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EndTop;
