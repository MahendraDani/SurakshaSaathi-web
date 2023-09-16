import { useNavigate } from "react-router-dom";

const TempHome = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    return;
  };
  return (
    <div className="w-full h-screen flex justify-center items-center gap-4 flex-col">
      <h1 className="text-5xl">Welcome to our website!</h1>
      <button
        className="border-2 min-w-[4rem] px-4 pb-[0.1rem] rounded-sm border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-slate-100 duration-200 ease-in cursor-pointer text-[1rem]"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default TempHome;
