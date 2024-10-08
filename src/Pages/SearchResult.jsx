import React, { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import usePropertyByQuery from "../hooks/usePropertyByQuery";
import { Link, useParams } from "react-router-dom";
import { Range } from "react-range";
import Testimonials from "../components/Shared/SocialLogin/Testimonials";
const SearchResult = () => {
  const { query } = useParams();

  const location1 = query?.split("&")?.[0];
  const search = query?.split("&")?.[1];
  search.slice(1, location1.length - 1);

  const [values, setValues] = React.useState([50]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchText, setSearch] = useState(search || "");
  const [location, setSetlocation] = useState(location1 || "");

  const [loader, setLoader] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const { data, refetch, isLoading } = usePropertyByQuery(
    currentPage,
    itemsPerPage,
    searchText,
    minPrice,
    maxPrice,
    location
  );
  const count = data?.count || 0;

  useEffect(() => {
    setTimeout(setLoader, 1000, false);
    refetch;
  }, [currentPage, itemsPerPage, searchText, minPrice, maxPrice, location]);

  const totalPage = Math.ceil(parseInt(count) / itemsPerPage);

  const pageArray = [...Array(totalPage).keys()].map((element) => element + 1);

  return (
    <div className="max-w-7xl w-full mx-auto mt-20">
      <div className="w-full lg:w-[70%]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border-b pb-5 mb-8">
          <button className="flex btn hover:bg-[#07488a]  justify-center items-center gap-2 bg-[#0059B1] hover: text-white px-3 md:px-6 py-2 md:py-4 rounded-[4px]">
            properties (400)
          </button>
          <button className="flex btn bg-[#ECF5FF] text-black hover:bg-[#0059B1]  justify-center items-center gap-2   hover:text-white px-3 md:px-6 py-2 md:py-4 rounded-[4px]">
            New Projects (400)
          </button>
          <button className="flex btn bg-[#ECF5FF] text-black hover:bg-[#0059B1]  justify-center items-center gap-2  hover:text-white px-3 md:px-6 py-2 md:py-4 rounded-[4px]">
            Pre-launch offers
          </button>
        </div>
        <div>
          <h4 className="text-2xl md:text-3xl font-bold mb-8">
            400 results for rental{" "}
          </h4>

          <div className="flex flex-col gap-8">
            {/* card */}
            {data?.result?.map((property) => (
              <div key={property._id}>
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 p-6 bg-[#F9FAFB] ">
                  <div className="h-52 w-full md:w-[25%] rounded-md">
                    <img
                      src={property.image}
                      alt=""
                      className="h-full w-full rounded-md"
                    />
                  </div>
                  <div className="w-full ">
                    <div className="flex justify-between gap-4">
                      <div className=" ">
                        <h3 className=" text-xl md:text-2xl font-bold mb-4 ">
                          {property.title}
                        </h3>
                        <p className="flex items-center gap-2 ">
                          {" "}
                          <GrLocation className="text-[#EE6611] text-xl" />{" "}
                          {property.location}
                        </p>
                      </div>
                      <div className="">
                        <h3 className="w-[20%] mb-4 text-2xl font-bold">
                          ${property.maximumPrice}
                        </h3>
                        <Link to={`/property-details/${property._id}`}>
                          {" "}
                          <button className="px-4 py-2 w-40 bg-white !rounded-[4px] text-black  font-medium btn btn-outline border-black">
                            Bid Property
                          </button>
                        </Link>
                      </div>
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
                          <h4 className=" font-bold">Total Area</h4>
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
                          <h4 className=" font-bold">Status</h4>
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
                          <h4 className=" font-bold">Total Area</h4>
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
          <div className="flex justify-center md:justify-start items-center text-white my-5">
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
              {data?.result && data?.result.length === 0 ? (
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
                    setSetlocation("");
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

      <div className="bg-[#ECF5FF] w-full p-8 flex flex-col md:flex-row items-center gap-5">
        <div className="w-full md:w-[35%]">
          <h3 className="text-3xl font-semibold">Need a Home Loan?</h3>
          <p>Need a Home Loan?</p>
        </div>
        <div className="w-full md:w-[60%]">
          <div className="flex justify-end mb-2">
            {" "}
            <h4 className="text-xl font-bold">{values}K</h4>{" "}
          </div>
          <Range
            label="Select your value"
            step={0.1}
            min={20}
            max={60}
            values={values}
            onChange={(values) => setValues(values)}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  width: "100%",
                  backgroundColor: "#8AB3DB",
                }}
              >
                {children}
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                key={props.key}
                style={{
                  ...props.style,
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#0059B1",
                }}
              />
            )}
          />
          <div className="flex justify-between items-center mt-2">
            <span className="font-bold">$20K</span>
            <span className="font-bold">$30K</span>
            <span className="font-bold">$40K</span>
            <span className="font-bold">$50K</span>
            <span className="font-bold">$60K</span>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <Testimonials />
      </div>
    </div>
  );
};

export default SearchResult;
