import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import BlogCard from '../Components/BlogCard';

const Blogs = () => {
    const blogs = useLoaderData();
    console.log(blogs);
    return (
        <div className=''>
            <div>
            <h1 className= 'text-2xl md:text-5xl font-bold text-center '>Blogs</h1>
            <p className='mt-5 text-center'>Let's explore some basic concepts that will make you a good developer </p>
            </div>
            <div className='px-20'>
            {
                blogs.map((blog)=> <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}> <BlogCard blog={blog} key={blog.id}></BlogCard></Suspense>)
            }
            </div>
            
        </div>
    );
};

export default Blogs;