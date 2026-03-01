import React from "react";

const End = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-5xl font-bold">
          Modern Solutions
        </h1>
        <p className="text-gray-400 mt-4">
          Designed for global-first enterprises.
        </p>
      </div>

      <div className="grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-10">

        {[ "Executive Search", "Talent Strategy", "Global Staffing" ]
        .map((title, index) => (
          <div key={index}
            className="bg-white/5 backdrop-blur-2xl
            border border-white/10
            rounded-3xl p-8 shadow-xl
            hover:scale-105 transition">

            <h2 className="text-xl font-semibold mb-4">
              {title}
            </h2>

            <p className="text-gray-400 text-sm">
              Premium recruitment tailored for high-growth companies.
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default End;