import React from "react";
import PropertyFilter from "../components/BuyerPage/PropertyFilter";
import States from "../components/BuyerPage/States";
import PopularProperties from "../components/BuyerPage/PopularProperties";
import NewProperty from "../components/BuyerPage/NewProperty";
import Testimonials from "../components/Shared/SocialLogin/Testimonials";

const BuyerScreen = () => {
  return (
    <div>
      {/* Banner */}
      <div className="w-full h-[300px] relative bg-[url(https://i.postimg.cc/kgZ0HZCV/modern-spacious-room-with-large-panoramic-window.jpg)] bg-no-repeat bg-center bg-cover"></div>

      <div>
        <PropertyFilter />
        <States />
        <PopularProperties />
        <NewProperty />
        <Testimonials />
      </div>
    </div>
  );
};

export default BuyerScreen;
