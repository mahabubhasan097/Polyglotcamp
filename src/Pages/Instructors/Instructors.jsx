import React from 'react';
import useLanguageClasses from '../../hooks/useLanguageClasses';
import { FaEnvelope, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Zoom } from 'react-awesome-reveal';

const Instructors = () => {
    const [languageClasses] = useLanguageClasses();

    // Get unique instructors from languageClasses
    const uniqueInstructors = [];
    const instructorDetails = [];

    // Iterate over languageClasses and select unique instructors
    languageClasses.forEach((classData) => {
        if (!uniqueInstructors.includes(classData.instructorName)) {
            uniqueInstructors.push(classData.instructorName);
            instructorDetails.push(classData);
        }
    });
    return (
        <div>
            <div className='h-[300px] bg-no-repeat bg-cover bg-gradient-to-r from-[#f7ccf3] to-[#e81e63] bg-blend-overlay flex justify-center items-center'>
                <div className='h-[150px] glass p-4 rounded-lg flex items-center'>
                    <h1 className='text-4xl uppercase text-white'>Our Instructors</h1>
                </div>
            </div>
            <div className='container mx-auto py-20'>
                <div className='grid md:grid-cols-2 gap-4'>
                    {instructorDetails.map((instructor) => (
                        <Zoom key={instructor._id} triggerOnce>
                            <div className="card card-side bg-[#e81e63] c-img-shadow">
                                <figure><img src={instructor.instructorImage} alt="instructor" className='w-[250px] h-[300px]' /></figure>
                                <div className="card-body text-white items-center justify-center">
                                    <span>
                                        <h2 className="card-title justify-center">{instructor.instructorName}</h2>
                                        <p className='my-3'><FaEnvelope className='inline'></FaEnvelope> {instructor.instructorEmail}</p>
                                        <span className='flex text-3xl justify-evenly'><FaFacebook className='hover:text-sky-300 cursor-pointer'></FaFacebook> <FaTwitter className='hover:text-sky-300 cursor-pointer'></FaTwitter><FaLinkedin className='hover:text-sky-300 cursor-pointer'></FaLinkedin></span>
                                    </span>
                                </div>
                            </div>
                        </Zoom>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Instructors;