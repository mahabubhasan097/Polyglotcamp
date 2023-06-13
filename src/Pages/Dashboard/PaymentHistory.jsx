import React from 'react';
import usePaymentHistory from '../../hooks/usePaymentHistory';

const PaymentHistory = () => {
    const [paymentHistory, refetch] = usePaymentHistory();
    return (
        <div className='py-10 mx-10'>
            <div className='mb-10'><h1 className='text-5xl text-center font-bold'>Payment <span className='text-[#e81e63]'>History</span></h1></div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table bg-black text-[#e81e63]">
                        {/* head */}
                        <thead className='text-center text-white text-lg'>
                            <tr>
                                <th>No.</th>
                                <th>Class Image</th>
                                <th>Class Name</th>
                                <th>Transaction ID</th>
                                <th>Date</th>
                                <th>Payment Status</th>
                            </tr>
                        </thead>
                        <tbody className='text-center text-lg'>
                            {
                                paymentHistory.map((data, index) =>
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
                                            <td>{data.transactionId}</td>
                                            <td>{new Date(data.date).toLocaleDateString()} {new Date(data.date).toLocaleTimeString()}</td>
                                            <td><span className='text-green-500'>Paid</span></td>
                                        </tr>
                                    </>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;