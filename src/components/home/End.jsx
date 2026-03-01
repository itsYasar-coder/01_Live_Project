import React from "react";
import { Dot } from "lucide-react";

const Start = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

      {/* Image */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="team"
          className="rounded-3xl w-full object-cover"
        />

        <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-2xl">
          <h2 className="text-2xl font-bold text-white">15+</h2>
          <p className="text-xs text-gray-300 uppercase tracking-wider">
            Years of Vision
          </p>
        </div>
      </div>

      {/* Text */}
      <div>

        <div className="flex items-center gap-2 mb-6 bg-white/5 w-fit px-4 py-2 rounded-full border border-white/10">
          <Dot size={20} className="text-purple-500" />
          <span className="text-purple-400 uppercase text-sm tracking-wide">
            Our Philosophy
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Beyond <span className="italic text-blue-400 font-serif">Placement</span>,  
          We Build Legacy.
        </h2>

        <p className="text-gray-400 mt-6 leading-relaxed">
          We engineer elite teams that transform markets using algorithmic precision and human intuition.
        </p>

        <div className="flex gap-12 mt-10">
          <div>
            <h3 className="text-3xl font-bold">98%</h3>
            <p className="text-gray-400 text-sm">Retention</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">12k+</h3>
            <p className="text-gray-400 text-sm">Executives</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Start;