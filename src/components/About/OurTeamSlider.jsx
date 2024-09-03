import React from "react";

import { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const OurTeamSlider = () => {
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
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[380px] !px-7"
      >
        <SwiperSlide>
          <div className="h-full w-full">
            <img
              src="https://i.postimg.cc/tJJWT9WJ/photo-cheerful-young-girl-good-mood-confident-smart-agent-manager-leader-isolated-pink-color-backgro.webp"
              className="h-full w-full"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full">
            <img
              src="https://i.postimg.cc/d178BqNC/photo-smart-agent-guy-point-empty-space-thumb-hold-tablet-gadget-sales-isolated-pastel-color-backgro.webp"
              className="h-full w-full"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full">
            <img
              src="https://i.postimg.cc/SNQcT7Pq/photo-young-attractive-business-woman-smart-agent-manager-ceo-chief-career-isolated-violet-color-bac.webp"
              className="h-full w-full"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full">
            <img
              src="https://i.postimg.cc/W33fV7FY/Screenshot-13.png"
              className="h-full w-full"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full">
            <img
              src="https://i.postimg.cc/k4pYgtWJ/Screenshot-14.png"
              className="h-full w-full"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full w-full">
            <img
              src="https://i.postimg.cc/pr5GhXBD/Screenshot-15.png"
              className="h-full w-full"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OurTeamSlider;
