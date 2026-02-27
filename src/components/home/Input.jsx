import React from "react";
import { Search } from "lucide-react";

const Input = () => {
  return (
    <div className="flex flex-col items-center mt-10 gap-4">

      <div
        className="
        relative w-[600px]
        bg-white/1 backdrop-blur-xl
        border border-white/7
        rounded-full shadow-lg
        "
      >
       
        <Search
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300"
        />

        <input
          type="text"
          placeholder="Explore Industries...."
          className="
          w-full py-3 pl-12 pr-32 rounded-full
          bg-transparent text-white outline-none
          placeholder-gray-300
          "
        />

        <a
          href="/discover"
          className="
          absolute right-2 top-1/2 -translate-y-1/2
          bg-blue-500 text-white px-6 py-2 rounded-full
          font-semibold hover:bg-blue-400 duration-200
          "
        >
          Discover
        </a>
      </div>

      <div className="text-center text-white text-sm opacity-80">
        <p>Elite Recruitment For High-growth ventures. We specialize in</p>
        <p>the human architecture of tomorrow</p>
      </div>
    </div>
  );
};

export default Input;
