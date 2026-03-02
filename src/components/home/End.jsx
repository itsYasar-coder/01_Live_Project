import React from "react";
import { ArrowRight } from "lucide-react";
const End = () => {
  return (
    <div className="w-full mt-30 py-24 px-20 text-white">
      <div className="flex justify-between items-center mb-16">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            Modern Solutions
          </h1>
          <p className="mt-4 text-gray-400 text-sm max-w-lg leading-relaxed">
            A suite of services designed for the global-first, digital-native enterprise.
          </p>
        </div>
        <a href="/all" className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition" >
          VIEW ALL SERVICES
          <ArrowRight size={16} />
        </a>
      </div>
      <div className="flex gap-10">
        <div className=" w-[300px] h-[330px] ml-17 rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-xl p-8 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <div className="w-3 h-3 rounded-full bg-purple-500">
              </div>
            </div>
            <h1 className="text-xl font-semibold mb-3">
              Executive Search
            </h1>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Curating high-impact leadership for organizations ready to scale. We find the C-suite visionaries your mission deserves.
            </p>
          </div>
          <div className="space-y-2 text-sm text-gray-300">
            <p className="flex items-center gap-2">
              <span className="text-blue-400">✔</span>
              C-suite Recruitment </p>

            <p className="flex items-center gap-2">
              <span className="text-blue-400">✔</span>
              Leadership Advisory </p>
          </div>
        </div>
        <div className=" w-[300px] h-[330px] rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-xl p-8 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <div className="w-3 h-3 rounded-full bg-blue-500">
              </div>
            </div>
            <h1 className="text-xl font-semibold mb-3">
              Talent Strategy </h1>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Data-driven consultation to Build
              <br /> reslient workforce cultures.Aligning
              <br /> your human capital with long-term
              <br /> goals
            </p>
          </div>
          <div className="space-y-2 text-sm text-gray-300">
            <p className="flex items-center gap-2">
              <span className="text-blue-400">✔</span>
              Workforce Mapping </p>
            <p className="flex items-center gap-2">
              <span className="text-blue-400">✔</span>
              Retention Analytics </p>
          </div>
        </div>
        <div className="w-[300px] h-[330px] rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-xl p-8 flex flex-col">
          <div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <div className="w-3 h-3 rounded-full bg-green-500">
              </div>
            </div>
            <h1 className="text-xl font-semibold mb-3">
              Global Staffing </h1>
            <p className="text-sm text-gray-400 leading-relaxed h-[90px]">
              Seamless cross-border talent acquisition. We handle the complexities of international pairing so you can focus on growth.
            </p>
          </div>
          <div className="space-y-2 text-sm text-gray-300 mt-auto">
            <p className="flex items-center gap-2">
              <span className="text-blue-400">✔</span>
              Compliance & Visa </p>
            <p className="flex items-center gap-2">
              <span className="text-blue-400">✔</span>
              Remote Hub Setup </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default End;