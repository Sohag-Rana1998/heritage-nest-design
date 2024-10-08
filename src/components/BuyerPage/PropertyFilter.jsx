import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { HiOutlineHome } from "react-icons/hi";
import { HiCurrencyDollar } from "react-icons/hi2";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
const PropertyFilter = () => {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");

  const query = `${location}&${search}`;
  return (
    <div className="max-w-7xl w-[80%] shadow-2xl lg:w-[50%] -mt-[220px] bg-white relative z-20  border  mx-auto  p-8 rounded-2xl">
      <div className="mx-auto ">
        <Tabs className="!border-none ">
          <TabList>
            <Tab>Buy </Tab>
            <Tab>Rent </Tab>
            <Tab>PG </Tab>
            <Tab>Plot </Tab>
            <Tab>Commercial </Tab>
          </TabList>

          <TabPanel>
            <div className="mt-8">
              <div className="relative">
                <input
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search properties by title"
                  className="w-full border input border-[#E5E7EB] pl-10"
                />
                <FaMagnifyingGlass className=" absolute   top-[14px] left-4" />
              </div>

              <div className="w-full mt-8 flex flex-col md:flex-row items-center gap-5 justify-between">
                <div className="w-full">
                  <label
                    htmlFor="select1"
                    className="text-lg mb-4 text-[#181818] font-semibold flex items-center gap-2"
                  >
                    <GrLocation className="text-[#EE6611] text-2xl" /> Your
                    Location
                  </label>
                  <select
                    onChange={(e) => setLocation(e.target.value)}
                    className="select w-full bg-[#ECF5FF]"
                  >
                    <option disabled selected>
                      Pick your a option
                    </option>
                    <option value={"Anytown, USA"}>Anytown, USA</option>
                    <option value={"Suburbia, USA"}>Suburbia, USA</option>
                    <option value={"City Center, USA"}>City Center, USA</option>
                    <option value={"College Town, USA"}>
                      College Town, USA
                    </option>
                    <option value={"Retirement Village, USA"}>
                      Retirement Village, USA
                    </option>
                    <option value={"Seaside Resort, USA"}>
                      Seaside Resort, USA
                    </option>
                    <option value={"Urban Center, USA"}>
                      Seaside Resort, USA
                    </option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="select1"
                    className="text-lg mb-4 text-[#181818] font-semibold flex items-center gap-2"
                  >
                    <HiOutlineHome className="text-[#EE6611] text-2xl" />
                    Property Type
                  </label>
                  <select className="select w-full bg-[#ECF5FF]">
                    <option disabled selected>
                      Pick your a option
                    </option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="select1"
                    className="text-lg mb-4 text-[#181818] font-semibold flex items-center gap-2"
                  >
                    <HiCurrencyDollar className="text-[#EE6611] text-2xl" />
                    Budget
                  </label>
                  <input type="text" className="input w-full bg-[#ECF5FF]" />
                </div>
              </div>
              <div className="w-full mt-8">
                {" "}
                <Link to={`/search-result/${query}`} className="w-full">
                  <button className="flex btn hover:bg-[#07488a] w-full justify-center items-center gap-2 bg-[#0059B1] hover: text-white px-6 py-4 rounded-[4px]">
                    <FaMagnifyingGlass /> Find Property
                  </button>
                </Link>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search properties"
                  className="w-full border input border-[#E5E7EB] pl-10"
                />
                <FaMagnifyingGlass className=" absolute   top-[14px] left-4" />
              </div>

              <div className="w-full mt-8 flex flex-col md:flex-row items-center gap-5 justify-between">
                <div className="w-full">
                  <label
                    htmlFor="select1"
                    className="text-lg mb-4 text-[#181818] font-semibold flex items-center gap-2"
                  >
                    <GrLocation className="text-[#EE6611] text-2xl" /> Your
                    Location
                  </label>
                  <select className="select w-full bg-[#ECF5FF]">
                    <option disabled selected>
                      Pick your a option
                    </option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="select1"
                    className="text-lg mb-4 text-[#181818] font-semibold flex items-center gap-2"
                  >
                    <HiOutlineHome className="text-[#EE6611] text-2xl" />
                    Property Type
                  </label>
                  <select className="select w-full bg-[#ECF5FF]">
                    <option disabled selected>
                      Pick your a option
                    </option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="select1"
                    className="text-lg mb-4 text-[#181818] font-semibold flex items-center gap-2"
                  >
                    <HiCurrencyDollar className="text-[#EE6611] text-2xl" />
                    Budget
                  </label>
                  <input type="text" className="input w-full bg-[#ECF5FF]" />
                </div>
              </div>
              <div className="w-full mt-8">
                {" "}
                <Link to={"/search-result"} className="w-full">
                  {" "}
                  <button className="flex btn hover:bg-[#07488a] w-full justify-center items-center gap-2 bg-[#0059B1] hover: text-white px-6 py-4 rounded-[4px]">
                    <FaMagnifyingGlass /> Find Property
                  </button>
                </Link>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search properties"
                  className="w-full border input border-[#E5E7EB] pl-10"
                />
                <FaMagnifyingGlass className=" absolute   top-[14px] left-4" />
              </div>

              <div className="w-full mt-8 flex flex-col md:flex-row items-center gap-5 justify-between">
                <div className="w-full">
                  <label
                    htmlFor="select1"
                    className="text-lg mb-4 text-[#181818] font-semibold flex items-center gap-2"
                  >
                    <GrLocation className="text-[#EE6611] text-2xl" /> Your
                    Location
                  </label>
                  <select className="select w-full bg-[#ECF5FF]">
                    <option disabled selected>
                      Pick your a option
                    </option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="select1"
                    className="text-lg mb-4 text-[#181818] font-semibold flex items-center gap-2"
                  >
                    <HiOutlineHome className="text-[#EE6611] text-2xl" />
                    Property Type
                  </label>
                  <select className="select w-full bg-[#ECF5FF]">
                    <option disabled selected>
                      Pick your a option
                    </option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="select1"
                    className="text-lg mb-4 text-[#181818] font-semibold flex items-center gap-2"
                  >
                    <HiCurrencyDollar className="text-[#EE6611] text-2xl" />
                    Budget
                  </label>
                  <input type="text" className="input w-full bg-[#ECF5FF]" />
                </div>
              </div>
              <div className="w-full mt-8">
                {" "}
                <Link to={"/search-result"} className="w-full">
                  {" "}
                  <button className="flex btn hover:bg-[#07488a] w-full justify-center items-center gap-2 bg-[#0059B1] hover: text-white px-6 py-4 rounded-[4px]">
                    <FaMagnifyingGlass /> Find Property
                  </button>
                </Link>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search properties"
                  className="w-full border input border-[#E5E7EB] pl-10"
                />
                <FaMagnifyingGlass className=" absolute   top-[14px] left-4" />
              </div>

              <div className="w-full mt-8 flex flex-col md:flex-row items-center gap-5 justify-between">
                <div className="w-full">
                  <label
                    htmlFor="select1"
                    className="text-lg mb-4 text-[#181818] font-semibold flex items-center gap-2"
                  >
                    <GrLocation className="text-[#EE6611] text-2xl" /> Your
                    Location
                  </label>
                  <select className="select w-full bg-[#ECF5FF]">
                    <option disabled selected>
                      Pick your a option
                    </option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="select1"
                    className="text-lg mb-4 text-[#181818] font-semibold flex items-center gap-2"
                  >
                    <HiOutlineHome className="text-[#EE6611] text-2xl" />
                    Property Type
                  </label>
                  <select className="select w-full bg-[#ECF5FF]">
                    <option disabled selected>
                      Pick your a option
                    </option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="select1"
                    className="text-lg mb-4 text-[#181818] font-semibold flex items-center gap-2"
                  >
                    <HiCurrencyDollar className="text-[#EE6611] text-2xl" />
                    Budget
                  </label>
                  <input type="text" className="input w-full bg-[#ECF5FF]" />
                </div>
              </div>
              <div className="w-full mt-8">
                {" "}
                <Link to={"/search-result"} className="w-full">
                  {" "}
                  <button className="flex btn hover:bg-[#07488a] w-full justify-center items-center gap-2 bg-[#0059B1] hover: text-white px-6 py-4 rounded-[4px]">
                    <FaMagnifyingGlass /> Find Property
                  </button>
                </Link>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search properties"
                  className="w-full border input border-[#E5E7EB] pl-10"
                />
                <FaMagnifyingGlass className=" absolute   top-[14px] left-4" />
              </div>

              <div className="w-full mt-8 flex flex-col md:flex-row items-center gap-5 justify-between">
                <div className="w-full">
                  <label
                    htmlFor="select1"
                    className="text-lg mb-4 text-[#181818] font-semibold flex items-center gap-2"
                  >
                    <GrLocation className="text-[#EE6611] text-2xl" /> Your
                    Location
                  </label>
                  <select className="select w-full bg-[#ECF5FF]">
                    <option disabled selected>
                      Pick your a option
                    </option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="select1"
                    className="text-lg mb-4 text-[#181818] font-semibold flex items-center gap-2"
                  >
                    <HiOutlineHome className="text-[#EE6611] text-2xl" />
                    Property Type
                  </label>
                  <select className="select w-full bg-[#ECF5FF]">
                    <option disabled selected>
                      Pick your a option
                    </option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                  </select>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="select1"
                    className="text-lg mb-4 text-[#181818] font-semibold flex items-center gap-2"
                  >
                    <HiCurrencyDollar className="text-[#EE6611] text-2xl" />
                    Budget
                  </label>
                  <input type="text" className="input w-full bg-[#ECF5FF]" />
                </div>
              </div>
              <div className="w-full mt-8">
                <Link to={"/search-result"} className="w-full">
                  {" "}
                  <button className="flex btn hover:bg-[#07488a] w-full justify-center items-center gap-2 bg-[#0059B1] hover: text-white px-6 py-4 rounded-[4px]">
                    <FaMagnifyingGlass /> Find Property
                  </button>
                </Link>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default PropertyFilter;
