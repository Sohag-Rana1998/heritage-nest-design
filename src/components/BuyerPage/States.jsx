import React from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
const States = () => {
  return (
    <div className="max-w-7xl w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
      <div className="bg-[#FDF0E7] w-full p-6 ">
        <h1 className="section-title text-[#D95D0F] font-bold">2k+</h1>
        <p>New Flat Listed</p>
        <div className="flex justify-between items-center mt-8">
          <a className="text-[#EE6611] underline" href="#">
            View all
          </a>
          <a href="#" className="text-[#EE6611] text-2xl">
            <FaRegArrowAltCircleDown />
          </a>
        </div>
      </div>
      <div className="bg-[#ECF5FF] w-full p-6 ">
        <h1 className="section-title text-[#0051A1] font-bold">2k+</h1>
        <p>New Flat Listed</p>
        <div className="flex justify-between items-center mt-8">
          <a className="text-[#0059B1] underline" href="#">
            View all
          </a>
          <a href="#" className="text-[#0059B1] text-2xl">
            <FaRegArrowAltCircleDown />
          </a>
        </div>
      </div>
      <div className="bg-[#FDF0E7] w-full p-6 ">
        <h1 className="section-title text-[#D95D0F] font-bold">2k+</h1>
        <p>New Flat Listed</p>
        <div className="flex justify-between items-center mt-8">
          <a className="text-[#EE6611] underline" href="#">
            View all
          </a>
          <a href="#" className="text-[#EE6611] text-2xl">
            <FaRegArrowAltCircleDown />
          </a>
        </div>
      </div>
      <div className="bg-[#ECF5FF] w-full p-6 ">
        <h1 className="section-title text-[#0051A1] font-bold">2k+</h1>
        <p>New Flat Listed</p>
        <div className="flex justify-between items-center mt-8">
          <a className="text-[#0059B1] underline" href="#">
            View all
          </a>
          <a href="#" className="text-[#0059B1] text-2xl">
            <FaRegArrowAltCircleDown />
          </a>
        </div>
      </div>
    </div>
  );
};

export default States;
