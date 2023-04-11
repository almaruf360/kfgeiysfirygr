import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const JobCard = (props) => {
    const { logo,title,company_name,type,location,time,salary,id } = props.job;
    return (
        <div>
            <div className='max-w-md w-96 py-4 px-8 bg-white shadow-lg rounded-lg my-12'>
                <div className='m-4'>
                <img src={logo} className='w-16 ' alt='category logo' />
                </div>
                <div className=''>
                    <h2 className='font-bold text-2xl'>{title}</h2>
                    <p className='text-gray-400'>{company_name}</p>
                </div>
                <div className='flex gap-2 mt-4'>
                    <button className="btn btn-outline">{type}</button>
                    <button className="btn btn-outline">{time}</button>
                </div>
                <div className='flex gap-4 mt-4 text-gray-400'><div className='flex justify-center items-center gap-2'><FaMapMarkerAlt></FaMapMarkerAlt>{location}</div> <p>{salary}</p></div>
                <Link to={`/job/${id}`}><button className='btn btn-accent btn-sm mt-4 rounded'>View Details</button></Link>
            </div>
        </div>
    );
};

export default JobCard;