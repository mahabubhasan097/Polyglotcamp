import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const { signIn, googleSignIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'Login Successful!',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                setLoginError(error.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops something is wrong...',
                    text: error.message
                })
                form.reset();
            });
    }

    // const handleGoogleSignIn = () => {
    //     googleSignIn()
    //         .then(result => {
    //             const loggedUser = result.user;
    //             navigate(from, { replace: true });
    //         })
    //         .catch(error => {
    //             form.reset();
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Oops...',
    //                 text: error
    //             });
    //         })
    // }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const userName = result.user.displayName;
                const userEmail = result.user.email;
                const saveUser = { name: userName, email: userEmail, role: 'student' }
                fetch('https://b7a12-summer-camp-server-side-mahabubhasan097.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }else{
                            navigate('/');
                        }
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: error
                        });
                    })
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error
                });
            })
    }

    return (
        <div className="relative flex flex-col justify-center h-[650px] overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-[#e81e63] uppercase">
                    LOGIN
                </h1>
                <form onSubmit={handleLogin} className="mt-6">
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800" >
                            Email
                        </label>
                        <input type="email" name='email' className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40" required/>
                    </div>
                    <div className="mb-2 relative">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-800" >
                            Password
                        </label>
                        <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40" required/>
                        <button type='button' onClick={togglePassword} className='text-3xl absolute right-4 top-[34px]' title={passwordType === "password" ? 'Show Password' : 'Hide Password'}>
                            {passwordType === "password" ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#e81e63] rounded-md hover:bg-rose-900 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>
                <div className="relative flex items-center justify-center w-full mt-6 border border-t">
                    <div className="absolute px-5 bg-white">Or</div>
                </div>
                <div className="flex mt-4 gap-x-2">
                    <button onClick={handleGoogleSignIn} type="button" className="text-3xl flex items-center justify-center w-1/2 mx-auto p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-violet-600" >
                        <FcGoogle></FcGoogle>
                    </button>
                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    Don't have an account?
                    <Link to='/signup' className="font-medium text-[#e81e63] hover:underline" >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>

    );
};

export default Login;