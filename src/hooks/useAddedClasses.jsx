//useAddedClasses

import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useAddedClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: addedClass = [] } = useQuery({
        queryKey: ['addedClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/addedClasses?email=${user?.email}`)
            return res.data;
        },
    })

    return [addedClass, refetch]

}
export default useAddedClasses;