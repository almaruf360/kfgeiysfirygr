import React from 'react';
import { Link } from 'react-router-dom';
import image from './Image.png'

const Banner = () => {
    return (
        <div>
            <div className="banner-container md:grid md:grid-cols-2">
        <div className="mt-36 ml-36">
        <p className="text-6xl w-3/4  text-gray-500 mt-4 font-extrabold">
            One Step Closer To Your Dream Job
          </p>
          <p className=" mt-8 w-3/4">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
          
          <Link to="/">
            <button className="p-2 bg-black text-white hover:bg-green-700 mt-6 rounded-lg font-bold">
              Get Started
            </button>
          </Link>
        </div>

        <div className="mt-16 sm:mr-32 ml-6 ">
          <img src={image} alt="" />
        </div>
      </div>
        </div>
    );
};

export default Banner;