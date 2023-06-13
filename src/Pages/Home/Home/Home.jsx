import React from 'react';
import HomeSwiper from './HomeSwiper';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import ChooseUs from '../ChooseUs/ChooseUs';

const Home = () => {
    return (
        <>
        <HomeSwiper></HomeSwiper>
        <PopularClasses></PopularClasses>
        <PopularInstructor></PopularInstructor>
        <ChooseUs></ChooseUs>
        </>
    );
};

export default Home;