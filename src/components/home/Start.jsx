import React from "react";
import { Dot } from "lucide-react";

const Start = () => {
  return (
    <div className="px-4 mt-20">

      {/* Image */}
      <div className="relative w-full max-w-xs mx-auto">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="team"
          className="rounded-2xl w-full object-cover"
        />

        <div className="absolute bottom-[-16px] right-[-12px]
          bg-black/40 backdrop-blur-xl border border-white/20
          rounded-lg px-4 py-3 text-center shadow-lg">
          <h2 className="text-xl font-bold text-white">15+</h2>
          <p className="text-[10px] uppercase text-gray-300">Years of Vision</p>
        </div>
      </div>

      {/* Text */}
      <div className="mt-8 text-center text-white">

        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 
          bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-sm">
          <Dot size={18} className="text-purple-500" />
          <span className="text-purple-400 uppercase tracking-wide">
            Our Philosophy
          </span>
        </div>

        <h2 className="text-2xl font-bold leading-snug">
          Beyond <span className="italic text-blue-400 font-serif">Placement</span>,
          We Build Legacy.
        </h2>

        <p className="text-gray-400 mt-4 leading-relaxed text-sm">
          We engineer elite teams that transform markets combining precision
          with human intuition.
        </p>

        <div className="flex justify-center gap-10 mt-8 text-sm">
          <div>
            <h3 className="text-xl font-bold">98%</h3>
            <p className="text-gray-400">Retention</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">12k+</h3>
            <p className="text-gray-400">Executives</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Start;