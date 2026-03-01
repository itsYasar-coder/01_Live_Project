import React from "react";
import { Dot } from "lucide-react";

const Start = () => {
  return (
    <section className="relative px-6 mt-24">

      {/* Background Glow */}
      <div className="absolute top-[-80px] left-[-60px] w-[200px] h-[200px]
      bg-purple-600/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        {/* Image Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="team"
            className="w-full h-[260px] object-cover"
          />

          <div className="absolute bottom-4 right-4 
          bg-black/50 backdrop-blur-xl border border-white/20 
          rounded-2xl px-5 py-4 text-center shadow-xl">

            <h2 className="text-2xl font-bold text-white">15+</h2>
            <p className="text-[10px] tracking-widest text-gray-300 uppercase">
              Years of Vision
            </p>

          </div>
        </div>

        {/* Text Content */}
        <div className="mt-12 text-white text-center">

          <div className="inline-flex items-center gap-2 
          px-5 py-2 rounded-full 
          bg-white/5 backdrop-blur-xl border border-white/10 text-sm">

            <Dot size={18} className="text-purple-500" />
            <span className="text-purple-400 uppercase tracking-widest">
              Philosophy
            </span>

          </div>

          <h2 className="mt-6 text-3xl font-bold leading-tight">
            Beyond{" "}
            <span className="italic font-serif text-blue-400">
              Placement
            </span>
            , <br />
            We Build Legacy.
          </h2>

          <p className="mt-6 text-gray-400 text-sm leading-relaxed px-2">
            We architect leadership ecosystems using precision-driven
            recruitment models designed for tomorrow's enterprises.
          </p>

          {/* Stats */}
          <div className="mt-10 flex justify-center gap-12">

            <div>
              <h3 className="text-2xl font-bold text-white">98%</h3>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Retention
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white">12K+</h3>
              <p className="text-gray-500 text-xs uppercase tracking-wider">
                Executives
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Start;