import React from "react";
import { Search } from "lucide-react";

const Input = () => {
  return (
    <section className="px-6 mt-14">

      <div className="relative bg-white/5 backdrop-blur-xl 
      border border-white/10 rounded-2xl p-5 shadow-xl">

        <div className="flex items-center gap-3 bg-black/30 
        border border-white/10 rounded-full px-4 py-3">

          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search Industries"
            className="bg-transparent outline-none text-white flex-1 placeholder-gray-400 text-sm"
          />

        </div>

        <button className="w-full mt-4 py-3 rounded-full 
        bg-gradient-to-r from-purple-600 to-blue-500 
        text-white font-semibold shadow-lg">
          Discover Opportunities
        </button>

      </div>

      <p className="text-gray-500 text-xs text-center mt-5 leading-relaxed">
        Elite recruitment for high-growth ventures worldwide.
      </p>

    </section>
  );
};

export default Input;