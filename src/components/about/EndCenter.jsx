import React from "react";

const StatsSection = () => {
  return (
    <div className="relative w-full h-[350px] flex items-center justify-center mt-70 rounded-xl overflow-hidden">

      <img
        src="https://imgs.search.brave.com/4DXXpect8Ge2dgzuqubNcuYaA1-VCOnEG4XCUhR6QU8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9vZmZp/Y2UtYnVpbGRpbmct/c21hbGwtc3VidXJi/YW4tbmV0aGVybGFu/ZHMtNDA4NjI2MTYu/anBn"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover "
      />


      <div className="absolute inset-0 bg-[#060212]/95"></div>



      <div className="relative z-10 flex justify-center gap-32 text-center ">

        {/* Stat 1 */}
        <div>
          <h1 className="text-7xl font-extrabold text-white">
            50<span className="text-purple-500">+</span>
          </h1>
          <p className="text-gray-400 tracking-[4px] text-xs mt-2 uppercase">
            Serving Industries
          </p>
        </div>

        {/* Stat 2 */}
        <div>
          <h1 className="text-7xl font-extrabold text-white">
            1k<span className="text-purple-500">+</span>
          </h1>
          <p className="text-gray-400 tracking-[4px] text-xs mt-2 uppercase">
            Projects Completed
          </p>
        </div>

        {/* Stat 3 */}
        <div>
          <h1 className="text-7xl font-extrabold text-white">
            500<span className="text-purple-500">+</span>
          </h1>
          <p className="text-gray-400 tracking-[4px] text-xs mt-2 uppercase">
            Satisfied Clients
          </p>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;
