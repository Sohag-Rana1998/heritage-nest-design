import React from "react";
import useAllProperties from "../../../hooks/useAllProperties";
import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import PropertyCard from "../../BuyerPage/PropertyCard";

const Slider = () => {
  const { properties, isLoading, refetch } = useAllProperties();
  console.log(properties);
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
    <div className="!max-w-[1330px] mx-auto w-full">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[430px] !px-7"
      >
        {properties?.map((property) => (
          <SwiperSlide key={property._id}>
            <div>
              <PropertyCard property={property} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
