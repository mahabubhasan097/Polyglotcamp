import React, { useContext } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { ThemeContextt } from '../../../hooks/ThemeProviderr';

const SingleClass = ({ classData }) => {
    const { theme, toggleTheme } = useContext(ThemeContextt);
    return (
        <>
            <Zoom triggerOnce>
                <div className={`card w-full c-border glass ${theme === 'dark' ? 'bg-slate-200' : ''}`}>
                    <figure className='pt-3 px-3 pb-1 relative'>
                        <img src={classData.classImage} alt="language classes" className='h-[190px] md:h-[300px] w-full c-img-shadow rounded-lg' />
                        {/* <img src={classData.instructorImage} alt="" className='absolute w-[70px] h-[70px] rounded-full border-4 border-rose-500 right-5 bottom-3 shadow-md'/> */}
                        <span className='bg-[#e81e63] text-white py-1 px-3 rounded-full absolute right-5 bottom-3'>$ {classData.price}</span>
                    </figure>
                    <div className="card-body myp-15">
                        <div className="flex justify-center align-middle">
                            <div>
                                <img src={classData.instructorImage} alt="" className='w-[60px] h-[60px] rounded-full border-4 border-rose-500 shadow-md' />
                            </div>
                            <div className=' ml-3'>
                                <h2 className=" text-[#e81e63] font-bold text-lg font-16">{classData.className}</h2>
                                <div className='flex justify-between align-middle'>
                                    <p className='pt-1 font-13'><small className='text-slate-600'>BY </small><span className='text-black'>{classData.instructorName}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        </>
    );
};

export default SingleClass;