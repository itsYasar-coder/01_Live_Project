import React from "react";
import { Dot } from "lucide-react";
const Start = () => {

  return (
    <div className="flex justify-center items-center mt-1 px-20 gap-20">
      <div className="relative w-[420px] h-[460px] rounded-3xl">
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=100" alt="team" className="w-full h-full object-cover rounded-3xl" />
        <div className=" absolute bottom-[-40px] right-[-30px] w-[130px] h-[150px] rounded-2xl bg-black/0 backdrop-blur-xl border border-white/20 flex flex-col justify-center items-center shadow-xl " >
          <h2 className="text-3xl font-bold text-white">15+</h2>
          <p className="text-[10px] uppercase tracking-widest text-white/80"> Years of Vision </p>
        </div>
      </div>
      <div className="max-w-[520px] text-white">
        <div className="flex items-center gap-1 mb-4 text-sm w-[170px] py-0 px-3 rounded-full bg-white/1 backdrop-blur-xl border border-white/7 shadow-lg ">
          <Dot size={30} className="text-purple-800 ml-[-12px]" />
          <h1 className="text-purple-400 uppercase tracking-wide font-sans"> our philosophy</h1>
        </div>
        <h1 className="text-5xl font-bold leading-none"> Beyond
          <br />
          <span className="text-blue-400 italic font-serif"> Placement </span>

          ,<br />
          We Build
          <br />
          Legacy.
        </h1>
        <p className="mt-8 text-gray-300 text-sm leading-relaxed"> At Recruit Kings, we don't just fill seats. We engineer teams </p>
        <p className=" text-gray-300 text-sm leading-relaxed"> that transform markets. Our methodology combines </p>
        <p className=" text-gray-300 text-sm leading-relaxed"> algorithmic precision with human intuition to find the </p>
        <p className=" text-gray-300 text-sm leading-relaxed"> "detached" talent — those not looking, but ready to lead. </p>
        <div className="flex gap-12 mt-10">

          <div>
            <h2 className="text-2xl font-bold">98%</h2>
            <p className="text-gray-400 text-xs">Retention</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">12k+</h2>
            <p className="text-gray-400 text-xs">Executives</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;