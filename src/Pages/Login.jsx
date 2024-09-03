import {
  Link,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useEffect, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
// import { toast } from 'react-hot-toast';
import Swal from "sweetalert2";

import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import SocialLogin from "../components/Shared/SocialLogin/SocialLogin";

const Login = () => {
  // const captChaRef = useRef();
  const [type, setType] = useState(false);
  const location = useLocation();
  const { signIn } = useAuth();

  const navigate = useNavigate();

  // console.log(location);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    signIn(email, password)
      .then(() => {
        // console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "Log In successful",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title:
            "Something went wrong. Please provide a registered email and password.",
          showConfirmButton: true,
        });
      });
  };

  // useEffect(() => {
  //   loadCaptchaEnginge(6);
  // }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(setLoading, 500, false);
  }, []);

  return loading ? (
    <div className="w-full  flex justify-center items-center">Loading.....</div>
  ) : (
    <div className="max-w-7xl w-full mx-auto  pt-10  ">
      <div className="flex flex-col w-full md:w-[70%]   lg:w-[50%] mx-auto    border p-5">
        <div className="">
          <h1 className="text-2xl font-bold">Welcome Back to Heritage Nest,</h1>
          <h3 className="text-4xl font-bold text-center">Sign In</h3>
        </div>
        <div className="w-full  ">
          <div className=" mx-auto  ">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block font-bold mb-2 text-sm"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...register("email", { required: true })}
                    placeholder="Email address"
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                  {errors.email && (
                    <span className="text-red-500">Email is required</span>
                  )}
                </div>
                <div>
                  <div className="flex justify-between mb-2">
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
                      placeholder="password"
                      className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <span className="text-red-500">Password is required</span>
                    )}
                    <span
                      className="absolute right-5 top-2 "
                      onClick={() => setType(!type)}
                    >
                      {type ? (
                        <IoEye className="text-2xl" />
                      ) : (
                        <IoEyeOff className="text-2xl" />
                      )}
                    </span>{" "}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <input
                    type="submit"
                    value="Log In"
                    className="w-full btn px-8 py-3 cursor-pointer font-semibold rounded-md bg-[#0059B1] text-gray-50"
                  />
                </div>
                <p className="px-6  text-center text-gray-600">
                  <span className="mr-2"> Don&apos;t have an account yet?</span>
                  <Link to={"/register"}>
                    <button
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:underline text-[#399edd] cursor-pointer font-bold  "
                    >
                      Sign up
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

export default Login;
