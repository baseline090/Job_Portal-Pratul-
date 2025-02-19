import React, { useState, useEffect, useRef } from "react";
import category from "../assets/navbar/category.jpg";
import search from "../assets/navbar/search.jpg";
import location from "../assets/navbar/location.jpg";
import banner from "../assets/navbar/banner.png";
import arrow from "../assets/navbar/arrow.png";
import HiringProcess from "./HiringProcess";
import JobOpportunities from "./JobOpportunityCard";
import { MdKeyboardArrowRight } from "react-icons/md";

const categories = [
  "Air Conditioners",
  "Heat Pumps",
  "Refrigerators",
  "Washing Machines",
  "Dishwashers",
];
const Banner = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const jobListingsRef = useRef(null);
  const searchInputRef = useRef(null);

  const handleSearchClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  useEffect(() => {
    if (isSearchClicked && jobListingsRef.current) {
      jobListingsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isSearchClicked]);

  const handleCategorySelection = (category) => {
    console.log(`Selected category: ${category}`);
    setSelectedCategory(category);
  };

  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <>
      <div className="w-full p-[30px] md:px-12">
        <div className="max-w-[1920px] mx-auto h-auto bg-[#FDF9F5]">
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            {/* Content Section (Text and Search Fields) */}
            <div className="w-full md:w-1/2 md:text-left p-[30px] order-last md:order-first">
              <h4 className="font-[Jost] font-medium text-[22px] text-[#425066]">
                CREATE | IMPACT
              </h4>
              <h1 className="font-[Jost] font-medium text-[40px] md:text-[60px] text-[#F84B04]">
                There Are 93,178 Postings Here For You!
              </h1>
              <p className="text-[18px] md:text-[22px] text-[#425066] font-[400] font-[Jost] hidden md:block">
                Discover thousands of job openings, career opportunities, and
                employment options tailored to your skills. Find your next job
                and take the next step in your career today!
              </p>

              {/* Search Fields */}
              <div className="w-full md:w-[750px] flex mt-[30px] flex-wrap md:flex-nowrap items-center gap-4 bg-white shadow-md p-4 rounded-lg">
                {/* Category Input */}
                <div className="flex items-center p-3 rounded-lg w-full md:w-1/3 relative">
                  <img src={category} alt="Category" />
                  <input
                    type="text"
                    id="job-category"
                    placeholder="Category"
                    value={selectedCategory}
                    onFocus={() => setIsDropdownVisible(true)}
                    onBlur={() => setIsDropdownVisible(false)}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="text-gray-700 text-sm w-full pl-3 pr-4"
                  />
                  {isDropdownVisible && (
                    <div className="absolute top-full left-0 w-[220px] bg-white border border-gray-300 shadow-md mt-1 rounded-md z-10">
                      <ul>
                        <li
                          onClick={() =>
                            handleCategorySelection("Machine Operator")
                          }
                          className="p-2 cursor-pointer hover:bg-[#F84B04] font-[jost] font-[#1D1D1D]-400 text-[14px] flex justify-between items-center"
                        >
                          Machine Operator
                          <MdKeyboardArrowRight className="ml-2" />
                        </li>
                        <li
                          onClick={() =>
                            handleCategorySelection("Machine Repair")
                          }
                          className="p-2 cursor-pointer hover:bg-[#F84B04] font-[jost] font-[#1D1D1D]-400 text-[14px] flex justify-between items-center"
                        >
                          Machine Repair
                          <MdKeyboardArrowRight className="ml-2" />
                        </li>
                        <li
                          onClick={() => handleCategorySelection("Maintenance")}
                          className="p-2 cursor-pointer hover:bg-[#F84B04] font-[jost] font-[#1D1D1D]-400 text-[14px] flex justify-between items-center"
                        >
                          Maintenance
                          <MdKeyboardArrowRight className="ml-2" />
                        </li>
                        <li
                          onClick={() =>
                            handleCategorySelection("Manufacturing")
                          }
                          className="p-2 cursor-pointer hover:bg-[#F84B04] font-[jost] font-[#1D1D1D]-400 text-[14px] flex justify-between items-center"
                        >
                          Manufacturing
                          <MdKeyboardArrowRight className="ml-2" />
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Keyword Input */}
                <div className="flex items-center p-3 rounded-lg w-full md:w-1/3 relative">
                  <img src={search} alt="Keyword" />
                  <input
                    type="text"
                    id="Keyword"
                    placeholder="Keyword"
                    className="text-gray-700 text-sm w-full pl-3 pr-4"
                    value={searchKeyword}
                    // onChange={(e) => setSearchKeyword(e.target.value)}
                    ref={searchInputRef}
                    onChange={handleInputChange}
                    onClick={handleSearchClick}
                  />
                </div>

                {/* Location Input */}
                <div className="flex items-center p-3 rounded-lg w-full md:w-1/3 relative">
                  <img src={location} alt="Location" />
                  <input
                    type="text"
                    id="Location"
                    placeholder="Location"
                    className="text-gray-700 text-sm w-full pl-3 pr-4"
                  />
                </div>

                {/* Search Button */}
                <button
                  className="w-full md:w-auto px-6 py-3 bg-[#F84B04] text-white text-lg font-semibold rounded-full hover:bg-[#d63b00] transition-all duration-300"
                  onClick={handleSearchClick}
                >
                  Search
                </button>
              </div>
            </div>

            {/* Arrow Image */}
            <div className="absolute right-[39%] top-[72%] md:block hidden">
              <img src={arrow} alt="Arrow" />
            </div>

            {/* Banner Image Section */}
            <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 order-first md:order-last">
              <img
                src={banner}
                alt="Job search"
                className="w-full max-w-[500px] md:max-w-lg mt-[25%] rounded-full object-contain shadow-lg"
              />
            </div>
          </div>

          {/* Job Titles Section */}
          <div className=" items-center gap-6 p-[30px]  md:flex hidden">
            <h4 className="bg-[#FCFCFC]">Construction Worker</h4>
            <h4 className="bg-[#FCFCFC]">Mechanic</h4>
            <h4 className="bg-[#FCFCFC]">Machine Operator</h4>
            <h4 className="bg-[#FCFCFC]">Technician</h4>
            <h4 className="bg-[#FCFCFC]">Security Guard</h4>
          </div>
        </div>
      </div>
{/* ------------HiringProcess Section --------- */}
      <HiringProcess />
      <div ref={jobListingsRef}>
        <JobOpportunities
          searchKeyword={searchKeyword}
          handleInputChange={handleInputChange}
          handleSearchClick={handleSearchClick}
          searchInputRef={searchInputRef}
        />
      </div>
    </>
  );
};

export default Banner;
