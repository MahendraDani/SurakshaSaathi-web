import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
// import indiaMap from "../../public/images/india.png";
import Weather from "../components/Weather/Weather";
import Footer from "../components/Footer";
import About from "../components/About/About";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      {/* <Weather /> */}
      {/* <Footer /> */}
      {/* <div className="py-12 w-full grid place-content-center">
        <img src={indiaMap} alt="Indian map" />
      </div> */}
    </>
  );
};

export default Home;
