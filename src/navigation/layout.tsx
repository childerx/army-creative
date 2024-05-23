import { Outlet } from "react-router-dom";
import Navbar from "./nav-bar";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="w-full min-h-screen h-full bg-black flex flex-col justify-between">
      <Navbar />
      <div className="flex-1 h-full bg-white">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
