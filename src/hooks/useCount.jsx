import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';


const useCount = (search, minPrice, maxPrice) => {
  const axiosPublic=useAxiosPublic()
  const {
    data: count = 0,
    isPending,
    refetch: reload,
  } = useQuery({
    queryKey: ['get-count'],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/count-properties?status=Verified&search=${search}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      const count = data.count;
      console.log(count);
      return count;
    },
  });
  return { count, isPending, reload };
};

export default useCount;
