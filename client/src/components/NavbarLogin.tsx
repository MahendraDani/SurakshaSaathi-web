import { useLocation, Link, useNavigate } from "react-router-dom";

const NavbarLogin = () => {
  const location = useLocation();
  const currentPathname = location.pathname;

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    navigate("/");
    return;
  };
  return (
    <div
      className={`px-8 text-center ${
        currentPathname === "/" ? "mb-16" : ""
      } flex justify-between items-center border-b-2`}
    >
      <Link to={"/"}>
        <h1 className="font-bold text-slate-800 text-4xl p-4">
          SurakshaSaathi
        </h1>
      </Link>
      <div className="flex justify-between items-center gap-4">
        <button
          className="border-2 min-w-[4rem] px-4 pb-[0.1rem] rounded-sm border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-slate-100 duration-200 ease-in cursor-pointer text-[1rem]"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavbarLogin;
