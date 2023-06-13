import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddClass = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, instructorName, instructorEmail, availableSeats, price} = data;
                const newClass = {className: name,classImage:imgURL,instructorName:instructorName,instructorEmail:instructorEmail,instructorImage:user?.photoURL,availableSeats:availableSeats,totalEnrolledStudent:0, price: parseFloat(price), status:"pending", feedback:""}
                axiosSecure.post('/languageClasses', newClass)
                .then(data => {
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

    };

    return (
        <div className='py-10'>
            <div className='mb-10'><h1 className='text-5xl text-center font-bold'>Add A <span className='text-[#e81e63]'>Class</span></h1></div>
            <form onSubmit={handleSubmit(onSubmit)} className='w-3/4 mx-auto bg-slate-200 c-img-shadow p-4 rounded-lg mt-10'>

                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text text-[#e81e63]">Class Name</span>
                    </label>
                    <input type="text" placeholder="Type Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>

                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text text-[#e81e63]">Class Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>

                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text text-[#e81e63]">Instructor Name</span>
                        </label>
                        <input type="text" {...register("instructorName", { required: true })} placeholder="Type Instructor Name" className="input input-bordered w-full" defaultValue={user?.displayName} readOnly/>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text text-[#e81e63]">Instructor Email</span>
                        </label>
                        <input type="email" {...register("instructorEmail", { required: true })} placeholder="Type Instructor Email" className="input input-bordered w-full" defaultValue={user?.email} readOnly/>
                    </div>
                </div>

                <div className='flex my-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-[#e81e63]">Available Seats</span>
                        </label>
                        <input type="number" placeholder="Type Available Seats"
                            {...register("availableSeats", { required: true })}
                            className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text text-[#e81e63]">Price</span>
                        </label>
                        <input type="number" step='any' placeholder="Type Price"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                </div>

                <input className="btn bg-[#e81e63] mt-10 border-0 text-white block mx-auto" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;