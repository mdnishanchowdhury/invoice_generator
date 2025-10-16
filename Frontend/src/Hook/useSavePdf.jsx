import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useSavePdf = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    //tanStack query
    const { refetch, data: savePdf = [] } = useQuery({
        queryKey: ['savePdf', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/savePdf/user/${user.email}`);
            return res.data;
        }
    });
    return [savePdf, refetch]
}

export default useSavePdf;