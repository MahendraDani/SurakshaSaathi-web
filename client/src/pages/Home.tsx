import React from "react";
import NarendraModiImage from "../assets/narendra_modi.jpg";
import CenterContianer from "../layout/Center.container";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <CenterContianer>
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <img
            src={NarendraModiImage}
            className="w-64 h-64 rounded-lg border-2 border-slate-200"
          />
          <div>
            <h2 className="text-slate-700 text-3xl font-bold text-center">
              Platform to find rescue agencies near you and the support they can
              provide!
            </h2>
          </div>
        </div>
      </CenterContianer>
      <div className="fixed bottom-0 w-full h-24 border-2 border-slate-200">
        <div className="w-[45%] h-24 mx-auto flex justify-between items-center">
          <h3 className="text-slate-800 font-semibold text-xl mb-1">
            SurakshaSaathi
          </h3>
          <a
            href="https://github.com/MahendraDani/SurakshaSaathi-web"
            target="blank"
            className="text-slate-700 hover:text-black duration-200 ease-in cursor-pointer"
          >
            Github
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
