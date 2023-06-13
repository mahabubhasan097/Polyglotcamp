import React, { useContext } from 'react';
import { Slide, Zoom } from 'react-awesome-reveal';
import { ThemeContextt } from '../../../hooks/ThemeProviderr';

const ChooseUs = () => {
    const { theme, toggleTheme } = useContext(ThemeContextt);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <img src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full' alt="" />
                </div>
                <div className={`flex py-4 md:py-0 items-center  ${theme === 'dark' ? 'bg-slate-800' : 'bg-pink-100'}`}>
                    <Slide direction="right" triggerOnce>
                        <div className='center-sm md:ml-20'>
                            <p className='text-[#e81e63]'>Why Choose Us</p>
                            <h1 className={`text-2xl md:text-6xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Our Facilities</h1>
                            <div className='mt-5'>
                                <p className='flex justify-center md:justify-start items-center'><img src="https://img.icons8.com/?size=512&id=111275&format=png" className='w-[100px]' alt="" /> <span className={`md:text-2xl ${theme === 'dark' ? 'text-white' : 'text-black'}`}>--Our Awesome Teachers</span></p>
                                <p className='flex justify-center md:justify-start items-center'><img src="https://img.icons8.com/?size=512&id=DEiiONGr4Fjl&format=png" className='w-[100px]' alt="" /> <span className={`md:text-2xl  ${theme === 'dark' ? 'text-white' : 'text-black'}`}>--Our Language Reseach Facility</span></p>
                                <p className='flex justify-center md:justify-start items-center'><img src="https://img.icons8.com/?size=512&id=wHmVlqeBVCNT&format=png" className='w-[100px]' alt="" /> <span className={`md:text-2xl  ${theme === 'dark' ? 'text-white' : 'text-black'}`}>--Cultural Diversity</span></p>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
            <div className={`h-[200px] md:h-[300px] bg-no-repeat bg-cover bg-gradient-to-r  bg-blend-overlay flex flex-col justify-center items-center ${theme === 'dark' ? 'from-[#353535] to-[#88002d]' : 'from-[#f7ccf3] to-[#e81e63]'}`}>
                <Zoom triggerOnce>
                    <h1 className='md:text-5xl text-white mb-4 text-center'>Enjoy The Better Learning Way At <span className='font-bold'>POLYGLOTCAPM</span></h1>
                    <div className='glass p-2 md:p-4 rounded-lg flex items-center'>
                        <button className='md:text-2xl uppercase text-white'>Discover More..</button>
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default ChooseUs;