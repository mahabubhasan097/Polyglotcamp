// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";

// const useUsers = () => {
//     const [axiosSecure] = useAxiosSecure();
//     const { user, loading } = useAuth();
//     const {data: allusers = [], refetch} = useQuery({
//         queryKey: ['allusers'],
//         enabled: !loading,
//         queryFn: async() => {
//             const res = await axiosSecure('/allusers');
//             return res.data;
//         }
//     })

//     return [allusers, loading, refetch]
// }

// export default useUsers;

import { useQuery } from "@tanstack/react-query";
const useUsers = () => {
    const {data: allusers = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['allusers'],
        queryFn: async() => {
            const res = await fetch('https://b7a12-summer-camp-server-side-mahabubhasan097.vercel.app/allusers');
            return res.json();
        }
    })

    return [allusers, loading, refetch]
};

export default useUsers;