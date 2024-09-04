import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
const usePropertyById = (id) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: property = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["single-property"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/property/${id}`);

      return data;
    },
  });
  return { property, isLoading, refetch };
};

export default usePropertyById;
