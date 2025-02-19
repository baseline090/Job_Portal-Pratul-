// import React from "react";
// import gethired from "../assets/navbar/gethired.png";
// import person from "../assets/navbar/group1.png";
// import yourself from "../assets/navbar/group2.png";
// import JobOpportunities from "./JobOpportunityCard";

// const HiringProcess = () => {
//   return (
//     <>
//     <div className="py-10 px-5">
//       <h1 className="text-center text-[50px] font-bold text-[#F84B04] mb-5">
//         Quick & Easy Hiring —{" "}
//         <span className="text-[#425066]">Only 3 Steps</span>
//       </h1>
//       <p className="text-center text-[20px] font-[jost] font-400 mb-10 text-[#000000]">
//         The fastest and easiest way to land a job with leading companies in your field.
//       </p>
      
//       <div className=" p-[20px] flex flex-col items-center md:flex-row md:justify-between md:space-x-10">

//         {/* Left: Create Account Card */}
//         <div className="bg-white p-6 shadow-md rounded-lg text-center max-w-xs mb-10 md:mb-0" style={{ boxShadow: "2px 2px 10px #00000040" }}>
//           <div className="h-[100px] w-[100px] bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
//             <img src={person} alt="Create Account" />
//           </div>
//           <h2 className="text-[24px] font-bold text-[#000000] mb-2">Create Account</h2>
//           <p className="text-[#425066] text-[16px]">For your dream job, create an account for yourself!</p>
//         </div>

//         {/* Center-Bottom: Showcase Yourself Card */}
//         <div className="bg-white p-6 shadow-md rounded-lg text-center max-w-xs mb-10 md:mb-0" style={{ boxShadow: "2px 2px 10px #00000040" }}>
//           <div className="h-[100px] w-[100px] bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
//             <img src={yourself} alt="Showcase Yourself" />
//           </div>
//           <h2 className="text-[24px] font-bold text-[#000000] mb-2">Showcase Yourself</h2>
//           <p className="text-[#425066] text-[16px]">Qualify the assessment and fill your achievements to get hired.</p>
//         </div>

//         {/* Right-Top: Get Hired Card */}
//         <div className="bg-white p-6 shadow-md rounded-lg text-center max-w-xs" style={{ boxShadow: "2px 2px 10px #00000040" }}>
//           <div className="h-[100px] w-[100px] bg-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center">
//             <img src={gethired} alt="Get Hired" />
//           </div>
//           <h2 className="text-[24px] font-bold text-[#000000] mb-2">Get Hired</h2>
//           <p className="text-[#425066] text-[16px]">Get your dream job and excel in your career!</p>
//         </div>
//       </div>
//     </div>

//     <div>
//         <JobOpportunities/>
//     </div>
//     </>
//   );
// };

// export default HiringProcess;




import React from "react";
import gethired from "../assets/navbar/gethired.png";
import person from "../assets/navbar/group1.png";
import yourself from "../assets/navbar/group2.png";
import JobOpportunities from "./JobOpportunityCard";

const HiringProcess = () => {
  return (
    <>
      <div className="py-10 px-5 relative">
        <h1 className="text-center text-[50px] font-bold text-[#F84B04] mb-5">
          Quick & Easy Hiring —{" "}
          <span className="text-[#425066]">Only 3 Steps</span>
        </h1>
        <p className="text-center text-[20px] font-[jost] font-400 mb-10 text-[#000000]">
          The fastest and easiest way to land a job with leading companies in your field.
        </p>

        {/* Dotted Line SVG */}
        <svg
          className="absolute left-1/2 transform -translate-x-1/2 top-1/3 hidden md:block"
          width="80%"
          height="150"
          viewBox="0 0 800 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 100 C200 50, 400 150, 600 100 C700 50, 800 150, 900 100"
            stroke="black"
            strokeWidth="2"
            strokeDasharray="8,8"
          />
          <path
            d="M900 100 L920 90 L920 110 Z"
            fill="black"
          />
        </svg>

        {/* Steps Section */}
        <div className="relative flex flex-col items-center md:flex-row md:justify-between md:space-x-10">
          {/* Step 1 */}
          <div className="relative bg-white p-6 shadow-md rounded-lg text-center max-w-xs mb-10 md:mb-0">
            <div className="h-[100px] w-[100px] bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <img src={person} alt="Create Account" />
            </div>
            <h2 className="text-[24px] font-bold text-[#000000] mb-2">Create Account</h2>
            <p className="text-[#425066] text-[16px]">For your dream job, create an account for yourself!</p>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white p-6 shadow-md rounded-lg text-center max-w-xs mb-10 md:mb-0">
            <div className="h-[100px] w-[100px] bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <img src={yourself} alt="Showcase Yourself" />
            </div>
            <h2 className="text-[24px] font-bold text-[#000000] mb-2">Showcase Yourself</h2>
            <p className="text-[#425066] text-[16px]">Qualify the assessment and fill your achievements to get hired.</p>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white p-6 shadow-md rounded-lg text-center max-w-xs">
            <div className="h-[100px] w-[100px] bg-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <img src={gethired} alt="Get Hired" />
            </div>
            <h2 className="text-[24px] font-bold text-[#000000] mb-2">Get Hired</h2>
            <p className="text-[#425066] text-[16px]">Get your dream job and excel in your career!</p>
          </div>
        </div>
      </div>

   
    </>
  );
};

export default HiringProcess;
