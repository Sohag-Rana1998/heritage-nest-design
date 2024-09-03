import React from "react";
import { FaSquare } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { BsImage } from "react-icons/bs";
import { Link } from "react-router-dom";
const PropertyCard = ({ property }) => {
  console.log(property);
  return (
    <Link to={`/property-details/${property._id}`}>
      <div className=" w-full h-auto">
        <div className="bg-black h-52 relative">
          <img src={property.image} alt="" className="h-full w-full" />
          <span className="bg-[#FDF0E7] p-2 rounded-md absolute left-3 bottom-3 flex items-center gap-2 ">
            <BsImage className="text-xl text-[#EE6611] font-bold" /> 20
          </span>
        </div>
        <div className="bg-[#F9FAFB] p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold p-2 bg-[#C5E2FF] rounded-md">
              Apartment{" "}
            </span>
            <span className="text-lg font-bold flex items-center gap-2">
              <FaSquare className="text-xl text-[#EE6611]" /> Ready to Move
            </span>
          </div>
          <div className="">
            <h4 className="text-lg md:text-xl font-semibold h-8 md:h-16">
              {property.title}
            </h4>
            <div className="flex items-center gap-2">
              <GrLocation className="text-[#EE6611] text-xl" />{" "}
              {property.location}
            </div>
            <h4 className="text-2xl font-semibold mt-2">
              {" "}
              ${property.maximumPrice}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
