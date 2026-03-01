import React from "react";
import { ArrowRight } from "lucide-react";

const End = () => {
  return (
    <div className="px-4 mt-20 pb-16">

      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-white">
          Modern Solutions
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          Designed for mobile-first enterprises.
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-6">

        {[
          "Executive Search",
          "Talent Strategy",
          "Global Staffing"
        ].map((title, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">

            <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">
              Premium solutions tailored for your business.
            </p>

          </div>
        ))}

      </div>

      {/* View All */}
      <div className="text-center mt-8">
        <button className="flex items-center gap-2 mx-auto text-sm text-gray-300">
          VIEW ALL <ArrowRight size={16} />
        </button>
      </div>

    </div>
  );
};

export default End;