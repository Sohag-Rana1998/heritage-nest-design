import { Link } from "react-router-dom";
import Slider from "../Shared/SocialLogin/Slider";
const PopularProperties = () => {
  return (
    <div className="!max-w-[1330px] mx-auto w-full mt-14">
      <div className="!px-7 flex justify-between items-center">
        <h3 className="text-2xl md:text-4xl font-semibold mb-5 ">
          Popular Properties
        </h3>
        <Link to={"/all-properties"} className="hidden md:block">
          <button className="text-lg font-semibold text-[#0059B1] underline ">
            See all property
          </button>
        </Link>
      </div>
      <div className=" justify-end w-full mb-3 flex md:hidden ">
        <Link to={"/all-properties"}>
          <button className="text-lg font-semibold text-[#0059B1] underline ">
            See all property
          </button>
        </Link>
      </div>

      {/* Slider */}
      <Slider />
    </div>
  );
};

export default PopularProperties;
