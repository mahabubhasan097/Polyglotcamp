import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useEnrolledClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: enrolledClass = [] } = useQuery({
        queryKey: ['enrolledClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/enrolledClasses?email=${user?.email}`)
            return res.data;
        },
    })

    return [enrolledClass, refetch]

}
export default useEnrolledClasses;