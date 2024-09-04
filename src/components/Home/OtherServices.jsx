import React from "react";

const OtherServices = () => {
  return (
    <div className="mt-20 max-w-7xl w-full mx-auto">
      <div>
        <h2
          className="section-title text-center font-bold mb-10
      "
        >
          Other Services
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">
        <div className="bg-[#ECF5FF] rounded-[4px] h-[200px] lg:h-auto  p-6 w-full flex justify-center items-center">
          <div className="flex items-start justify-center gap-5 ">
            <div className="h-20 w-24">
              <img
                className="h-full w-full rounded-xl"
                src="https://i.postimg.cc/X7fxW54V/Screenshot-5.png"
                alt="other services img"
              />
            </div>
            <div className="w-full ">
              <h3 className="font-semibold text-2xl mb-4">
                Advanced Property Search
              </h3>
              <p className="font-medium">
                Effortlessly find your dream property with advanced search
                filters.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#ECF5FF] rounded-[4px] h-[200px] lg:h-auto  p-6 w-full flex justify-center items-center">
          <div className="flex items-start justify-center gap-5 ">
            <div className="h-20 w-24">
              <img
                className="h-full w-full rounded-xl"
                src="https://i.postimg.cc/X7fxW54V/Screenshot-5.png"
                alt="other services img"
              />
            </div>
            <div className="w-full ">
              <h3 className="font-semibold text-2xl mb-4">
                Virtual Tours and Multimedia
              </h3>
              <p className="font-medium">
                Explore properties through immersive virtual tours and HD
                photos.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#ECF5FF] rounded-[4px] h-[200px] lg:h-auto  p-6 w-full flex justify-center items-center">
          <div className="flex items-start justify-center gap-5 ">
            <div className="h-20 w-24">
              <img
                className="h-full w-full rounded-xl"
                src="https://i.postimg.cc/X7fxW54V/Screenshot-5.png"
                alt="other services img"
              />
            </div>
            <div className="w-full ">
              <h3 className="font-semibold text-2xl mb-4">
                Secure Online Transactions
              </h3>
              <p className="font-medium">
                Ensure secure transactions and e-sign documents seamlessly
                online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherServices;
