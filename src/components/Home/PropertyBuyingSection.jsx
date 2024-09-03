import React from "react";
import PropertyImage from "./PropertyImage";
import PropertyText from "./PropertyText";

const PropertyBuyingSection = () => {
  const section1 = "https://i.postimg.cc/g2wnY040/Screenshot-2.png";
  const section2 = "https://i.postimg.cc/tTt6n3Tk/Screenshot-3.png";
  const section3 = "https://i.postimg.cc/nrFD4X9J/Screenshot-4.png";

  return (
    <div className="mt-20">
      <div className="max-w-7xl w-full  mx-auto flex flex-col md:flex-row justify-between  gap-8 mb-20 ">
        <div className="w-full">
          <PropertyImage section={section1} />
        </div>
        <div className="w-full">
          <PropertyText />
        </div>
      </div>
      <div className="max-w-7xl w-full  mx-auto flex flex-col md:flex-row-reverse justify-between  gap-8 !mb-20">
        <div className="w-full ">
          <PropertyImage section={section2} />
        </div>
        <div className="w-full">
          <PropertyText />
        </div>
      </div>
      <div className="max-w-7xl w-full  mx-auto flex flex-col md:flex-row justify-between  gap-8 !mb-20">
        <div className="w-full">
          <PropertyImage section={section3} />
        </div>
        <div className="w-full">
          <PropertyText />
        </div>
      </div>
    </div>
  );
};

export default PropertyBuyingSection;
