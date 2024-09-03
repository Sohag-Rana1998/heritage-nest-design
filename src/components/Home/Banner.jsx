import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="w-full h-[550px]  relative">
      <div className="inset-0 absolute">
        <img
          src="https://i.postimg.cc/j2k34Cy9/Screenshot-6.jpg"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="inset-0 absolute text-white flex justify-center items-center text-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[64px] font-bold mb-8 tracking-tight leading-[72px]">
            Your Portal to India's <br /> Exquisite Real Estate
          </h1>
          <p className="font-semibold mb-12">
            Seamlessly connecting you to the heartbeat of India's prime
            properties.
          </p>
          <Link to={"/buyer-page"}>
            {" "}
            <button className="flex btn hover:bg-[#07488a] w-full justify-center items-center gap-2 bg-[#0059B1] hover: text-white px-6 py-4 rounded-[4px]">
              <FaMagnifyingGlass /> Find Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
