import React from "react";

const Start = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24
      flex flex-col lg:flex-row items-center gap-16">

      {/* Image */}
      <div className="relative w-full max-w-md">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="team"
          className="rounded-3xl object-cover w-full"
        />

        <div className="absolute -bottom-6 -right-6
          bg-white/10 backdrop-blur-xl border border-white/20
          rounded-2xl px-6 py-4 text-center shadow-xl">
          <h2 className="text-2xl font-bold">15+</h2>
          <p className="text-xs uppercase tracking-widest text-gray-300">
            Years of Vision
          </p>
        </div>
      </div>

      {/* Text */}
      <div className="max-w-xl">
        <h2 className="text-purple-400 uppercase tracking-widest text-sm mb-4">
          Our Philosophy
        </h2>

        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          Beyond <span className="italic font-serif text-blue-400">
            Placement
          </span>, We Build Legacy.
        </h1>

        <p className="text-gray-400 mt-6 leading-relaxed">
          We engineer leadership ecosystems combining algorithmic precision
          with human intuition to discover transformational talent.
        </p>

        <div className="flex gap-12 mt-10">
          <div>
            <h3 className="text-2xl font-bold">98%</h3>
            <p className="text-gray-400 text-sm">Retention</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">12k+</h3>
            <p className="text-gray-400 text-sm">Executives</p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Start;