import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
const useGetMyClasses = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: myClass = [] } = useQuery({
        queryKey: ['myClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/myClasses?email=${user?.email}`)
            return res.data;
        },
    })

    return [myClass, refetch]

}
export default useGetMyClasses;