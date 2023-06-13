import React, { useContext } from 'react';
import logo from '../../assets/Logo/polyglot.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useStudent from '../../hooks/useStudent';
import useInstructor from '../../hooks/useInstructor';
import { ThemeContextt } from '../../hooks/ThemeProviderr';
const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContextt);
    console.log(theme)
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin()
    const [isStudent] = useStudent()
    const [isInstructor] = useInstructor()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error);
            });
    }
    const navLinks = <>
        <li><Link to='/' className=''>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/languageclasses'>Classes</Link></li>
        {
            isAdmin ?<><li><Link to='/dashboard/adminhome'>Dashboard</Link></li></>:<></>
        }
        {
            isInstructor ?<><li><Link to='/dashboard/instructorhome'>Dashboard</Link></li></>:<></>
        }
        {
            isStudent ?<><li><Link to='/dashboard/studenthome'>Dashboard</Link></li></>:<></>
        }
        {
            user ?
                <>
                <li className='pl-3'><img className='block md:hidden border-4 border-rose-500 drop-shadow-lg p-0' title={user.displayName ? user.displayName : "No name"} style={{ width: "47px", height: "47px", borderRadius: "8px" }} src={user.photoURL} alt="" /></li>
                <li><button onClick={handleLogOut} className="bg-[#e81e63] text-white border-0 px-6 text-center block my-3 md:hidden md:mr-2">Logout</button></li>
                <li><button onClick={toggleTheme} className='block my-3 md:hidden text-center border-2 border-red-300  bg-[#000000] text-white px-6 md:mr-2'>Dark Mode</button></li>
                </> :
                <>
                    <li><Link to='/login' className="bg-[#e81e63] text-white border-0 px-6 text-center block my-3 md:hidden md:mr-2">Login</Link></li>
                    <li><Link to='/signup' className="bg-[#e81e63] text-white border-0 px-6 text-center block md:hidden">Sign Up</Link></li>
                    <li><button onClick={toggleTheme} className='block my-3 md:hidden text-center border-2 border-red-300  bg-[#000000] text-white px-6 md:mr-2'>Dark Mode</button></li>
                </>
        }
    </>
    return (
        <>
            <div className={`navbar h-[100px] shadow-md ${theme === 'dark' ? 'bg-black' : ''}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-base customLinks z-10 ${theme === "dark"? 'dark:text-white':''}`}>
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl p-0"><img src={logo} className='w-60' alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`menu menu-horizontal px-1 text-base customLinks ${theme === "dark"? 'dark:text-white':''}`}>
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? 
                        <>
                        <button onClick={toggleTheme} className='hidden md:inline-flex btn border-2 border-red-300  bg-[#000000] text-white px-6 md:mr-2'>Dark Mode</button>
                        <img className='hidden md:inline-flex border-4 border-rose-500 drop-shadow-lg' title={user.displayName ? user.displayName : "No name"} style={{ width: "47px", height: "47px", borderRadius: "8px" }} src={user.photoURL} alt="" />
                        <button onClick={handleLogOut} className="btn bg-[#e81e63] text-white border-0 px-6 hidden md:inline-flex md:ml-2">Logout</button>
                        </> : 
                        <>
                        <button onClick={toggleTheme} className='hidden md:inline-flex btn border-2 border-red-300  bg-[#000000] text-white px-6 md:mr-2'>Dark Mode</button>
                        <Link to='/login' className="btn bg-[#e81e63] text-white border-0 px-6 hidden md:inline-flex md:mr-2">Login</Link>
                        <Link to='/signup' className="btn bg-[#e81e63] text-white border-0 px-6 hidden md:inline-flex">Sign Up</Link>
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;