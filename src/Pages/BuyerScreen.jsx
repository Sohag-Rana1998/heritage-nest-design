import React from "react";
import PropertyFilter from "../components/BuyerPage/PropertyFilter";
import States from "../components/BuyerPage/States";

const BuyerScreen = () => {
  return (
    <div>
      {/* Banner */}
      <div className="w-full h-[300px] relative bg-[url(https://i.postimg.cc/kgZ0HZCV/modern-spacious-room-with-large-panoramic-window.jpg)] bg-no-repeat bg-center bg-cover"></div>

      <div>
        <PropertyFilter />
        <States />
      </div>
    </div>
  );
};

export default BuyerScreen;
