import { Link, useLocation } from "react-router-dom";
import NavLinks from "./NavLinks";
import surakshasaathi from "/logos/surakshasaathi.png";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import NavLinksMini from "./Navbar/NavLinksMini";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const location = useLocation();
  const currentPathname = location.pathname;
  return (
    <div
      className={`p-2 px-6 text-center ${
        currentPathname === "/" ? "mb-4" : "md:mb-32"
      }  flex justify-between items-center border-b-2 bg-[#BED6FF] sticky top-0 right-0 left-0`}
    >
      <Link to={"/"}>
        <img src={surakshasaathi} className="w-40" alt="Surakshasaathi" />
      </Link>
      <div className="hidden lg:flex justify-between items-center gap-4 md:text-lg">
        <NavLinks href="#home" title="Home" />
        <NavLinks href="#about" title="About" />
        <NavLinks href="#agencies" title="Agencies" />
        <NavLinks href="#dos_and_donts" title="Do's & Don't" />
        <NavLinks href="#donate" title="Donate" />

        <Link
          to="/login"
          className={`${
            currentPathname === "/login" ? "hidden" : ""
          } border-2 min-w-[4rem] px-4 pb-1 rounded-3xl border-[#0F1B92] text-[#0F1B92] hover:bg-[#0F1B92] hover:text-slate-100 duration-200 ease-in cursor-pointer`}
        >
          Login
        </Link>
      </div>

      <div className="lg:hidden">
        {nav ? (
          <RxCross1
            className={`${
              !nav ? "hidden" : "block"
            } text-[#0F1B92] cursor-pointer `}
            onClick={() => {
              setNav(false);
            }}
          />
        ) : (
          <AiOutlineMenu
            className={`${
              nav ? "hidden" : "block"
            } text-[#0F1B92] cursor-pointer`}
            onClick={() => {
              setNav(true);
            }}
          />
        )}
      </div>

      {nav && (
        <div
          className="h-[50%] fixed right-0 top-16 left-0 bg-[#0F1B92] opacity-90 flex flex-col justify-center items-center gap-2
        "
        >
          <NavLinksMini href="#home" title="Home" />
          <NavLinksMini href="#agencies" title="Agencies" />
          <NavLinksMini href="#about" title="About" />
          <NavLinksMini href="#Dos_and_Dont" title="Do's and Don't" />
          <NavLinksMini href="#donate" title="Donate" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
