// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import { useEffect, useState } from "react";
import useAllReviews from "../../../hooks/useAllReviews";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export default function Testimonials() {
  const { allReviews, refetch } = useAllReviews();
  useEffect(() => {
    refetch();
  }, []);
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
    if (width >= 920) {
      return 2;
    } else {
      return 1;
    }
  }

  return (
    <>
      <div className="mb-10">
        <div>
          <h1 className="section-title font-bold text-center mt-20 mb-10">
            Testimonials
          </h1>
        </div>
        <div className="max-w-7xl mx-auto w-full">
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={50}
            modules={[Pagination, Autoplay]}
            className="mySwiper h-[420px]   md:h-[350px]  "
          >
            {allReviews?.map((review) => (
              <SwiperSlide
                key={review.id}
                className="flex justify-center items-center"
              >
                <div className="mb-4 bg-[#ECF5FF] px-10 py-5    md:px-5 text-black ">
                  <div className="">
                    <div className="flex flex-col justify-center items-center">
                      <Rating style={{ maxWidth: 150 }} value={review.star} />
                      <p className="text-center mb-4 mt-4">
                        {review?.review?.slice(0, 250)}
                      </p>
                    </div>

                    <div className="flex flex-col text-center justify-center gap-3  items-center">
                      <img
                        src={review.photo}
                        className="h-12 w-12 rounded-full "
                        alt=""
                      />
                      <div className="mt-2">
                        <h3 className="font-bold">{review?.name}</h3>
                        <p>Marketing manager, XYZ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
