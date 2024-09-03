import React, { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { MdKingBed } from "react-icons/md";
import { MdOutlineBalcony } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { MdOutlineBedroomChild } from "react-icons/md";
import { Range, getTrackBackground } from "react-range";
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import OtherServices from "../components/Home/OtherServices";
import Slider from "../components/Shared/SocialLogin/Slider";
import { Link, useParams } from "react-router-dom";
import usePropertyById from "../hooks/usePropertyById";
const PropertyDetails = () => {
  const { id } = useParams();
  console.log(id);

  const { property, isLoading, refetch } = usePropertyById(id);
  const [values, setValues] = useState([50, 800]);
  const min = 50;
  const max = 1000;
  const minPrice = `$${values[0]}K`;
  const maxPrice = `$${values[1]}K`;
  const [minP, setMinP] = useState(minPrice);
  const [maxP, setMaxP] = useState(maxPrice);

  useEffect(() => {
    setMinP(`$${values[0]}K`);
    setMaxP(`$${values[1]}K`);
  }, [values]);

  const markerIcon = new Icon({
    iconUrl: "/location-2955 (1).png",
    iconSize: [45, 45],
  });
  return (
    <div className="mt-10 max-w-7xl w-full mx-auto">
      <div className="w-full md:w-[65%]">
        <div className="flex justify-between items-center gap-5 ">
          <div>
            <h5 className="text-xl font-bold">{property.title}</h5>
            <div className="flex items-center gap-2">
              <GrLocation className="text-[#EE6611] text-xl" />{" "}
              {property.location}
            </div>
          </div>
          <div className="text-3xl font-bold">$ {property.maximumPrice} </div>
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row gap-5 mt-8">
        <div className="w-full md:w-[65%]">
          <div className="">
            <div>
              <div className="w-full h-[450px] bg-gray-300 mb-5">
                <img src={property?.image} alt="" className="h-full w-full" />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-5">
                <div className="w-full md:w-[38%] h-[200px] bg-gray-300">
                  <img src={property?.image} alt="" className="h-full w-full" />
                </div>
                <div className="w-full md:w-[38%] h-[200px] bg-gray-300">
                  <img src={property?.image} alt="" className="h-full w-full" />
                </div>
                <div className="w-full relative md:w-[20%] h-[200px] bg-gray-300">
                  <img src={property?.image} alt="" className="h-full w-full" />
                  <div className="absolute inset-0 bg-black/40 flex justify-center items-center z-10">
                    <h3 className="text-xl font-bold text-white">View More</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="mt-10 bg-[#F9FAFB] w-full px-6 py-10">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <div className="my-8  w-full bg-white flex items-center justify-between flex-wrap gap-2 p-4">
              <div className="  font-medium flex items-center gap-2">
                <MdOutlineBedroomChild /> <span className="font-bold"> 2</span>{" "}
                Beds
              </div>
              <div className=" font-medium flex items-center gap-2">
                <FaBath /> <span className="font-bold"> 2</span> Bath
              </div>
              <div className=" font-medium flex items-center gap-2">
                <MdOutlineBalcony /> <span className="font-bold"> 2</span>{" "}
                Balcony
              </div>
              <div className=" font-medium flex items-center gap-2">
                <MdKingBed /> Fully Furnished
              </div>
            </div>

            <div className="flex justify-between flex-wrap gap-4 my-8">
              <div>
                <h4>Carpet Area</h4>
                <h4 className="text-lg font-semibold">2000 sqft</h4>
                <h5 className="text-sm">$ 225/sqft</h5>
              </div>
              <div className="">
                <h4>Floor</h4>
                <h4 className="text-lg font-semibold">
                  Second (Out of 6th floor)
                </h4>
              </div>
              <div>
                <h4>Transaction Type</h4>
                <h4 className="text-lg font-semibold">Ready to move</h4>
              </div>
              <div className="flex  justify-end gap-0 ">
                <div>
                  <h4>Lift</h4>
                  <h4 className="text-lg font-semibold">1</h4>
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-wrap gap-2 my-8">
              <div>
                <h4>Facing</h4>
                <h4 className="text-lg font-semibold">North - East</h4>
              </div>
              <div className="">
                <h4>Additional Rooms</h4>
                <h4 className="text-lg font-semibold">
                  1 servant room & 1 gust room
                </h4>
              </div>
              <div>
                <h4>Age of construction</h4>
                <h4 className="text-lg font-semibold">New Construction</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[33%] bg-[#ECF5FF] p-6">
          <h6>Property Value</h6>
          <h4 className="text-xl font-bold mt-2">
            $ <span> {property.minimumPrice} </span> k - $
            <span>{property.maximumPrice}</span>k
          </h4>
          <p className="mt-4">
            Your bid can not be than 10% of the property Minimum value.
          </p>

          <div className="mt-4">
            <label htmlFor="">Min</label>
            <input
              type="text"
              className="input w-full bg-white text-black "
              defaultValue={minP}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="">Max</label>
            <input
              type="text"
              className="input w-full bg-white text-black "
              defaultValue={maxP}
            />
          </div>

          <div className="w-full mt-5">
            <Range
              step={1}
              min={min}
              max={max}
              values={values}
              onChange={(values) => setValues(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "10px",
                    width: "100%",
                    background: getTrackBackground({
                      values,
                      colors: ["#ccc", "#EEEEEE", "#ccc"],
                      min,
                      max,
                    }),
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#EE6611",
                    border: "3px solid #EE6611",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px #AAA",
                    outlineColor: "#EE6611",
                  }}
                >
                  <div
                    style={{
                      height: "10px",
                      width: "10px",
                      backgroundColor: isDragged ? "#EE6611" : "#EE6611",
                    }}
                  />
                </div>
              )}
            />
          </div>

          <div className="flex justify-center mt-5">
            <button className="  hover:bg-[#07488a] w-full md:w-40  bg-[#0059B1] hover: text-white px-6 py-4 rounded-[4px]">
              Bid Property
            </button>
          </div>

          <div className="w-full h-[500px] mt-8">
            <MapContainer
              className="h-full w-full rounded-md"
              center={[25.0318, 55.19]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[25.0318, 55.19]} icon={markerIcon}>
                <Popup>Dubai Production City,United Arab Emirates</Popup>
                <Tooltip>Dubai Production City,United Arab Emirates</Tooltip>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      <div>
        <OtherServices />
      </div>
      <div className="my-10">
        <div className="flex justify-end mb-3">
          <Link
            to={"/buyer-page"}
            className="font-bold underline text-[#0059B1]"
          >
            See all properties
          </Link>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default PropertyDetails;
