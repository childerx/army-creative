
import { IoLogoYoutube } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ABOUT, CONTACT, HOME } from "../constants/page-path";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-white flex flex-col items-center justify-center gap-5 shadow-xl">
      <div className="flex items-center gap-4">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <LuInstagram className="w-5 h-5 text-[#0D7711]" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="w-5 h-5 text-[#0D7711]" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaFacebookSquare className="w-5 h-5 text-[#0D7711]" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <IoLogoYoutube className="w-5 h-5 text-[#0D7711]" />
        </a>
      </div>
      <div className="flex items-center gap-4 font-medium text-base text-black">
        <Link to={ABOUT}>About</Link>
        <Link to={"#"}>Service</Link>
        <Link to={CONTACT}>Contact</Link>
      </div>
      <p className="text-black text-base ">
        {" "}
        &copy; Copyright {new Date().getFullYear()},{" "}
        <Link to={HOME}>ARMY Creative Studios</Link>
      </p>
    </footer>
  );
}
