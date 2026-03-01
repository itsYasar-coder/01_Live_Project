import React from "react";
import { ArrowRight } from "lucide-react";

const End = () => {
  return (
    <section className="relative px-6 mt-24 pb-20">

      {/* Soft Glow */}
      <div className="absolute bottom-[-80px] right-[-60px] w-[220px] h-[220px]
      bg-blue-600/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Modern Solutions
          </h2>

          <p className="text-gray-400 text-sm mt-4">
            Elite services for visionary companies.
          </p>
        </div>

        <div className="mt-10 space-y-8">

          {[
            {
              title: "Executive Search",
              desc: "Strategic C-level acquisition built for scale."
            },
            {
              title: "Talent Strategy",
              desc: "Data-driven workforce intelligence systems."
            },
            {
              title: "Global Staffing",
              desc: "Cross-border leadership integration."
            }
          ].map((item, i) => (
            <div key={i}
              className="p-6 rounded-3xl 
              bg-white/5 backdrop-blur-2xl 
              border border-white/10 
              shadow-xl">

              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        <div className="text-center mt-10">
          <button className="flex items-center gap-2 
          mx-auto px-6 py-3 rounded-full 
          border border-white/20 text-white text-sm">
            View All Services
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default End;