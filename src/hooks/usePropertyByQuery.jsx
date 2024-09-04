import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";

const usePropertyByQuery = (
  currentPage,
  itemsPerPage,
  searchText,
  minPrice,
  maxPrice,
  location
) => {
  const axiosPublic = useAxiosPublic();
  const {
    data = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["pagination-properties"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/properties?page=${currentPage}&size=${itemsPerPage}&search=${searchText}&minPrice=${minPrice}&maxPrice=${maxPrice}&location=${
          location || ""
        }`
      );

      return data;
    },
  });
  return { data, isLoading, refetch };
};

export default usePropertyByQuery;
