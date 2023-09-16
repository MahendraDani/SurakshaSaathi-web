import NavbarLogin from "../components/NavbarLogin";

const TempHome = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-4 flex-col">
      <NavbarLogin />
      <h1 className="text-5xl">Welcome to our website!</h1>
    </div>
  );
};

export default TempHome;
