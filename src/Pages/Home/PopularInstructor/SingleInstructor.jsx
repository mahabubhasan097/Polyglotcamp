import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { FaEnvelope, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SingleInstructor = ({ instructor }) => {
    return (
        <Zoom triggerOnce>
            <div className="card card-side bg-[#e81e63] shadow-xl">
                <figure><img src={instructor.instructorImage} alt="instructor" className='w-[110px] h-[200px] md:w-[250px] md:h-[300px]' /></figure>
                <div className="card-body text-white items-center justify-center myp-15">
                    <span>
                        <h2 className="card-title justify-center font-16">{instructor.instructorName}</h2>
                        <p className='my-3 font-13'><FaEnvelope className='inline'></FaEnvelope> {instructor.instructorEmail}</p>
                        <span className='flex md:text-3xl justify-evenly'><FaFacebook className='hover:text-yellow-200 cursor-pointer'></FaFacebook> <FaTwitter className='hover:text-yellow-200 cursor-pointer'></FaTwitter><FaLinkedin className='hover:text-yellow-200 cursor-pointer'></FaLinkedin></span>
                    </span>
                </div>
            </div>
        </Zoom>
    );
};

export default SingleInstructor;