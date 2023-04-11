import React from 'react';

const CategoryCard = (props) => {
    const { logo,title,jobs } = props.category;
    return (
        <div>
            <div className='max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-12'>
                <div className='m-4'>
                <img src={logo} className='w-10 ' alt='category logo' />
                </div>
                <div className=''>
                    <h2 className='font-bold text-2xl'>{title}</h2>
                    <p className='text-gray-400'>Available Jobs: {jobs}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;