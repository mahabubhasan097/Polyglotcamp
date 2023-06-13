// import { useQuery } from '@tanstack/react-query'
// import useAxiosSecure from './useAxiosSecure';
// import useAuth from './useAuth';
// const usePaymentHistory = () => {
//     const { user, loading } = useAuth();
//     const [axiosSecure] = useAxiosSecure();
//     const { refetch, data: paymentHistory = [] } = useQuery({
//         queryKey: ['paymentHistories', user?.email],
//         enabled: !loading,
//         queryFn: async () => {
//             const res = await axiosSecure(`/paymentHistories?email=${user?.email}`)
//             return res.data;
//         },
//     })

//     return [paymentHistory, refetch]

// }
// export default usePaymentHistory;

import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const usePaymentHistory = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: paymentHistory = [] } = useQuery({
        queryKey: ['paymentHistories', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/paymentHistories?email=${user?.email}`)
            // Sort paymentHistory array in descending order based on date
            const sortedPaymentHistory = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
            return sortedPaymentHistory;
        },
    });

    return [paymentHistory, refetch];
};

export default usePaymentHistory;
