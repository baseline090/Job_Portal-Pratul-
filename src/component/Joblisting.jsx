import React from 'react';

const jobListings = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Tech Corp',
    location: 'New York, NY',
    description: 'Developing cutting-edge software solutions.'
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Innovate LLC',
    location: 'San Francisco, CA',
    description: 'Leading product development teams.'
  },
  {
    id: 3,
    title: 'UX Designer',
    company: 'Creative Co.',
    location: 'Remote',
    description: 'Designing user-friendly interfaces.'
  },
  {
    id: 4,
    title: 'Data Scientist',
    company: 'DataX',
    location: 'Chicago, IL',
    description: 'Analyzing large datasets to derive insights.'
  },
  {
    id: 5,
    title: 'Frontend Developer',
    company: 'WebWorks',
    location: 'Austin, TX',
    description: 'Building responsive websites with modern frameworks.'
  },
  {
    id: 6,
    title: 'Backend Developer',
    company: 'CloudTech',
    location: 'Seattle, WA',
    description: 'Developing and maintaining server-side logic.'
  },
  {
    id: 7,
    title: 'Marketing Specialist',
    company: 'AdVision',
    location: 'Los Angeles, CA',
    description: 'Creating marketing strategies and campaigns.'
  },
  {
    id: 8,
    title: 'HR Manager',
    company: 'PeopleFirst',
    location: 'Denver, CO',
    description: 'Managing recruitment and employee relations.'
  },
  
];

function JobListing() {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-6 mt-8 bg-[#FDF9F5]">
      {jobListings.map((job) => (
        <div
          key={job.id}
          className="w-full sm:w-80 p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white"
        >
          <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
          <p className="text-gray-600"><strong>Company:</strong> {job.company}</p>
          <p className="text-gray-600"><strong>Location:</strong> {job.location}</p>
          <p className="mt-2 text-gray-700">{job.description}</p>
        </div>
      ))}
    </div>
  );
}

export default JobListing;
