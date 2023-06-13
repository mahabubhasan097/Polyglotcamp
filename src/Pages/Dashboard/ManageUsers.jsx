import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/allusers')
        return res.data;
    })

    const handleMakeAdmin = data =>{
        fetch(`https://b7a12-summer-camp-server-side-mahabubhasan097.vercel.app/users/admin/${data._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `This user is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeInstructor = data =>{
        fetch(`https://b7a12-summer-camp-server-side-mahabubhasan097.vercel.app/users/instructor/${data._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `This user is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    return (
        <div className='py-10 mx-10'>
            <div className='mb-10'><h1 className='text-5xl text-center font-bold'>Selected <span className='text-[#e81e63]'>Classes</span></h1></div>
            <div className="overflow-x-auto">
                <table className="table bg-black text-[#e81e63]">
                    {/* head */}
                    <thead className='text-center text-white text-lg'>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center text-lg'>
                        {
                            users.map((data, index) =>
                                <>
                                    <tr key={data._id} className='border-0'>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="flex items-center justify-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12 bg-white rounded-full">
                                                        <img src={data?.userImage} alt="" className='rounded-full border-4 border-rose-500' />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {data.name}
                                        </td>
                                        <td>{data.email}</td>
                                        <td>{data.role}</td>
                                        <td>
                                            <button onClick={() => handleMakeAdmin(data)} className="btn btn-outline btn-secondary mr-2" disabled={data.role === 'admin'}>Make Admin</button>
                                            <button onClick={() => handleMakeInstructor(data)} className="btn btn-outline btn-secondary mr-2" disabled={data.role === 'instructor'}>Make Instructor</button>
                                        </td>
                                    </tr>
                                </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;