import React from 'react';
import useAuth from '../../hooks/useAuth';

const StudentHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h1 className='text-5xl font-bold'>Welome! <span className='text-[#e81e63]'>{user.displayName}</span></h1>
        </div>
    );
};

export default StudentHome;