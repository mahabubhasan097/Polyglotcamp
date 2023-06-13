import React, { useContext } from 'react';
import { FaLanguage } from 'react-icons/fa';
import useLanguageClasses from '../../../hooks/useLanguageClasses';
import SingleInstructor from './SingleInstructor';
import { ThemeContextt } from '../../../hooks/ThemeProviderr';

const PopularInstructor = () => {
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

    // Get 6 distinct instructors
    const topInstructors = instructorDetails.slice(0, 6);
    const { theme, toggleTheme } = useContext(ThemeContextt);

    return (
        <div className={`myp-10 py-10 md:py-20 bg-gradient-to-b  ${theme === 'dark' ? 'from-[#000000] to-[#000000]' : 'from-[#ffffff] to-[#ffcfdd]'}`}>
            <div className='text-center mb-14'>
                <h1 className='font-20 md:text-4xl font-bold text-[#e81e63]'><span className='flex justify-center'><FaLanguage className='mr-2'></FaLanguage>Meet Our Instructors<FaLanguage className='ml-2'></FaLanguage></span></h1>
                <p className='text-base text-white bg-[#e81e63] w-fit mx-auto rounded-lg p-2 mt-2 font-13'>Our super talented instructors will make every class full of fun and knowledge. Join their classes quickly!</p>
            </div>
            <div className='container mx-auto'>
                <div className='grid md:grid-cols-2 gap-4'>
                    {topInstructors.map((instructor) => (
                        <SingleInstructor key={instructor._id} instructor={instructor} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default PopularInstructor;