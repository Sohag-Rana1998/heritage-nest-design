import { Outlet } from "react-router-dom";
import Nav from "../components/Shared/Nav";
import Footer from "../components/Shared/Footer";

const Layout = () => {
  return (
    <div className="font-montserrat">
      <Nav />
      <div>
        <Outlet />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
