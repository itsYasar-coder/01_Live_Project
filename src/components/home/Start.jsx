import React from "react";
import { Dot } from "lucide-react";

const Start = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mt-16 px-6 lg:px-20">

      {/* Image */}
      <div className="relative w-full max-w-sm sm:max-w-md lg:w-[420px] h-[400px] lg:h-[460px] rounded-3xl">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=100"
          alt="team"
          className="w-full h-full object-cover rounded-3xl"
        />

        <div className="absolute bottom-[-30px] right-[-20px] w-[120px] h-[140px] rounded-2xl bg-black/20 backdrop-blur-xl border border-white/20 flex flex-col justify-center items-center shadow-xl">
          <h2 className="text-2xl font-bold text-white">15+</h2>
          <p className="text-[10px] uppercase tracking-widest text-white/80">
            Years of Vision
          </p>
        </div>
      </div>

      {/* Text */}
      <div className="max-w-xl text-white text-center lg:text-left">

        <div className="flex items-center justify-center lg:justify-start gap-1 mb-4 text-sm w-fit px-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
          <Dot size={24} className="text-purple-600" />
          <h1 className="text-purple-400 uppercase tracking-wide">
            our philosophy
          </h1>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          Beyond <br />
          <span className="text-blue-400 italic font-serif">
            Placement
          </span>
          , <br />
          We Build <br />
          Legacy.
        </h1>

        <p className="mt-6 text-gray-300 text-sm leading-relaxed">
          At Recruit Kings, we don't just fill seats. We engineer teams that transform markets.
        </p>

        <div className="flex justify-center lg:justify-start gap-12 mt-10">
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