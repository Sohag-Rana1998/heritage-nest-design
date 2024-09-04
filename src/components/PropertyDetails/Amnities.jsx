import React from "react";
import {
  PiBatteryChargingVerticalBold,
  PiFlagBannerDuotone,
} from "react-icons/pi";
import { GiLift } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { RiHome8Fill } from "react-icons/ri";
import { VscLightbulbSparkle } from "react-icons/vsc";
import { RiParkingBoxLine } from "react-icons/ri";
import { IoIosMan } from "react-icons/io";
import {
  FaCloudSun,
  FaCreativeCommonsSamplingPlus,
  FaGlassWater,
  FaGoodreads,
  FaMaskVentilator,
  FaSpaghettiMonsterFlying,
} from "react-icons/fa6";
import { LiaIntercom } from "react-icons/lia";
import {
  FaCampground,
  FaIntercom,
  FaParking,
  FaPiedPiper,
  FaPlay,
  FaRoad,
  FaTv,
  FaWater,
  FaWifi,
} from "react-icons/fa";
const Amnities = () => {
  return (
    <div className="max-width bg-[#F9FAFB] p-6 ">
      <h4 className="text-xl font-semibold mb-8">Amenities </h4>
      <div className="grid grid-cols-2 md:grid-cols-4  justify-items-stretch gap-4 md:gap-8">
        <div className="font-medium flex items-center gap-2">
          <PiBatteryChargingVerticalBold /> Power Back Up
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <GiLift /> Lift
        </div>

        <div className="font-medium flex items-center gap-2">
          <RiHome8Fill /> Gymnasium
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <CgGym /> Club House
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <VscLightbulbSparkle /> Park
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <RiParkingBoxLine /> Reserved Parking
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <IoIosMan /> Security
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <FaGlassWater /> Water Storage
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <PiFlagBannerDuotone /> Private Terrace/Garden
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <FaCreativeCommonsSamplingPlus />
          Vaastu Compliant
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <FaGoodreads /> Service/Goods Lift
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <FaParking /> Visitor Parking
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <LiaIntercom /> Intercom Facility
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <FaSpaghettiMonsterFlying /> Maintenance Staff
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <FaWater /> Waste Disposal
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <FaCloudSun /> Laundry Service
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <FaWifi /> Internet/Wi-Fi Connectivity
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <FaTv /> DTH Television Facility
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <FaPiedPiper /> Piped Gas
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <FaRoad /> Jogging and Strolling Track
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <FaPlay /> Kids Play Area
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <FaCampground /> Outdoor Tennis Courts
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <FaIntercom /> Intercom Facility
        </div>
        <div className="font-medium flex items-center gap-2 ">
          <FaMaskVentilator /> Visitor Parking
        </div>
      </div>
    </div>
  );
};

export default Amnities;
