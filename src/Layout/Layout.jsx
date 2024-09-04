import { Outlet } from "react-router-dom";
import Nav from "../components/Shared/Nav";
import Footer from "../components/Shared/Footer";

const Layout = () => {
  return (
    <div className="font-montserrat">
      <Nav />
      <div className="px-2 md:px-4 lg:px-0">
        <Outlet />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
