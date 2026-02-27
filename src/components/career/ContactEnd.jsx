import React from "react";

const ContactEnd = () => {
  return (
    <div className="flex justify-center items-center mt-20">


      <div className="flex w-[1300px] h-[452px] rounded-2xl border border-white/10 overflow-hidden">

        
 <div className="w-[600px] h-full relative overflow-hidden rounded-l-2xl">

  <iframe
    title="Office Location"
    loading="lazy"
    className="w-full h-full"
    src="https://www.google.com/maps?q=A-310,Siddhivinayak+Tower,Ahmedabad,India&output=embed"
  ></iframe>

  <a
    href="https://www.google.com/maps?q=A-310,Siddhivinayak+Tower,Ahmedabad,India"
    target="_blank"
    rel="noopener noreferrer"
    className="absolute inset-0 z-20"
  ></a>

  <div className="absolute bottom-6 left-6 bg-black/70 px-4 py-3 rounded-xl text-white z-30">
    <h2 className="text-lg font-bold">📍 Our Office</h2>
    <p className="text-sm text-gray-200 leading-snug">
      A-310, Siddhivinayak Tower <br />
      Ahmedabad, India
    </p>
  </div>

</div>

     
        <div className="relative flex-1 flex flex-col justify-center items-end text-right px-20 overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-[#050014] via-[#00001a] to-black"></div>

          <div
            className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px]
    bg-purple-600 opacity-30 blur-[150px] rounded-full"
          ></div>

          <div
            className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px]
    bg-blue-500 opacity-30 blur-[150px] rounded-full"
          ></div>

          
          <div className="relative z-10 flex flex-col gap-12">

            <div className="flex items-center gap-4 justify-end">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10">
                📧
              </div>
              <div>
                <h1 className="text-white tracking-[4px] text-2xl uppercase mr-25">
                  Email
                </h1>
                <p className="text-white text-1xl mt-1 font-medium mr-12">
                  selinox@gmail.com
                </p>
              </div>
            </div>

  
            <div className="flex items-center gap-4 justify-end">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10">
                📞
              </div>
              <div>
                <h1 className="text-white tracking-[4px] uppercase text-2xl mr-13">
                  Contact
                </h1>
                <p className="text-white text-1xl mt-1 mr-16">
                  +91 98765 43210
                </p>
              </div>
            </div>


            <div className="flex items-center gap-4 justify-end">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 ">
                📍
              </div>
              <div>
                <h1 className="text-white tracking-[4px] uppercase text-2xl mr-13">
                  Address
                </h1>
                <p className="text-gray-300 text-sm mt-1 leading-relaxed mr-3">
                  A-310, Siddhivinayak Tower, <br />

                  <p className="mr-15">

                    Ahmedabad, India
                  </p>
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>


    </div>
  );
};

export default ContactEnd;
