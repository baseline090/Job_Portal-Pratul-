import React, { useState } from "react";
import arrowRight from "../assets/Homepage/arrow-up-right.png";
import jobs from "../data/JobOpportunityCard";
import { Link } from "react-router-dom";
import FooterSection from "./Footer";
import ImageSection from "./ImageSection";

const JobOpportunityCard = ({ job }) => (
  <div className="shadow-lg rounded-lg overflow-hidden p-4 border-2 border-[#D0D0D0]">
    <div className="flex">
      <img src={job.image} alt={job.title} />
      <div className="text-gray-500 text-sm mt-5 ml-7 font-semibold">
        {job.type}
      </div>
    </div>
    <div className="p-4">
  <h2 className="text-[22px] text-[#F84B04] font-semibold mt-2">
    {job.title}
  </h2>
  <p className="text-gray-700 mt-2 text-sm">{job.description}</p>
  <a
    href={job.link}
    className="text-orange-500 hover:text-orange-600 text-sm mt-3 flex items-center hover:underline"
  >
    More Details
    <img src={arrowRight} alt="Arrow" className="ml-2" />
  </a>
</div>
  </div>
);

const JobOpportunities = ({ searchKeyword, handleInputChange, searchInputRef }) => {
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchKeyword.toLowerCase()) 
  );

  return (
   <>
    <div className="container mx-auto p-6 bg-[#FDF9F5]">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Explore High-Demand Job Opportunities
      </h1>

      {/* Search Box */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <h2 className="text-[16px] font-semibold text-gray-800">
          Search Job Listings:
        </h2>
        <input
          type="search"
          id="keyword"
          placeholder="Search for a job"
          value={searchKeyword}
          onChange={handleInputChange} 
          ref={searchInputRef} 
          className="text-gray-700 text-sm p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-full md:w-80"
        />
      </div>

      <div className="mt-6 flex justify-between">
        <h1 className="text-[30px] font-bold mb-4 text-[#F84B04]">
          Explore Test Assessments
        </h1>
        <Link to="/job-listing" className="text-[#425066] hover:text-[#425066]">
        See More »
      </Link>
      </div>

      {/* Job cards rendering based on search */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {searchKeyword ? (
          filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <JobOpportunityCard key={index} job={job} />
            ))
          ) : (
            <p>No jobs found matching your search.</p>
          )
        ) : (
          jobs.map((job, index) => <JobOpportunityCard key={index} job={job} />)
        )}
      </div>
    </div>
    {/* <ImageSection/>
    <FooterSection/> */}
   </>
  );
};

export default JobOpportunities;