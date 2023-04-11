import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
const JobDetails = () => {
    const { id } = useParams();

    const [isApplied, setIsApplied] = useState(
      localStorage.getItem(`job_${id}_applied`) || false
    );

    const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/901b6359-870f-4d4c-a8cb-defafb1f5f6b")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  const matchedId = jobs.find(
    (job) => job.id === parseInt(id)
  );

  const handleApply = () => {
    setIsApplied(true);
    localStorage.setItem(`job_${id}_applied`, true);
  };
  console.log(matchedId);


    return (
        <div className='bg-gray-200 min-h-screen'>
            <Navbar></Navbar>
            <div>
            <h1 className="text-4xl  text-black font-extrabold pt-8 text-center ">
        Job Details
      </h1>
            </div>

            {/* Details of Job */}
            <div className='md:flex md:justify-center md:items-center grid grid-cols-1 justify-items-center'>
                {/* text */}
            <div className='w-3/5 m-10 '>
            <p> <span className='font-bold'>Description:</span> {matchedId?.description}</p>
            <p className='mt-4'> <span className='font-bold'>Resposibility:</span> {matchedId?.responsibility}</p>
            <p className='mt-4'> <span className='font-bold'>Education:</span> {matchedId?.education}</p>
            <p className='mt-4'> <span className='font-bold'>Experience:</span> {matchedId?.experience}</p>

            </div>
            {/* card */}
            <div>
            <div className='max-w-md w-96 py-4 px-8 bg-white shadow-lg rounded-lg my-12'>
                <div className='m-4'>
                <img src={matchedId?.logo} className='w-16 ' alt='category logo' />
                </div>
                <div className=''>
                    <h1 className='font-bold text-lg underline'>Job Details</h1>
                    <h2 > <span className='font-bold mr:2'>Job Title: </span>{matchedId?.title}</h2>
                    <div className='flex gap-4 mt-4 text-gray-400'><div className='flex justify-center items-center gap-2'><FaMapMarkerAlt></FaMapMarkerAlt>{matchedId?.location}</div> <p>Salary: {matchedId?.salary}</p></div>
                
                </div>
                <div className='flex gap-2 mt-4'>
                    <button className="btn btn-outline">{matchedId?.type}</button>
                    <button className="btn btn-outline">{matchedId?.time}</button>
                </div>
                <div className='mt-4'>
                    <p><span className='font-bold mr-2 mt-2'>Phone: </span>{matchedId?.phone}</p>
                    <p><span className='font-bold mr-2 mt-2'>Email: </span>{matchedId?.email}</p>
                    
                </div>
                {isApplied ? (
        <button className='btn btn-disabled btn-sm mt-4 rounded' disabled>
          Applied
        </button>
      ) : (
        <button
          className='btn btn-accent btn-sm mt-4 rounded'
          onClick={handleApply}
        >
          Apply Now
        </button>
      )}
            </div>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default JobDetails;