import React from 'react';
import logo from '../assets/Logo/polyglot.png'
import { Link, Outlet } from 'react-router-dom';
import { FaHome, FaUserAlt, FaWallet } from 'react-icons/fa';
import { SiGoogleclassroom } from 'react-icons/Si';
import useAdmin from '../hooks/useAdmin';
import useStudent from '../hooks/useStudent';
import useInstructor from '../hooks/useInstructor';
import useAuth from '../hooks/useAuth';
const Dashboard = () => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isStudent] = useStudent();
    const [isInstructor] = useInstructor();
    return (
        <div className='flex '>
            <div className='bg-cyan-950 w-[300px] min-h-screen'>
                <div className='py-4'>
                    <img src={logo} className='w-[260px] mx-auto' alt="" />
                </div>
                <div className='px-5 mt-10'>
                    <ul className='text-lg'>
                        {
                            isAdmin ? <>
                                <li className='mb-10'><span className='hover:text-rose-500'><FaHome className='inline mr-2 mb-1'></FaHome> <Link to='/dashboard/adminhome'>Admin Home</Link></span></li>
                                <li className='mb-10'><span className='hover:text-rose-500'><SiGoogleclassroom className='inline mr-2 mb-1'></SiGoogleclassroom> <Link to='/dashboard/manageclasses'>Manage Classes</Link></span></li>
                                <li className='mb-10'><span className='hover:text-rose-500'><FaUserAlt className='inline mr-2 mb-1'></FaUserAlt> <Link to='/dashboard/manageusers'>Manage Users</Link></span></li>
                            </> :
                                <></>
                        }
                        {
                            isInstructor ? <>
                                <li className='mb-10'><span className='hover:text-rose-500'><FaHome className='inline mr-2 mb-1'></FaHome> <Link to='/dashboard/instructorhome'>Instructor Home</Link></span></li>
                                <li className='mb-10'><span className='hover:text-rose-500'><SiGoogleclassroom className='inline mr-2 mb-1'></SiGoogleclassroom> <Link to='/dashboard/addclass'>Add a Class</Link></span></li>
                                <li className='mb-10'><span className='hover:text-rose-500'><SiGoogleclassroom className='inline mr-2 mb-1'></SiGoogleclassroom> <Link to='/dashboard/myclasses'>My Classes</Link></span></li>
                            </> :
                                <></>
                        }
                        {
                            isStudent ? <>
                                <li className='mb-10'><span className='hover:text-rose-500'><FaHome className='inline mr-2 mb-1'></FaHome> <Link to='/dashboard/studenthome'>Student Home</Link></span></li>
                                <li className='mb-10'><span className='hover:text-rose-500'><SiGoogleclassroom className='inline mr-2 mb-1'></SiGoogleclassroom> <Link to='/dashboard/selectedclasses'>My Selected Classes</Link></span></li>
                                <li className='mb-10'><span className='hover:text-rose-500'><SiGoogleclassroom className='inline mr-2 mb-1'></SiGoogleclassroom> <Link to='/dashboard/enrolledclasses'>My Enrolled Classes</Link></span></li>
                                <li className='mb-10'><span className='hover:text-rose-500'><FaWallet className='inline mr-2 mb-1'></FaWallet> <Link to='/dashboard/paymenthistory'>Payment History</Link></span></li>
                            </> :
                                <></>
                        }
                        <div className="divider">O-O-O-O</div>
                        <li className='mb-3'><span className='hover:text-rose-500'><FaHome className='inline mr-2 mb-1'></FaHome> <Link to='/'>Home</Link></span></li>
                    </ul>
                </div>
            </div>
            <div className='grow'>
                <div className='h-[100px] shadow-lg flex justify-end items-center'>
                    {
                        user ? <><span className='text-[#e81e63] mr-3'>{user.displayName}</span>
                            <img className='border-4 border-rose-500 drop-shadow-lg p-0 inline-block mr-4' title={user.displayName ? user.displayName : "No name"} style={{ width: "60px", height: "60px", borderRadius: "50%" }} src={user.photoURL} alt="" /></> : <></>
                    }
                </div>
                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
