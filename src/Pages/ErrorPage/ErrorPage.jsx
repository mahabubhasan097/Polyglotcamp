import React from 'react';
import errorPic from '../../assets/404/404.jpg';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className='container mx-auto'>
            <div className="min-h-screen flex justify-center items-center">
                <div className='text-center'>
                    <img src={errorPic} className='w-2/4 mx-auto' alt="" />
                    <p className='mt-3'>The page you're looking for cannot be found.</p>
                    <Link to='/' className='text-white bg-[#e81e63] px-5 py-3 mt-5 inline-block rounded-lg hover:bg-black'>Go Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;