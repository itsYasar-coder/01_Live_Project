import React from "react";

const Center = () => {
  return (
    <div className="relative z-10 px-20 pt-1 pb-6">

   
      <h1 className="text-6xl font-bold font-serif text-white mb-4">
        What{" "}
        <span className="italic text-purple-500 font-medium">
          We Do
        </span>
      </h1>

  
      <div className="flex items-start gap-20">


        <div className="w-[360px] h-[430px] rounded-[30px] overflow-hidden shadow-xl">
          <img
            src="https://imgs.search.brave.com/Bqyrv52UikK3HXdOqCEn2CglxK-U0Wh5prA3-la2_zE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/MzczMTk5Ni9waG90/by9qYXBhbmVzZS1t/YWxlLWJ1c2luZXNz/bWVuLXNoYWtlLWhh/bmRzLXdpdGgtZWFj/aC1vdGhlci5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Rnha/TFE5TmZlYjZpWkdy/ZFpDNkVsazJNVXIz/blJ0Q19JYWsxZ0w5/SFdwRT0"
            alt="Office"
            className="w-full h-full object-cover"
          />
        </div>

       
        <div className="relative pl-10  -mt-15">


      <div className="absolute left-[44px] h-[490px] w-[2px] z-0 bg-gradient-to-b from-white/5 via-white/30 to-white/5 rounded-full">
           </div>


          <div className="space-y-5">

            {/* Block 1 */}
            <div className="flex gap-6 relative z-10">
           <div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
           <div className="w-3 h-3 rounded-full bg-purple-500"></div>
           </div>


              <div>
                <h2 className="text-white text-xl font-semibold">
                  Sourcing & Stratetop-0 bottom-0
gy
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  Understand Job Description provided by Clients. Sourcing profiles
                  as per Job Description and mapping the talent landscape.
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="flex gap-6 relative z-10">
                <div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
               <div className="w-3 h-3 rounded-full bg-purple-500"></div>
           </div>

              <div>
                <h2 className="text-white text-xl font-semibold">
                  Screening Excellence
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  Scrutinize interested candidates resumes & details before sending
                  to clients. Receive feedback for all candidates.
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="flex gap-6 relative z-10">
                <div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
           </div>

              <div>
                <h2 className="text-white text-xl font-semibold">
                  Interview Management
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  Schedule Interviews as per client schedule. Follow up for pre &
                  post interview and take feedback.
                </p>
              </div>
            </div>

            {/* Block 4 */}
            <div className="flex gap-6 relative z-10">
                <div className="mt-1 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
           </div>

              <div>
                <h2 className="text-white text-xl font-semibold">
                  Selection & Onboarding
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  Verify shortlisted documents. Negotiate salary and follow up till
                  joining.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
