import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";

const usePropertyByQuery = (
  currentPage,
  itemsPerPage,
  search,
  minPrice,
  maxPrice
) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: allProperties = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["pagination-properties"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/properties?page=${currentPage}&size=${itemsPerPage}&search=${search}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      console.log(data);
      return data;
    },
  });
  return { allProperties, isLoading, refetch };
};

export default usePropertyByQuery;
