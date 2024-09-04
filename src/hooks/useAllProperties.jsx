import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useAllProperties = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: properties = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-properties"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/all-properties");

      return data;
    },
  });
  return { properties, isLoading, refetch };
};

export default useAllProperties;
