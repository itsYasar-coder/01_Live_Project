import React from "react";

const Center = () => {
  return (
    <section className="relative px-6 mt-24 text-center">

      {/* Glow Background */}
      <div className="absolute top-[-100px] left-[-80px] w-[250px] h-[250px]
      bg-purple-600/30 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-80px] w-[250px] h-[250px]
      bg-blue-500/30 blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        <h1 className="text-white font-extrabold leading-tight 
        text-4xl tracking-tight">

          We Find The
          <br />

          <span className="italic font-serif text-blue-400">
            Leaders
          </span>

          <br />

          Who Redefine

          <br />

          <span className="bg-gradient-to-r from-white via-gray-400 to-white 
          bg-clip-text text-transparent">
            Reality
          </span>

        </h1>

        <p className="text-gray-400 text-sm mt-6 leading-relaxed max-w-xs mx-auto">
          Executive recruitment engineered for visionary organizations.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <button className="py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold shadow-lg">
            Hire Leaders
          </button>

          <button className="py-3 rounded-full border border-white/20 text-white">
            Explore Services
          </button>
        </div>

      </div>
    </section>
  );
};

export default Center;