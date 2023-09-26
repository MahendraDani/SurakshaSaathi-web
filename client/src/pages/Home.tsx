import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import indiaMap from "../../public/images/india.png";
import { AiFillGithub } from "react-icons/ai";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header />
      {/* <div className="py-12 w-full grid place-content-center">
        <img src={indiaMap} alt="Indian map" />
      </div> */}
      {/* <div className="w-full h-24 border-2 border-slate-200">
        <div className="w-[45%] h-24 mx-auto flex justify-between items-center">
          <h3 className="text-slate-800 font-semibold text-xl mb-1">
            SurakshaSaathi
          </h3>
          <a
            href="https://github.com/MahendraDani/SurakshaSaathi-web"
            target="blank"
            className="flex justify-between items-center gap-2 hover:underline text-slate-700 hover:text-black duration-200 ease-in cursor-pointer"
          >
            <div>
              <AiFillGithub />
            </div>
            <p>Github</p>
          </a>
        </div>
      </div> */}
    </>
  );
};

export default Home;
