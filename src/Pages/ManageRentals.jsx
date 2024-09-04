import {
  Link,
  ScrollRestoration,
  useNavigate,
  useParams,
} from "react-router-dom";
import usePropertyByEmail from "../hooks/usePropertyByEmail";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const ManageRentals = () => {
  const { myProperties, refetch, isLoading } = usePropertyByEmail();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    setTimeout(setLoading, 500, false);
  }, []);

  const handleDeleteProperty = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axiosPublic.delete(`/delete-property/${id}`);
     
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "User Deleted successfully!",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          
        }
      }
    });
  };
  
  return isLoading ? (
    <div className="w-full min-h-screen flex justify-center items-center">
      <span className="loading loading-infinity loading-lg"></span>
    </div>
  ) : (
    <div className="w-full mx-auto  ">
      <Helmet>
        <title>Heritage Nest | Manage Rentals</title>
      </Helmet>
      <div>
        <div>
          <div className=" mb-5 md:h-40  w-full  flex flex-col items-center justify-center   bg-[url(https://i.postimg.cc/q7Fx8xYK/Screenshot-10.png)] bg-center bg-no-repeat bg-cover  relative">
            <div className=" inset-0 text-white absolute  bg-gradient-to-r from-gray-900 ">
              <div className="pl-2 md:pl-20 mt-3 md:mt-5 text-center md:text-left">
                <div>
                  <div className="max-width px-0  ">
                    <h4 className="text-4xl font-bold underline ">
                      Your Property List
                    </h4>
                    <div className=" text-left">
                      <h4 className="text xl font-bold">
                        {" "}
                        Name: {user?.displayName}
                      </h4>
                      <h4 className="text xl font-bold">
                        User Email: {user?.email}
                      </h4>
                      <h4 className="text xl font-bold">
                        Total Property Added: {myProperties?.length}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" max-width  overflow-x-scroll">
            {myProperties && myProperties?.length > 0 ? (
              <div className="w-full overflow-x-auto">
                <table className="table overflow-x-auto">
                  {/* head */}

                  <thead className="bg-base-200">
                    <tr>
                      <th>No:</th>
                      <th>Property Image</th>
                      <th>Property Title</th>
                      <th>Property Location</th>
                      <th>Min-Price</th>
                      <th>Max-Price</th>
                      <th>Update</th>
                      <th>Delete </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {myProperties &&
                      myProperties?.map((property, index) => (
                        <tr key={property._id}>
                          <th>{index + 1}</th>

                          <td className="w-32 h-20 md:h-28 md:w-48 ">
                            <img
                              src={property?.image}
                              className="w-full h-full rounded-lg"
                              alt=""
                            />
                          </td>
                          <td>{property?.title}</td>
                          <td>{property?.location}</td>
                          <td>{property?.minimumPrice}</td>
                          <td>{property?.maximumPrice}</td>
                          <td>
                            <Link to={`/update-property/${property._id}`}>
                              <label
                                htmlFor=""
                                className="btn bg-blue-500 hover:bg-gray-700 text-white"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                              </label>
                            </Link>
                          </td>
                          <td>
                            <a
                              onClick={() => handleDeleteProperty(property._id)}
                              className="btn bg-red-500 hover:bg-gray-700 text-white"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="table ">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>No:</th>
                      <th>Property Image</th>
                      <th>Property Title</th>
                      <th>Property Location</th>
                      <th>Min Price</th>
                      <th>Max Price</th>
                      <th>Update</th>
                      <th>Delete </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}

                    <tr className="bg-base-200">
                      <th></th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>

                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-center my-10 md:mb-40 text-3xl font-bold">
                  No Property Found
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default ManageRentals;
