import React from "react";
import { Search } from "lucide-react";

const Input = () => {
  return (
    <section className="flex flex-col items-center mt-12 px-6">

      <div className="relative w-full max-w-2xl
        bg-white/5 backdrop-blur-xl border border-white/10
        rounded-full shadow-xl">

        <Search
          size={18}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300"
        />

        <input
          type="text"
          placeholder="Explore Industries..."
          className="w-full py-4 pl-12 pr-32 rounded-full
          bg-transparent text-white outline-none
          placeholder-gray-400"
        />

        <a
          href="/discover"
          className="absolute right-2 top-1/2 -translate-y-1/2
          bg-blue-500 text-white px-6 py-2 rounded-full
          font-semibold hover:bg-blue-400 transition"
        >
          Discover
        </a>
      </div>

      <p className="text-gray-400 text-sm text-center mt-6 max-w-md">
        Elite Recruitment for high-growth ventures.
      </p>

    </section>
  );
};

export default Input;