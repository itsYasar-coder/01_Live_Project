import React from "react";
import { Search } from "lucide-react";

const Input = () => {
  return (
    <div className="px-4 mt-10 flex flex-col items-center">

      <div className="relative w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-lg">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300"
        />

        <input
          type="text"
          placeholder="Explore Industries..."
          className="w-full py-4 pl-12 pr-28 bg-transparent text-white rounded-full
          placeholder-gray-400 outline-none"
        />

        <button
          className="absolute right-2 top-1/2 -translate-y-1/2
          bg-blue-500 text-white px-5 py-2 rounded-full font-semibold">
          Discover
        </button>

      </div>

      <p className="text-gray-400 text-sm text-center mt-6 max-w-xs">
        Elite recruitment for high-growth ventures.
      </p>

    </div>
  );
};

export default Input;