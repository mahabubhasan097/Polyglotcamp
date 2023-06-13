import React from 'react';
import useLanguageClasses from '../../hooks/useLanguageClasses';
import useUsers from '../../hooks/useUsers';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const LanguageClasses = () => {
    const [languageClasses] = useLanguageClasses();
    const approvedClasses = languageClasses.filter(
        (languageClass) => languageClass.status === 'approved'
    );
    const [allUsers] = useUsers();
    const { user } = useAuth();
    const currentUser = allUsers.find((alluser) => alluser.email === user?.email);
    const isUserStudent = currentUser?.role === 'student';
    const isUserInstructor = currentUser?.role === 'instructor';
    const isUserAdmin = currentUser?.role === 'admin';
    const isLoggedIn = !!user;
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddClass = classData => {
        if (user && user.email) {
            const addedClass = { classId: classData._id, className: classData.className, classImage: classData.classImage, price: classData.price, instructorName: classData.instructorName, instructorImage: classData.instructorImage, userName: user.displayName, userEmail: user.email }
            fetch('https://b7a12-summer-camp-server-side-mahabubhasan097.vercel.app/addedClasses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(addedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Added Successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'You have already added the class',
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to add class!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#e81e63',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>
            <div className="h-[300px] bg-no-repeat bg-cover bg-gradient-to-r from-[#f7ccf3] to-[#e81e63] bg-blend-overlay flex justify-center items-center">
                <div className="h-[150px] glass p-4 rounded-lg flex items-center">
                    <h1 className="text-4xl uppercase text-white">Our Classes</h1>
                </div>
            </div>
            <div className="container mx-auto py-20">
                <div className="grid md:grid-cols-3 gap-4">
                    {approvedClasses.map((classData) => (
                        <Zoom key={classData._id} triggerOnce>
                            <div className={`card w-full c-border glass ${classData.availableSeats === 0 ? 'bg-red-500' : ''}`}>
                                <figure className="pt-3 px-3 pb-1 relative">
                                    <img
                                        src={classData.classImage}
                                        alt="language classes"
                                        className="h-[300px] w-full c-img-shadow rounded-lg"
                                    />
                                    <span className="bg-[#e81e63] text-white py-1 px-3 rounded-full absolute right-5 bottom-3">
                                        $ {classData.price}
                                    </span>
                                </figure>
                                <div className="p-3">
                                    <div className="ml-3 text-center">
                                        <h2 className="text-[#e81e63] font-bold text-lg">
                                            {classData.className}
                                        </h2>
                                        <p className="pt-1">
                                            <span>Instructor:</span>
                                            <span className="text-black"> {classData.instructorName}</span>
                                        </p>
                                        <p className="pt-1">
                                            <span>Available seats:</span>
                                            <span className="text-black"> {classData.availableSeats}</span>
                                        </p>
                                        <button
                                            className={`bg-[#e81e63] text-white py-3 px-5 rounded-lg mt-3 hover:bg-purple-800 ${classData.availableSeats === 0 || (isUserStudent && !isLoggedIn) || isUserInstructor || isUserAdmin ? 'bg-gray-400 cursor-not-allowed' : ''}`}
                                            disabled={classData.availableSeats === 0 || (isUserStudent && !isLoggedIn) || isUserInstructor || isUserAdmin}
                                            onClick={() => handleAddClass(classData)}
                                        >
                                            Select
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LanguageClasses;


