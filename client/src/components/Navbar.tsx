import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  return (
    <div
      className={`px-8 text-center ${
        currentPathname === "/" ? "mb-4" : "md:mb-32"
      }  flex justify-between items-center border-b-2`}
    >
      <Link to={"/"}>
        <h1 className="font-bold text-slate-800 text-4xl p-4">
          SurakshaSaathi
        </h1>
      </Link>
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
    </div>
  );
};

export default Navbar;
