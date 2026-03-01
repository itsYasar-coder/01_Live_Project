import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#050515] flex flex-col items-center px-6">

      {/* CTA Section */}
      <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden mt-24">

        <div className="absolute inset-0">
          <div className="absolute top-[-150px] left-[-150px] w-[300px] h-[300px] bg-blue-600 opacity-30 blur-[160px] rounded-full"></div>
          <div className="absolute bottom-[-150px] right-[-150px] w-[300px] h-[300px] bg-purple-600 opacity-30 blur-[160px] rounded-full"></div>
        </div>

        <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl py-16 px-6 md:px-12 text-center">

          <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6">
            Ready to Scale?
          </h1>

          <p className="text-gray-300 text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Join the elite network of companies that trust Recruit Kings for their
            most critical human capital needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-7 py-3 rounded-full bg-white/5 text-white font-semibold border border-white/20 hover:bg-white hover:text-black transition">
              Hire Top Talent
            </button>

            <button className="px-7 py-3 rounded-full bg-white/5 text-white font-semibold border border-white/20 hover:bg-white hover:text-black transition">
              Join Our Network
            </button>
          </div>
        </div>
      </div>

      {/* Social + Bottom */}
      <footer className="flex flex-col items-center mt-20 pb-10 text-gray-400 text-sm w-full">

        <div className="flex flex-wrap justify-center gap-10">

          <a href="#" className="hover:text-white transition">LinkedIn</a>
          <a href="#" className="hover:text-white transition">Twitter</a>
          <a href="#" className="hover:text-white transition">Instagram</a>

        </div>

        <div className="w-full max-w-md h-[1px] bg-white/10 mt-10"></div>

        <p className="mt-6 text-gray-500 text-xs tracking-wide text-center">
          © 2026 RECRUIT KINGS. ENGINEERED EXCELLENCE.
        </p>
      </footer>

    </div>
  );
};

export default Footer;