import React from 'react';
import useAddedClasses from '../../hooks/useAddedClasses';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import Dashboard from '../../Layout/DashBoard';

const SelectedClasses = () => {
    const [addedClass, refetch] = useAddedClasses();
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You action can not be reverted!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b7a12-summer-camp-server-side-mahabubhasan097.vercel.app/addedClasses/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Class has been deleted.',
                                'success'
                            )
                        }
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
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center text-lg'>
                        {
                            addedClass.map((data, index) =>
                                <>
                                    <tr key={data._id} className='border-0'>
                                        <td>{index+1}</td>
                                        <td>
                                            <div className="flex items-center justify-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12 bg-white rounded-full">
                                                        <img src={data.classImage} alt="" className='rounded-full border-4 border-rose-500'/>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {data.className}
                                        </td>
                                        <td>{data.instructorName}</td>
                                        <td> ${data.price}</td>
                                        <th>
                                        <button onClick={() => handleDelete(data)} className="btn btn-outline btn-secondary mr-2">Delete</button>
                                        <button className="btn btn-outline btn-secondary"><Link to={`/dashboard/payment/${data._id}`}>Pay</Link></button>
                                        </th>
                                    </tr>
                                </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;