import React, { useContext } from 'react';
import { FaLanguage } from 'react-icons/fa';
import useLanguageClasses from '../../../hooks/useLanguageClasses';
import SingleClass from './SingleClass';
import { ThemeContextt } from '../../../hooks/ThemeProviderr';

const PopularClasses = () => {
    const { theme, toggleTheme } = useContext(ThemeContextt);
    const [languageClasses] = useLanguageClasses();
    const sortedClasses = languageClasses.sort(
        (a, b) => b.totalEnrolledStudent - a.totalEnrolledStudent
    );
    const topClasses = sortedClasses.slice(0, 6);
    return (
        <div className={`myp-10 py-10 md:py-20 bg-gradient-to-b relative ${theme === 'dark' ? 'from-[#000000] to-[#000000]' : 'from-[#ffffff] to-[#ffcfdd]'}`}>
            <div className='text-center mb-14'>
                <h1 className='font-20 md:text-4xl font-bold text-[#e81e63]'><span className='flex justify-center'><FaLanguage className='mr-2'></FaLanguage>Explore Our Most Popular Classes<FaLanguage className='ml-2'></FaLanguage></span></h1>
                <p className='font-13 text-base text-white bg-[#e81e63] w-fit mx-auto rounded-lg p-2 mt-2'>Embark on a language learning adventure with our highly popular classes. Discover new cultures and broaden your horizons</p>
            </div>
            <div className='container mx-auto'>
                <div className='grid md:grid-cols-3 gap-4'>
                    {topClasses.map((classData) => (
                        <SingleClass key={classData._id} classData={classData} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularClasses;