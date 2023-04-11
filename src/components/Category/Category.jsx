import React from 'react';
import { useState,useEffect } from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';

const Category = () => {
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/c8d53733-d563-4c6c-a519-70364c63caa2")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

    return (
        <div>
            {/* Dynamic data load */}
            <h1 className="text-4xl text-black font-extrabold mt-16 text-center">
        Job Category List
      </h1>
      <p className='text-gray-400 text-center mt-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
				<div className=' md:grid md:grid-cols-4 gap-4 ml-8 mr-8'>
					{categories.map((category) => (
						<CategoryCard
							category={category}
							key={category.id}
						></CategoryCard>
					))}
				</div>
        </div>
    );
};

export default Category;