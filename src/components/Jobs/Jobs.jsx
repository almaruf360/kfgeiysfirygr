import React from 'react';
import { useState,useEffect } from 'react';
import JobCard from '../Jobcard/JobCard';
import { Link } from 'react-router-dom';


const Jobs = () => {
    const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/901b6359-870f-4d4c-a8cb-defafb1f5f6b")
      .then((res) => res.json())
      .then((data) => setJobs(data.slice(0,4)));
  }, []);

    return (
        <div>
            {/* Dynamic data load */}
            <h1 className="text-4xl text-black font-extrabold mt-16 text-center">
        Featured Jobs
      </h1>
      <p className='text-gray-400 text-center mt-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
				<div className=' md:grid md:justify-items-center md:grid-cols-2  grid grid-cols-1 justify-items-center'>
					{jobs.map((job) => (
						<JobCard
							job={job}
							key={job.id}
						></JobCard>
					))}
                   
				</div>
                <div className='grid grid-cols-1 justify-items-center '>
                    <Link to="jobs"><button className='btn rounded mb-5 '>See All Jobs</button></Link>
                    </div>
        </div>
    );
};

export default Jobs;