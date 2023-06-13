import { useQuery } from "@tanstack/react-query";
const useLanguageClasses = () => {
    const {data: languageClasses = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['languageClasses'],
        queryFn: async() => {
            const res = await fetch('https://b7a12-summer-camp-server-side-mahabubhasan097.vercel.app/languageClasses');
            return res.json();
        }
    })

    return [languageClasses, loading, refetch]
};

export default useLanguageClasses;