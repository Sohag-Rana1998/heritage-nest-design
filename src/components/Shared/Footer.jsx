import React from "react";
import { FaAngellist } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#ECF5FF]">
      <div className="max-w-7xl w-full mx-auto ">
        <footer className="flex items-center flex-col lg:flex-row gap-5 text-base-content py-14">
          <div className="w-full lg:w-[25%] flex flex-col justify-center lg:justify-start items-center lg:items-start">
            {" "}
            <div className="w-[80px] h-[80px] ">
              <img
                src="https://i.postimg.cc/xjksgm2t/Screenshot-6.png"
                alt="site logo"
                className="w-full h-full rounded-xl"
              />
            </div>
            <p className="text-center md:text-left">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>
          <div className="footer grid grid-cols-2 md:grid-cols-5 mx-auto  w-full lg:w-[75%] font-semibold">
            <nav className="w-full flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-left">
              <h6 className="text-sm">Product</h6>
              <a className="link link-hover">Overview</a>
              <a className="link link-hover">Features</a>
              <a className="link link-hover">Solutions</a>
              <a className="link link-hover">Pricing</a>
              <a className="link link-hover">Releases</a>
            </nav>
            <nav className="w-full flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-left">
              <h6 className="text-sm">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Careers</a>
              <a className="link link-hover">Press</a>
              <a className="link link-hover">News</a>
              <a className="link link-hover">Media kit</a>
              <a className="link link-hover">Contact</a>
            </nav>

            <nav className="w-full flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-left">
              <h6 className="text-sm">Resources</h6>
              <a className="link link-hover">Blog</a>
              <a className="link link-hover">Newsletter</a>
              <a className="link link-hover">Events</a>
              <a className="link link-hover">Help centre</a>
              <a className="link link-hover">Tutorials</a>
              <a className="link link-hover">Support</a>
            </nav>
            <nav className="w-full flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-left">
              <h6 className="text-sm">Social</h6>
              <a className="link link-hover">Twitter</a>
              <a className="link link-hover">LinkedIn</a>
              <a className="link link-hover">Facebook</a>
              <a className="link link-hover">GitHub</a>
              <a className="link link-hover">AngelList</a>
              <a className="link link-hover">Dribbble</a>
            </nav>
            <nav className="w-full flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-left">
              <h6 className="text-sm">Legal</h6>
              <a className="link link-hover">Terms</a>
              <a className="link link-hover">Cookies</a>
              <a className="link link-hover">Licenses</a>
              <a className="link link-hover">Settings</a>
              <a className="link link-hover">Contact</a>
            </nav>
          </div>
        </footer>
        <footer className="w-full flex flex-col md:flex-row gap-5 items-center justify-between   border-[#C5E2FF] border-t px-10 py-4">
          <aside className="grid-flow-col items-center">
            © 2024 Heritage- Nest . All rights reserved.
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <a>
                <FaTwitter className="text-3xl text-[#0059B1]" />
              </a>
              <a>
                <FaLinkedin className="text-3xl text-[#0059B1]" />
              </a>
              <a>
                <FaFacebook className="text-3xl text-[#0059B1]" />
              </a>
              <a>
                <FaAngellist className="text-3xl text-[#0059B1]" />
              </a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
