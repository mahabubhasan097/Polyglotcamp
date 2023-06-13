import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slider1 from '../../../assets/Slider/Slider1.png'
import slider2 from '../../../assets/Slider/Slider2.png'
import { FaLanguage} from "react-icons/fa";
import { ThemeContextt } from '../../../hooks/ThemeProviderr';
const HomeSwiper = () => {
    const { theme, toggleTheme } = useContext(ThemeContextt);
    return (
        <div className={`${theme === 'dark' ? 'bg-black' : ''}`}>
            <Swiper pagination={true} modules={[Autoplay ,Pagination]} className="mySwiper" autoplay={{ delay: 3500, disableOnInteraction: false }}>
                <SwiperSlide className='relative'>
                    <img src={slider1} alt="" className='d-block mx-auto h-[250px] md:h-[683px]'/>
                    <div className='bg-[#2f2e41]/90 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-6 rounded-lg invisible md:visible'>
                        <h2 className='font-13 md:text-2xl font-bold uppercase'>Immerse Yourself in Language Learning</h2>
                        <div className='flex text-4xl justify-evenly text-[#e81e63] my-3'><FaLanguage></FaLanguage> <FaLanguage></FaLanguage> <FaLanguage></FaLanguage> <FaLanguage></FaLanguage> <FaLanguage></FaLanguage> <FaLanguage></FaLanguage> <FaLanguage></FaLanguage> <FaLanguage></FaLanguage> </div>
                        <p className='font-12'>Dive into the world of language learning at our summer camp. Our dedicated Foreign Language Learning School offers a transformative experience where you'll develop fluency. With expert instructors and an interactive curriculum, join us for a summer adventure.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={slider2} alt="" className='d-block mx-auto h-[250px] md:h-[683px]' />
                    <div className='bg-[#2f2e41]/90 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-6 rounded-lg invisible md:visible'>
                        <h2 className='font-13 md:text-2xl font-bold uppercase'>Discover the Power of Multilingualism</h2>
                        <div className='flex text-4xl justify-evenly text-[#e81e63] my-3'><FaLanguage></FaLanguage> <FaLanguage></FaLanguage> <FaLanguage></FaLanguage> <FaLanguage></FaLanguage> <FaLanguage></FaLanguage> <FaLanguage></FaLanguage> <FaLanguage></FaLanguage> <FaLanguage></FaLanguage> </div>
                        <p className='font-12'>Embrace the power of multilingualism at our dedicated Foreign Language Learning School. Experience the benefits of speaking multiple languages, from enhanced cognition to increased cultural awareness. Join our summer camp to learn languages like Spanish, French, German, and more.</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HomeSwiper;