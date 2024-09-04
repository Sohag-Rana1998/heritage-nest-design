import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const usePropertyByEmail = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const {
    data: myProperties = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["myProperties", user?.email],
    queryFn: async () => {
      if (user?.email) {
        const { data } = await axiosPublic.get(
          `/seller-properties?email=${user?.email}`
        );
        console.log(data);
        return data;
      }
    },
  });
  return { myProperties, isLoading, refetch };
};

export default usePropertyByEmail;
