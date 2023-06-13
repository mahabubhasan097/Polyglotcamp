// import React from 'react';
// import { useParams } from 'react-router-dom';
// import useAddedClasses from '../../hooks/useAddedClasses';
// import { Elements } from '@stripe/react-stripe-js';
// import CheckoutForm from './CheckoutForm';
// import { loadStripe } from '@stripe/stripe-js';
// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
// const Payment = () => {
//     const { id } = useParams();
//     const [addedClass] = useAddedClasses();
//     const getClassToPay = addedClass.find(data => data._id === id)
//     const price = parseFloat(getClassToPay.price.toFixed(2))
//     return (
//         <div>
//             <div className='py-10'>
//                 <h1 className='text-5xl text-center font-bold'>Payment <span className='text-[#e81e63]'>Procedure</span></h1>
//                 <div>
//                     <Elements stripe={stripePromise}>
//                         <CheckoutForm getClassToPay={getClassToPay} price={price}></CheckoutForm>
//                     </Elements>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Payment;


import React from 'react';
import { useParams } from 'react-router-dom';
import useAddedClasses from '../../hooks/useAddedClasses';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const { id } = useParams();
    const [addedClass] = useAddedClasses();
    const getClassToPay = addedClass.find(data => data._id === id);
    const price = getClassToPay ? parseFloat(getClassToPay.price.toFixed(2)) : 0;

    return (
        <div>
            <div className='py-10'>
                <h1 className='text-5xl text-center font-bold'>
                    Payment <span className='text-[#e81e63]'>Procedure</span>
                </h1>
                <div>
                    {
                        price === 0 ? <><p className='text-center text-2xl my-3 text-red-600'>Price is 0. Nothing to pay here! Go back to My Selected Classes if any payment is due.</p></> :
                            <>
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm getClassToPay={getClassToPay} price={price} />
                                </Elements>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Payment;