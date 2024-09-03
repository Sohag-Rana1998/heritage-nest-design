import React from "react";
import States from "../components/BuyerPage/States";
import PropertyText from "../components/Home/PropertyText";
import { FaMagnifyingGlass } from "react-icons/fa6";
import OurTeamSlider from "../components/About/OurTeamSlider";
import Testimonials from "../components/Shared/SocialLogin/Testimonials";

const About = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[300px] bg-[url(https://i.postimg.cc/q7Fx8xYK/Screenshot-10.png)] bg-no-repeat bg-bottom bg-cover"></div>

      <div className="max-w-7xl w-full mx-auto">
        <div className="mt-10">
          <States />
        </div>

        <div className="mt-10">
          <div className="w-full md:w-[75%] h-[450px]">
            <img
              src="https://i.postimg.cc/D0HFqHhG/Screenshot-11.jpg"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="flex justify-end mt-5 md:-mt-[150px]">
            <div className="w-full md:w-[50%] bg-[#ECF5FF] flex justify-center items-center p-6">
              <div>
                <div className="flex items-center gap-4">
                  <div className="divider w-16 h-1 bg-[#F06711] "></div>
                  <div className="text-[#F06711] text-xl font-semibold">
                    Our Story
                  </div>
                </div>
                <div>
                  <h1 className="text-[40px] font-bold leading-[48px] mb-6">
                    Efficient and Transparent Home Buying Solutions
                  </h1>
                  <p className="font-medium mb-12">
                    In the symphony of bustling markets and serene landscapes,
                    Heritage-Nest was born—a vision to
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 ">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[75%] h-[450px]">
              <img
                src="https://i.postimg.cc/XNzVSG5v/Screenshot-12.jpg"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
          <div className=" mt-5 md:-mt-[150px] relative z-10">
            <div className="w-full md:w-[50%] bg-[#FDF0E7] flex justify-center items-center p-6">
              <div>
                <div className="flex items-center gap-4">
                  <div className="divider w-16 h-1 bg-[#F06711] "></div>
                  <div className="text-[#F06711] text-xl font-semibold">
                    Mission Statement
                  </div>
                </div>
                <div>
                  <h1 className="text-[40px] font-bold leading-[48px] mb-6">
                    Efficient and Transparent Home Buying Solutions
                  </h1>
                  <p className="font-medium mb-12">
                    To bridge the miles with smiles, Heritage-Nest pledges to be
                    the golden thread connecting NRIs to their homeland, through
                    trust, transparency, and tailored real estate solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team */}

        <div className="mt-10">
          <div className="flex items-center gap-4">
            <div className="divider w-16 h-1 bg-[#F06711] "></div>
            <div className="text-[#F06711] text-xl font-semibold">Our Team</div>
          </div>
          <div>
            <h1 className="text-[40px] font-bold leading-[48px] mb-6">
              Discover the Faces Behind Our Success
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-5 !max-w-[1330px] mx-auto w-full">
        <OurTeamSlider />
      </div>

      <div className=" !max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between gap-5 mt-10">
          <div className="w-full md:w-[50%]">
            <div className="flex items-center gap-4">
              <div className="divider w-16 h-1 bg-[#F06711] "></div>
              <div className="text-[#F06711] text-xl font-semibold">
                Meet the Team For Book Consultation
              </div>
            </div>
            <div>
              <h1 className="text-[40px] font-bold leading-[48px] mb-6">
                Meet the stewards of your heritage journey
              </h1>
              <p className="font-medium mb-12">
                Each member an embodiment of expertise and warmth, dedicated to
                guiding you home, every step of the way.
              </p>
              <button className="  bg-[#0059B1]  text-white px-6 py-4 rounded-[4px] duration-200">
                Book Consultation Now
              </button>
            </div>
          </div>
          <div className="w-full md:w-[30%] h-[300px]">
            <img
              src="https://i.postimg.cc/sXWBLkfV/Screenshot-16.png"
              alt=""
              className="h-full w-full"
            />
          </div>
        </div>

        <div className="my-10">
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default About;
