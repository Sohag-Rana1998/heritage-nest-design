import React, { useEffect, useState } from "react";

import useAllProperties from "../../hooks/useAllProperties";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import PropertyCard from "./PropertyCard";
import Slider from "../Shared/SocialLogin/Slider";
import { Link } from "react-router-dom";
const NewProperty = () => {
  const { properties, isLoading, refetch } = useAllProperties();

  const [slidesPerView, setSlidesPerView] = useState(
    getSlidesPerView(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function getSlidesPerView(width) {
    if (width > 920) {
      return 3;
    } else if (width <= 920 && width > 668) {
      return 2;
    } else {
      return 1;
    }
  }

  return (
    <div className="!max-w-[1330px] mx-auto w-full mt-10">
      <div className="!px-7 flex justify-between items-center">
        <h3 className="text-2xl md:text-4xl font-semibold mb-5 ">
          New Listed Properties{" "}
        </h3>
        <Link to={"/all-properties"} className="hidden md:block">
          <button className="text-lg font-semibold text-[#0059B1] underline ">
            See all property
          </button>
        </Link>
      </div>
      <div className=" justify-end w-full mb-3 md:hidden flex">
        <Link to={"/all-properties"}>
          <button className="text-lg font-semibold text-[#0059B1] underline ">
            See all property
          </button>
        </Link>
      </div>

      {/* Slider */}
      <Slider />
    </div>
  );
};

export default NewProperty;
