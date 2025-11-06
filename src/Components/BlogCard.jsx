import React from 'react';

const BlogCard = ({ blog }) => {
    const { question, date, answer } = blog;
    return (
        <>
            <div className='bg-white w-full rouded-xl p-4 space-y-8 my-10'>
                <h1 className='text-2xl font bold'>{question}</h1>
                <div className=" border-y-2 border-gray-400 border-dashed py-3">
                <p className='text-gray-500'>Answer:</p>
                <h1 className='text-lg font-bold'>{answer}</h1>
                </div>
                <p className='text-gray-500'>Added at {date}</p>
            </div>
        </>
    );
};

export default BlogCard;