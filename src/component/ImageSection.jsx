import React from "react";
import img1 from "../assets/Homepage/image1.jpg";
import img2 from "../assets/Homepage/image2.jpg";
import img3 from "../assets/Homepage/image3.png";

const ImageSection = () => {
  return (
    <div className="py-10">
      <div className="container mx-auto  bg-[#FDF9F5] rounded-[35px] h-[615px] flex justify-between px-10 py-10">
        {/* Left Image Section (1/3) */}
        <div className="w-1/4 flex items-center justify-center">
          {" "}
          <img
            src={img1}
            alt="Job Seeker"
            className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-lg object-cover shadow-lg"
          />
        </div>

        {/* Center Text Section */}
        <div className="w-1/2 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-[40px] md:text-[50px] font-semibold text-[#F84B04] leading-tight">
            Find your perfect job or hire top talent effortlessly!
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            “Discover your perfect match in the job market with our AI-powered
            platform, seamlessly connecting skilled job seekers with top
            recruiters to create exciting career opportunities effortlessly.”
          </p>
  
          <button className=" mt-6 px-6 py-3 bg-red-500 text-white rounded-[20px] border-b-[1px] border-gray-400 text-lg font-semibold shadow-lg hover:bg-red-600 transition-transform transform hover:scale-105">
            Get Started
          </button>
        </div>

        {/* Right Image Section */}
        <div className="w-1/4 flex flex-col items-center justify-center relative">
          <div className=" absolute left-[12px] top-[0] w-[181px] h-[181px] bg-[#EEEFF3] rounded-[24px] flex items-center justify-center shadow-lg rotate-[20deg]">
            <img
              src={img3}
              alt="Discussion"
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>
          <img
            src={img2}
            alt="Employer"
            className="w-[308px] h-[308px] rounded-[160px] object-cover shadow-lg absolute bottom-0"
          />
        </div>

        {/* <div className="w-1/3 flex items-center justify-center relative">
          <div className="absolute top-[-30px] right-[-20px] w-[181px] h-[181px] bg-[#EEEFF3] rounded-[24px] flex items-center justify-center shadow-lg rotate-[19.47deg]">
            <img
              src={img3}
              alt="Discussion"
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>

          <img
            src={img2}
            alt="Employer"
            className="w-[308px] h-[308px] rounded-[160px] object-cover shadow-lg"
          />
        </div> */}
      </div>
    </div>
  );
};

export default ImageSection;
