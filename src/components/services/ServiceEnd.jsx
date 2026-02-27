import React from "react";

const ServiceEnd = () => {
  return (
    <div className=" flex flex-col items-center">

      <div className="relative w-[900px] rounded-3xl overflow-hidden mt-30">

        <div className="absolute inset-0">
          <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-blue-600 opacity-30 blur-[160px] rounded-full"></div>

          <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-600 opacity-30 blur-[160px] rounded-full"></div>

          <div className="absolute top-[50px] right-[200px] w-[350px] h-[350px] bg-pink-500 opacity-20 blur-[150px] rounded-full"></div>
        </div>

        <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl py-20 px-10 text-center">

          <h1 className="text-white text-6xl font-extrabold mb-6">
            Ready to Scale?
          </h1>

          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join the elite network of companies that trust Recruit Kings for their
            most critical human capital needs.
          </p>

          <div className="flex justify-center gap-6">
            <button className="px-7 py-3 rounded-full bg-white/5 text-white font-semibold border border-white/20 hover:bg-white hover:text-black transition">
              Hire Top Talent
            </button>

            <button className="px-7 py-3 rounded-full bg-white/5 text-white font-semibold border border-white/20 hover:bg-white hover:text-black transition">
              Join Our Network
            </button>
          </div>
        </div>
      </div>

<footer className="flex flex-col items-center mt-20 pb-1 text-gray-400 text-sm">

  <div className="flex justify-center gap-16">

    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 hover:text-white transition"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
        alt="LinkedIn"
        className="w-7 h-7"
      />
      <span>LinkedIn</span>
    </a>

    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 hover:text-white transition"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
        alt="Twitter"
        className="w-7 h-7"
      />
      <span>Twitter</span>
    </a>

    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2 hover:text-white transition"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
        alt="Instagram"
        className="w-7 h-7"
      />
      <span>Instagram</span>
    </a>
  </div>

  <div className="w-[500px] h-[1px] bg-white/10 mt-10"></div>

  <p className="mt-6 text-gray-500 text-xs tracking-wide">
    © 2026 RECRUIT KINGS. ENGINEERED EXCELLENCE.
  </p>
</footer>

    </div>
  );
};

export default ServiceEnd;
