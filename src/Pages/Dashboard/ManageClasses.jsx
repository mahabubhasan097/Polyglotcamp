import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManageClasses = () => {
    const [selectedModalIndex, setSelectedModalIndex] = useState(null);
    const [selectedDataId, setSelectedDataId] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const { data: languageClasses = [], refetch } = useQuery(['languageClasses'], async () => {
        const res = await axiosSecure.get('/languageClasses')
        return res.data;
    })

    const handleApprove = dt => {
        fetch(`https://b7a12-summer-camp-server-side-mahabubhasan097.vercel.app/languageClasses/approve/${dt._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Class Approved!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDenied = dt => {
        fetch(`https://b7a12-summer-camp-server-side-mahabubhasan097.vercel.app/languageClasses/denied/${dt._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Class Denied!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleFeedback = (event) => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;
        const id = selectedDataId;
        const updatedFeedback = { feedback }

        fetch(`https://b7a12-summer-camp-server-side-mahabubhasan097.vercel.app/languageClasses/feedback/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFeedback)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    form.reset();
                    setSelectedDataId('');
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `Feedback Submitted!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    const openModal = (index, dataId) => {
        setSelectedModalIndex(index);
        setSelectedDataId(dataId);
        window[`my_modal_${index}`].showModal();
      };
    
      const closeModal = index => {
        setSelectedModalIndex(null);
        setSelectedDataId('');
        window[`my_modal_${index}`].close();
      };

    return (
        <div className='py-10 mx-10'>
            <div className='mb-10'><h1 className='text-5xl text-center font-bold'>Manage <span className='text-[#e81e63]'>Classes</span></h1></div>
            <div className="overflow-x-auto">
                <table className="table bg-black text-[#e81e63]">
                    {/* head */}
                    <thead className='text-center text-white text-lg'>
                        <tr>
                            <th>No.</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center text-lg'>
                        {
                            languageClasses.map((data, index) =>
                                <>
                                    <tr key={data._id} className='border-0'>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="flex items-center justify-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12 bg-white rounded-full">
                                                        <img src={data.classImage} alt="" className='rounded-full border-4 border-rose-500' />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {data.className}
                                        </td>
                                        <td>{data.instructorName}</td>
                                        <td>{data.instructorEmail}</td>
                                        <td>{data.availableSeats}</td>
                                        <td> ${data.price}</td>
                                        <td> {data.status}</td>
                                        <td>
                                            <button onClick={() => handleApprove(data)} className={`btn btn-outline btn-secondary ${(data.status === 'approved' || data.status === 'denied') ? 'cursor-not-allowed' : ''}`} disabled={data.status === 'approved' || data.status === 'denied'}>Approve</button>
                                            <button onClick={() => handleDenied(data)} className={`btn btn-outline btn-secondary mx-2 ${(data.status === 'approved' || data.status === 'denied') ? 'cursor-not-allowed' : ''}`} disabled={data.status === 'approved' || data.status === 'denied'}>Deny</button>
                                            <button className="btn btn-outline btn-secondary" onClick={() => openModal(index, data._id)}>Send Feedback</button>
                                            <dialog id={`my_modal_${index}`} className="modal">
                                                <form onSubmit={handleFeedback} method="dialog" className="modal-box bg-white text-black border-4 border-sky-600">
                                                    <textarea name='feedback' className="textarea textarea-secondary w-full text-white text-lg" placeholder="Write Feedback" rows='5'></textarea>
                                                    <input type="submit" value="Submit Feedback" className="btn bg-[#e81e63] border-0 text-white" />
                                                    <div className="modal-action">
                                                        {/* if there is a button in form, it will close the modal */}
                                                        <button className="btn bg-[#e81e63] border-0 text-white" onClick={() =>closeModal(index)}>Close</button>
                                                    </div>
                                                </form>
                                            </dialog>
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

export default ManageClasses;