import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Nav = () => {
  const { logOut, user } = useAuth();

  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="bg-[#ECF5FF] w-full py-2 shadow-xl">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        {/* Menu for Mobile device */}
        <div className="w-full relative block md:hidden">
          <div className="flex  justify-between items-center w-full">
            <div className="w-[50px] h-[60px] block md:hidden ml-4 md:ml-0">
              <img
                src="https://i.postimg.cc/xjksgm2t/Screenshot-6.png"
                alt="site logo"
                className="w-full h-full rounded-xl"
              />
            </div>
            <div>
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[999] mt-3 w-44 p-2 shadow right-0"
                >
                  <Link to={"/buyer-page"} className="my-1 w-full">
                    <li>Buy</li>
                  </Link>
                  <Link to={"/buyer-page"} className="my-1 w-full">
                    <li>Sell</li>
                  </Link>
                  <Link to={"/"} className="my-1 w-full">
                    <li>Services</li>
                  </Link>
                  <Link to={"/manage-rentals"} className="my-1 w-full">
                    <li>Manage Rentals</li>
                  </Link>
                  <Link to={"/about"} className="my-1 w-full">
                    <li>About</li>
                  </Link>

                  <Link to={"/login"} className="my-1 w-full">
                    <li>Sign In</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Menu for medium and large device */}
        <div className="w-full hidden md:block">
          <ul className="flex items-center gap-8 w-full text-lg">
            <Link to={"/buyer-page"}>
              <li>Buy</li>
            </Link>
            <Link to={"/sell-property"}>
              <li>Sell</li>
            </Link>
            <Link to={"/buyer-page"}>
              <li>Services</li>
            </Link>
          </ul>
        </div>
        <Link to={"/"}>
          {" "}
          <div className="w-[60px] h-[80px] hidden md:block">
            <img
              src="https://i.postimg.cc/xjksgm2t/Screenshot-6.png"
              alt="site logo"
              className="w-full h-full rounded-xl"
            />
          </div>
        </Link>
        <div className="w-full hidden md:block">
          <ul className="flex justify-end items-center gap-8 w-full text-lg">
            <Link to={"/about"}>
              <li>About Us</li>
            </Link>

            <Link to={"/manage-rentals"}>
              <li>Manage Rentals</li>
            </Link>
            {user ? (
              <>
                <li onClick={handleLogout} className="cursor-pointer">
                  Logout
                </li>
              </>
            ) : (
              <Link to={"/login"}>
                <li>Sign In</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
