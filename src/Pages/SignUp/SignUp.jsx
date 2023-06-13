import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = data => {
        if (data.password === data.confirmpassword) {

            createUser(data.email, data.password)
                .then(result => {
                    const loggedUser = result.user;
                    updateUserProfile(data.name, data.photoURL)
                        .then(() => {
                            const saveUser = { name: data.name, email: data.email,userImage: data.photoURL, role: 'student' }
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
                                        reset();
                                        Swal.fire({
                                            position: 'top-end',
                                            icon: 'success',
                                            title: 'User created successfully.',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                        navigate('/');
                                    }
                                })
                        })
                        .catch(error => console.log(error))
                })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password and Confirm Password did not match!'
            })
        }
    };

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
        <div className="relative flex flex-col justify-center h-[750px] overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-[#e81e63] uppercase">
                    Sign Up
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                    <div className="mb-2">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-800" >
                            Name
                        </label>
                        <input type="text" {...register("name", { required: true })} className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {errors.name && <span className="text-red-600">Name can not be empty</span>}
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800" >
                            Email
                        </label>
                        <input type="email" {...register("email", { required: true })} className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {errors.email && <span className="text-red-600">Email can not be empty</span>}
                    </div>
                    <div className="mb-2 relative">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-800" >
                            Password
                        </label>
                        <input type='password' {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$%^&*])/
                        })} className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        {errors.password?.type === 'required' && <p className="text-red-600">Password can not be empty</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be between 6-20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one capital letter and one special character.</p>}
                    </div>
                    <div className="mb-2 relative">
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-800" >
                            Confirm Password
                        </label>
                        <input type='password' {...register("confirmpassword", { required: true })} className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="photo" className="block text-sm font-semibold text-gray-800" >
                            Photo URL
                        </label>
                        <input type="text" {...register("photoURL", { required: true })} className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-rose-400 focus:ring-rose-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mt-6">
                        <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#e81e63] rounded-md hover:bg-rose-900 focus:outline-none focus:bg-purple-600">
                            Sign Up
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
                    Already have an account?
                    <Link to='/login' className="font-medium text-[#e81e63] hover:underline" >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;