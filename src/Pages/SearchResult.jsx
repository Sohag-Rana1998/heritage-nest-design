import React, { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import usePropertyByQuery from "../hooks/usePropertyByQuery";
import useCount from "../hooks/useCount";
import { Link } from "react-router-dom";

const SearchResult = () => {
  // const { searchText } = useParams();
  // console.log(searchText);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const { count, reload, isPending } = useCount(search, minPrice, maxPrice);
  console.log(loader);
  const { allProperties, refetch, isLoading } = usePropertyByQuery(
    currentPage,
    itemsPerPage,
    search,
    minPrice,
    maxPrice
  );

  useEffect(() => {
    setTimeout(setLoader, 1300, false);
  }, []);

  console.log(count);

  const totalPage = Math.ceil(parseInt(count) / itemsPerPage);

  const pageArray = [...Array(totalPage).keys()].map((element) => element + 1);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoader(true);
    setMinPrice(0);
    setMaxPrice(0);
    const searchText = e.target.search.value;
    setSearch(searchText);
    setTimeout(refetch, 500);
    setTimeout(reload, 500);
    setTimeout(setLoader, 1000, false);
    e.target.reset();
  };

  return (
    <div className="max-w-7xl w-full mx-auto mt-20">
      <div className="w-full md:w-[70%]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-b pb-5 mb-8">
          <button className="flex btn hover:bg-[#07488a]  justify-center items-center gap-2 bg-[#0059B1] hover: text-white px-6 py-4 rounded-[4px]">
            properties (400)
          </button>
          <button className="flex btn bg-[#ECF5FF] text-black hover:bg-[#0059B1]  justify-center items-center gap-2   hover:text-white px-6 py-4 rounded-[4px]">
            New Projects (400)
          </button>
          <button className="flex btn bg-[#ECF5FF] text-black hover:bg-[#0059B1]  justify-center items-center gap-2  hover:text-white px-6 py-4 rounded-[4px]">
            Pre-launch offers
          </button>
        </div>
        <div>
          <h4 className="text-3xl font-bold mb-8">400 results for rental </h4>

          <div className="flex flex-col gap-8">
            {/* card */}
            {allProperties?.map((property) => (
              <div key={property._id}>
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 p-6 bg-[#F9FAFB] ">
                  <div className="h-52 w-full md:w-[25%] rounded-md">
                    <img
                      src={property.image}
                      alt=""
                      className="h-full w-full rounded-md"
                    />
                  </div>
                  <div className="w-full">
                    <div className="text-2xl font-bold flex justify-between items-start gap-4 mb-4">
                      <h3 className="w-full">{property.title}</h3>
                      <h3 className="w-[20%]">${property.maximumPrice}</h3>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <p className="flex items-center gap-2 w-full">
                        {" "}
                        <GrLocation className="text-[#EE6611] text-xl" />{" "}
                        {property.location}
                      </p>
                      <Link to={"property-details"}>
                        {" "}
                        <button className="px-4 py-2 w-40 bg-white !rounded-none text-black text-lg font-bold btn btn-outline">
                          Bid Property
                        </button>
                      </Link>
                    </div>

                    <div className="flex items-center gap-3">
                      <h6 className="text-xl font-medium ">Property Details</h6>
                      <div className="divider flex-1"></div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-16 h-16 rounded-md">
                          <img
                            className="w-full h-full"
                            src="https://i.postimg.cc/4xYCh68C/Screenshot-7.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold">Total Area</h4>
                          <p>891 sqft</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-16 h-16 rounded-md">
                          <img
                            className="w-full h-full"
                            src="https://i.postimg.cc/sD6dX649/Screenshot-8.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold">Status</h4>
                          <p>Ready to move</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-16 h-16 rounded-md">
                          <img
                            className="w-full h-full"
                            src="https://i.postimg.cc/L66FmKL8/Screenshot-9.png"
                            alt=""
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold">Total Area</h4>
                          <p>891 sqft</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="divider w-full my-5"></div>
      <div>
        {count > 5 ? (
          <div className="flex justify-start items-center text-white my-5">
            <div className="flex">
              <a
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                  setTimeout(refetch, 500);
                  setLoader(true);
                  setTimeout(setLoader, 1000, false);
                }}
                className={
                  currentPage == 1
                    ? " hidden"
                    : "px-4 py-2 mx-1 text-black capitalize bg-[#ECF5FF] rounded-md  dark:bg-gray-80 cursor-pointer hover:bg-[#0059B1] hover:text-white"
                }
              >
                <div className="flex items-center -mx-1">
                  <span className="mx-1">Previous</span>
                </div>
              </a>

              {pageArray?.map((page) => (
                <button
                  onClick={() => {
                    setCurrentPage(page);
                    setTimeout(refetch, 500);
                    setLoader(true);
                    setTimeout(setLoader, 1000, false);
                  }}
                  key={page}
                  className={
                    currentPage == page
                      ? "px-4 py-2 hidden md:block mx-1 transition-colors duration-300 transform bg-[#0059B1] rounded-md sm:inline focus:outline-none  !border-0   hover:text-white  "
                      : "px-4 py-2 mx-1 text-black capitalize bg-[#ECF5FF] rounded-md  dark:bg-gray-80 cursor-pointer hover:bg-[#0059B1] hover:text-white "
                  }
                >
                  {page}
                </button>
              ))}

              <a
                className={
                  currentPage == pageArray.length
                    ? "hidden"
                    : "px-4 py-2 mx-1 text-black capitalize bg-[#ECF5FF] rounded-md  dark:bg-gray-80 cursor-pointer hover:bg-[#0059B1] hover:text-white "
                }
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                  setTimeout(refetch, 500);
                  setLoader(true);
                  setTimeout(setLoader, 1000, false);
                }}
              >
                <div className="flex items-center cursor-pointer -mx-1">
                  <span className="mx-1">Next</span>
                </div>
              </a>
            </div>
          </div>
        ) : (
          <div>
            <div className="w-full flex flex-col justify-center mt-5">
              {verifiedProperties && verifiedProperties.length === 0 ? (
                <h3 className="text-center text-3xl font-bold my-10">
                  {" "}
                  No Job Property Found
                </h3>
              ) : (
                <></>
              )}
              <div className="w-full flex  justify-center">
                <button
                  onClick={() => {
                    setSearch("");
                    setMinPrice(0);
                    setMaxPrice(0);
                    setTimeout(refetch, 500);
                    setTimeout(reload, 500);
                    setLoader(true);
                    setTimeout(setLoader, 1000, false);
                  }}
                  className="btn w-[40] bg-blue-500 text-white text-right mb-5"
                >
                  See All Property
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-[#ECF5FF] w-full">
        <h3 className="text-3xl font-semibold">Need a Home Loan?</h3>
        <p>Need a Home Loan?</p>
      </div>
    </div>
  );
};

export default SearchResult;
