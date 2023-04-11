import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { FaMapMarkerAlt } from "react-icons/fa";
import Footer from '../../components/Footer/Footer';

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetch('https://mocki.io/v1/901b6359-870f-4d4c-a8cb-defafb1f5f6b')
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  useEffect(() => {
    const appliedJobs = jobs.filter((job) => {
      const key = `job_${job.id}_applied`;
      return localStorage.getItem(key) === 'true';
    });
    setAppliedJobs(appliedJobs);
  }, [jobs]);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredJobs(appliedJobs);
    } else {
      const filteredJobs = appliedJobs.filter((job) => job.type.toLowerCase() === filter);
      setFilteredJobs(filteredJobs);
    }
  }, [appliedJobs, filter]);

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    
    <div>
    <div className=''>
        <Navbar></Navbar>
      <div className='flex justify-end mt-5 mr-8'>
        <select className='px-4 py-2 text-gray-700 bg-white border  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500' value={filter} onChange={handleFilter}>
          <option value='all'>All</option>
          <option value='remote'>Remote</option>
          <option value='onsite'>Onsite</option>
        </select>
      </div>
      <h1 className="text-4xl  text-black font-extrabold  text-center ">
        Applied Jobs
      </h1>
      <ul >
        {filteredJobs.map((job) => (
          <li key={job.id} className='p-4 my-4 bg-white rounded-lg shadow-md m-8'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <img src={job.logo}  className='w-12 h-12 mr-4' />
                <div>
                  <h2 className='font-bold'>{job.company_name}</h2>
                  <h2 className='font-bold'>{job.title}</h2>
                  <p className='text-gray-600'>{job.type}</p>
                </div>
              </div>
              <div>
                <p className='text-gray-600 flex  items-center'><FaMapMarkerAlt></FaMapMarkerAlt><span className='ml-2'>{job.location}</span></p>
                <p className='text-gray-600 font-bold'>{job.salary}</p>
                <Link to={`/job/${job.id}`}><button className='btn btn-accent btn-sm mt-4 rounded'>View Details</button></Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
    
    </div>
    
    
  );
};

export default AppliedJobs;







