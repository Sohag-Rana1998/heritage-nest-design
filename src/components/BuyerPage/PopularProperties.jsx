import Slider from "../Shared/SocialLogin/Slider";
const PopularProperties = () => {
  return (
    <div className="!max-w-[1330px] mx-auto w-full mt-14">
      <h3 className="text-2xl md:text-4xl font-semibold mb-5 !px-7">
        Popular Properties
      </h3>

      {/* Slider */}
      <Slider />
    </div>
  );
};

export default PopularProperties;
