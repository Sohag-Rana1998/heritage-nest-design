import {
  Link,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Swal from "sweetalert2";
import SocialLogin from "../components/Shared/SocialLogin/SocialLogin";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const [type, setType] = useState(false);
  const { updateUserProfile, createUser } = useAuth();
  const image_hosting_key = import.meta.env.VITE_IMGBB_API_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // image upload to imgbb and then get an url
    const imageFile = { image: data.photo[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const photo = res?.data?.data?.display_url;

      try {
        //2. User Registration
        const result = await createUser(data.email, data.password);

        // 3. Save username and photo in firebase
        await updateUserProfile(data.name, photo);

        reset();
        Swal.fire({
          icon: "success",
          title:
            "Congratulation! Your account has been registered successfully",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate(location.state || "/");
      } catch (err) {
        Swal.fire({
          title: `${err.message}`,
          timer: 1500,
          showConfirmButton: false,
        });
      }
    }
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(setLoading, 500, false);
  }, []);
  return loading ? (
    <div className="w-full  flex justify-center items-center">Loading....</div>
  ) : (
    <div className="max-w-7xl w-full mx-auto  pt-10  ">
      <div className="flex flex-col w-full md:w-[70%]   lg:w-[50%] mx-auto   h-full border p-5">
        <div className="">
          <h1 className="text-2xl font-bold">Welcome to Heritage Nest,</h1>
          <h3 className="text-4xl font-bold text-center mt-5">Sign Up</h3>
        </div>
        <div className="w-full mt-5">
          <div className=" mx-auto  ">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-bold text-sm"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    {...register("name", { required: true })}
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 "
                  />
                  {errors.name && (
                    <span className="text-red-500">Name is required</span>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="photo"
                    className="block mb-2 font-bold text-sm"
                  >
                    Your Photo
                  </label>
                  <input
                    type="file"
                    name="photo"
                    id="photo"
                    {...register("photo", { required: true })}
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50"
                  />
                  {errors.photo && (
                    <span className="text-red-500">Photo URL is required</span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-bold text-sm"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    id="email"
                    placeholder="Email address"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
                <div>
                  <div className="flex  justify-between mb-2">
                    <label htmlFor="password" className="text-sm font-bold">
                      Password
                    </label>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xs hover:underline text-gray-600"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      type={type ? "text" : "password"}
                      name="password"
                      id="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                      })}
                      placeholder="password"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                    />{" "}
                    {errors.password?.type === "required" && (
                      <p className="text-red-500">Password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-500">
                        Password must be six character
                      </p>
                    )}
                    <span
                      className="absolute right-5 top-2 "
                      onClick={() => setType(!type)}
                    >
                      {type ? (
                        <IoEye className="text-2xl text-black" />
                      ) : (
                        <IoEyeOff className="text-2xl text-black" />
                      )}
                    </span>{" "}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <input
                    type="submit"
                    value="Register"
                    className="w-full px-8 py-3 font-semibold cursor-pointer rounded-md bg-[#0059B1] text-gray-50"
                  />
                </div>
                <p className="px-6 text-sm text-center ">
                  Already have an account yet?
                  <Link to={"/login"}>
                    {" "}
                    <button className="hover:underline cursor-pointer font-bold text-xl text-[#399edd]">
                      Log In
                    </button>
                  </Link>
                </p>
              </div>
            </form>
            <SocialLogin />
          </div>
        </div>
      </div>

      <ScrollRestoration />
    </div>
  );
};

export default Register;
