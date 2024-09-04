import { Link, NavLink, Outlet } from "react-router-dom";

// import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  return (
    <div className="flex w-full mx-auto min-h-screen">
      <div className="w-56 hidden  md:block pt-5 bg-[#1b71c7]   text-white  h-full">
        <div className=" px-4"></div>
        <ul className="menu px-3 mt-10">
          <li className="mb-1">
            <NavLink
              to={"/dashboard/agent-profile"}
              className={({ isActive, isPending }) =>
                isActive
                  ? "border-2 w-full bg-black/30 font-bold text-white"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              Agent Profile
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to={"/dashboard/add-property"}
              className={({ isActive, isPending }) =>
                isActive
                  ? "border-2 w-full bg-black/30 font-bold text-white"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              Add Property
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to={"/dashboard/added-properties"}
              className={({ isActive, isPending }) =>
                isActive
                  ? "border-2 w-full bg-black/30 font-bold text-white"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              My Added Properties
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink
              to={"/dashboard/requested-properties"}
              className={({ isActive, isPending }) =>
                isActive
                  ? "border-2 w-full bg-black/30 font-bold text-white"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              {" "}
              Requested Properties
            </NavLink>
          </li>

          <li className="mb-1">
            <NavLink
              to={"/dashboard/sold-properties"}
              className={({ isActive, isPending }) =>
                isActive
                  ? "border-2 w-full bg-black/30 font-bold text-white"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              My Sold Properties
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        style={{ scrollbarWidth: "none" }}
        className="flex-1 h-auto  lg:h-screen overflow-y-scroll  "
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
