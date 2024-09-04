import React, { useEffect, useState } from "react";
import PropertyCard from "../components/BuyerPage/PropertyCard";
import usePropertyByQuery from "../hooks/usePropertyByQuery";
import { FaFilter } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const AllProperties = () => {
  const { searchText } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [search, setSearch] = useState(searchText || "");
  const [loader, setLoader] = useState(false);
  const [modalLoading, setModalLoading] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const { data, refetch, isLoading } = usePropertyByQuery(
    currentPage,
    itemsPerPage,
    search,
    minPrice,
    maxPrice
  );
  const count = data?.count;
  useEffect(() => {
    setTimeout(setLoader, 1300, false);
  }, []);

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
    setTimeout(setLoader, 1000, false);
    e.target.reset();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoader(true);
    setSearch("");
    setMinPrice(data.min_price);
    setMaxPrice(data.max_price);
    reset();
    setTimeout(setLoader, 1000, false);
  };

  return (
    <div>
      <div className="w-full mb-10 h-[180px] md:h-[200px] relative bg-[url(https://i.postimg.cc/kgZ0HZCV/modern-spacious-room-with-large-panoramic-window.jpg)] bg-no-repeat bg-center bg-cover"></div>

      <div className="max-width">
        <div>
          <div className=" flex px-2 md:px-10 flex-col md:flex-row justify-between gap-3 items-center mx-auto w-full  mb-5  ">
            <div className="w-[90%] md:w-full">
              <label
                onClick={() => {
                  setModalLoading(false);
                  setTimeout(setModalLoading, 500, true);
                }}
                htmlFor="my_modal_7"
                className=" bg-[#0059B1] flex items-center w-full md:w-60 rounded-xl hover:bg-gray-500 text-white px-4 py-2"
              >
                <FaFilter className="mr-2" /> Filter By Price Range
              </label>
            </div>
            <div className="flex justify-end w-[90%] md:w-full ">
              <form onSubmit={handleSearch} className="w-full lg:w-[60%] ">
                <label htmlFor="search"></label>
                <div className="flex items-center gap-2">
                  <input
                    className="input bg-gray-200 w-full  border "
                    id="search"
                    name="search"
                    placeholder="Search By Property Title"
                    type="text"
                    required
                  />
                  <button className="btn md:w-24 py-[14px] px-4 rounded-lg hover:bg-gray-900 font-bold text-white bg-[#0059B1]">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1  px-5 py-5 rounded-md gap-5  md:grid-cols-2 lg:grid-cols-3 ">
          {data?.result &&
            data?.result.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
        </div>
        <div>
          {count > 6 ? (
            <div className="flex justify-center md:justify-end items-center text-white my-5">
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
                        ? "px-4 py-2  mx-1 transition-colors duration-300 transform bg-[#0059B1] rounded-md sm:inline focus:outline-none  !border-0   hover:text-white  "
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
                {data?.result && data?.result?.length === 0 ? (
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
                    className="btn w-[40] bg-[#0059B1] text-white text-right mb-5"
                  >
                    See All Property
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Modal for Filter by Price */}
        <div className=" mx-auto h-auto w-full md:w-48">
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal  mx-auto" role="dialog">
            <div
              style={{
                scrollbarWidth: "none",
              }}
              className="modal-box !p-2 !h-[380px] w-[90%] md:!w-96 right-0 absolute!"
            >
              {modalLoading ? (
                <div>
                  <div>
                    {/* form */}
                    <div className="w-full ">
                      <div className="w-full  border rounded-md mt-5 p-5 shadow-md">
                        <h3 className="text-xl font-bold ">Price Range:</h3>
                        <div>
                          <form onSubmit={handleSubmit(onSubmit)} className="">
                            <div className="flex justify-between items-center mb-5 gap-3">
                              <div className="">
                                <label
                                  className="font-bold"
                                  htmlFor="min_price"
                                >
                                  Minimum Price
                                </label>
                                <input
                                  id="min_price"
                                  name="min_price"
                                  type="number"
                                  {...register("min_price")}
                                  placeholder="Min-Price"
                                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                />
                                {errors.min_price && (
                                  <span className="text-red-500">
                                    This field is required
                                  </span>
                                )}
                              </div>
                              <div className="">
                                <label
                                  className="font-bold"
                                  htmlFor="max_price"
                                >
                                  Maximum Price
                                </label>
                                <input
                                  id="max_price"
                                  name="max_price"
                                  type="number"
                                  placeholder="Max-Price"
                                  {...register("max_price")}
                                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                />
                                {errors.max_price && (
                                  <span className="text-red-500">
                                    This field is required
                                  </span>
                                )}
                              </div>
                            </div>

                            <div className="mt-6">
                              <button className="modal-action w-full flex justify-center  p-3">
                                <label
                                  htmlFor="my_modal_7"
                                  className="btn w-full flex justify-center  bg-blue-500 text-white hover:bg-gray-800"
                                >
                                  Apply
                                </label>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="w-full flex justify-end mt-2">
                        <label htmlFor="my_modal_7" className="btn">
                          Cancel
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full  flex justify-center items-center">
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProperties;
