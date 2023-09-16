import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const Navbar = () => {
  const location = useLocation();
  const currentPathname = location.pathname;

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [agencyName, setAgencyName] = useState<string>("");

  const handleLoggedInStatus = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsUserLoggedIn(false);
      return;
    }

    const agencyName = localStorage.getItem("name");
    setIsUserLoggedIn(true);
    if (agencyName !== null) {
      setAgencyName(agencyName);
    }
  };

  useEffect(() => {
    handleLoggedInStatus();
  });

  return (
    <div
      className={`px-8 text-center ${
        currentPathname === "/" ? "mb-16" : ""
      } md:mb-32 flex justify-between items-center border-b-2`}
    >
      <Link to={"/"}>
        <h1 className="font-bold text-slate-800 text-4xl p-4">
          SurakshaSaathi
        </h1>
      </Link>
      {isUserLoggedIn ? (
        <div>{agencyName}</div>
      ) : (
        <div className="flex justify-between items-center gap-4">
          <Link
            to="/login"
            className={`${
              currentPathname === "/login" ? "hidden" : ""
            } border-2 min-w-[4rem] px-4 pb-1 rounded-sm border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-slate-100 duration-200 ease-in cursor-pointer`}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className={`${
              currentPathname === "/signup" ? "hidden" : ""
            } border-2 min-w-[4rem] px-4 pb-1 rounded-sm border-slate-600 bg-slate-600  text-slate-100 hover:bg-transparent hover:text-slate-600 duration-200 ease-in cursor-pointer`}
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
