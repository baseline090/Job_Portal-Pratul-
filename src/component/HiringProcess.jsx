


import React from "react";
import backgroundline from "../assets/Homepage/line.jpg";
import hired from "../assets/navbar/gethired.png";
import person from "../assets/navbar/group1.png";
import showcase from "../assets/navbar/group2.png";

const HiringProcess = () => {
  return (
    <>
      <div className="p-10">
        <h1 className="text-center text-[50px] font-bold text-[#F84B04] mb-5">
          Quick & Easy Hiring —{" "}
          <span className="text-[#425066]">Only 3 Steps</span>
        </h1>
        <p className="text-center text-[20px] font-[jost] font-400 mb-10 text-[#000000]">
          The fastest and easiest way to land a job with leading companies in
          your field.
        </p>

        {/* Background Image Section */}
        <div
          className="bg-cover bg-center h-[500px] mt-5 relative"
          style={{ backgroundImage: `url(${backgroundline})` }}
        >
          <div className="relative">
            {/* First Step - Left Side */}

            <div className="absolute left-12 top-18 w-[417px] bg-white p-5  shadow-md rounded-lg text-center max-w-xs mb-10 md:mb-0">
              <div className="h-[92px] w-[92px] bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img src={person} alt="Create Account" />
              </div>
              <h2 className="text-[24px] font-bold text-[#000000] mb-2">
                Create Account
              </h2>
              <p className="text-[#425066] text-[16px]">
                For your dream job, create an account for yourself!
              </p>
            </div>

            {/* Second Step - Bottom Center */}
            <div className="absolute left-[48%] top-50 w-[417px] transform -translate-x-1/2 bg-white p-6 shadow-md rounded-lg text-center max-w-xs">
              <div className="h-[92px] w-[92px] bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img src={showcase} alt="Showcase Yourself" />
              </div>
              <h2 className="text-[24px] font-bold text-[#000000] mb-2">
                Showcase Yourself
              </h2>
              <p className="text-[#425066] text-[16px]">
                Qualify the assessment and fill your achievements and personals
                to get hired.
              </p>
            </div>

            {/* Third Step - Right Top */}
            <div className="absolute right-55 w-[417px]  bg-white p-6 rounded-lg text-center max-w-xs shadow-[2px_2px_10px_0px_#00000040]">
              
              <div className="h-[92px] w-[92px] bg-yellow-200  rounded-full mx-auto mb-4 flex items-center justify-center">
                <img src={hired} />
              </div>
              <h2 className="text-[24px] font-bold text-[#000000] mb-2">
                Get Hired
              </h2>
              <p className="text-[#425066] text-[16px]">
                Get your dream job and excel in your career!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HiringProcess;


