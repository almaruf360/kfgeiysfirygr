import React from 'react';
import { useState,useEffect } from 'react';
import JobCard from '../Jobcard/JobCard';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/901b6359-870f-4d4c-a8cb-defafb1f5f6b")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
    return (
        <div>
            <Navbar></Navbar>
            {/* Dynamic data load */}
            <h1 className="text-4xl text-black font-extrabold mt-16 text-center">
        All Jobs
      </h1>
      <p className='text-gray-400 text-center mt-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
				<div className=' md:grid md:justify-items-center md:grid-cols-2 justify-items-center  ml-16 mr-8'>
					{jobs.map((job) => (
						<JobCard
							job={job}
							key={job.id}
						></JobCard>
					))}
                   
				</div>
                <div className='grid grid-cols-1 justify-items-center '>
                    
                    </div>
                    <Footer></Footer>
        </div>
    );
};

export default AllJobs;