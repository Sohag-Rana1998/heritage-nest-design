import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PropertyText = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="divider w-16 h-1 bg-[#F06711] "></div>
        <div className="text-[#F06711] text-xl font-semibold">
          Property buying
        </div>
      </div>
      <div>
        <h1 className="text-[28px] md:text-[40px] font-bold leading-[35px] md:leading-[48px] mb-6">
          Efficient and Transparent Home Buying Solutions
        </h1>
        <p className="font-medium mb-12">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <Link to={"/buyer-page"}>
          <button className="flex justify-center items-center gap-2 bg-[#ECF5FF] hover:bg-[#0059B1] text-[#0059B1] hover:text-white px-6 py-4 rounded-[4px] duration-200">
            <FaMagnifyingGlass /> Find Property
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyText;
