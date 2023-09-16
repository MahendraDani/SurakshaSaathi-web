import NavbarLogin from "../components/NavbarLogin";
const TempHome = () => {
  return (
    <>
      <NavbarLogin />
      <div className="w-full h-[30rem] sm:h-[22rem] grid place-content-center">
        <h1 className="text-3xl px-4 text-center font-bold ">
          Welcome to the Agency Dashboard!
        </h1>
        <h3 className="text-center">Development in progress </h3>
      </div>
    </>
  );
};

export default TempHome;
