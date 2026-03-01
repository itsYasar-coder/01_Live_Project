import React from "react";
import { ArrowRight } from "lucide-react";

const End = () => {
  return (
    <div className="w-full mt-24 py-20 px-6 lg:px-20 text-white">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 mb-16">

        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Modern Solutions
          </h1>

          <p className="mt-4 text-gray-400 text-sm max-w-lg leading-relaxed">
            A suite of services designed for the global-first,
            digital-native enterprise.
          </p>
        </div>

        <a
          href="/all"
          className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition"
        >
          VIEW ALL SERVICES
          <ArrowRight size={16} />
        </a>
      </div>

      {/* Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

        {/* Card */}
        <div className="rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-xl p-8 flex flex-col justify-between">

          <div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            </div>

            <h1 className="text-xl font-semibold mb-3">
              Executive Search
            </h1>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Curating high-impact leadership for organizations ready to scale.
              We find the C-suite visionaries your mission deserves.
            </p>
          </div>

          <div className="space-y-2 text-sm text-gray-300">
            <p>✔ C-suite Recruitment</p>
            <p>✔ Leadership Advisory</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-xl p-8 flex flex-col justify-between">

          <div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            </div>

            <h1 className="text-xl font-semibold mb-3">
              Talent Strategy
            </h1>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Data-driven consultation to build resilient workforce cultures.
              Aligning your human capital with long-term goals.
            </p>
          </div>

          <div className="space-y-2 text-sm text-gray-300">
            <p>✔ Workforce Mapping</p>
            <p>✔ Retention Analytics</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-xl p-8 flex flex-col justify-between">

          <div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <h1 className="text-xl font-semibold mb-3">
              Global Staffing
            </h1>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Seamless cross-border talent acquisition.
              We handle international complexities so you can focus on growth.
            </p>
          </div>

          <div className="space-y-2 text-sm text-gray-300">
            <p>✔ Compliance & Visa</p>
            <p>✔ Remote Hub Setup</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default End;