import SIH23_logo from "/logos/SIH23_logo.png";
import G20_logo from "/logos/g20_logo.png";
import adazi_logo from "/logos/azadi_logo.png";
import moe_logo from "/images/Ministry_of_Education_India.png";
import primeMinisterImage from "../assets/narendra_modi.jpg";
const Header = () => {
  return (
    <>
      <div className="w-full border-b-2 flex justify-around items-center p-4">
        <div className="flex items-center justify-between gap-2 md:gap-8">
          <img
            src={SIH23_logo}
            alt="sih logo"
            className="w-12 md:w-24 md:h-20"
          />
          <img
            src={moe_logo}
            alt="Minsitry of Eduation"
            className="w-12 h-8 
            md:w-28 md:h-16"
          />
          <img src={G20_logo} alt="G20" className="w-16 md:w-28 md:h-16" />
          <img
            src={adazi_logo}
            alt="75 years of independence"
            className="w-20 md:w-32 md:h-20"
          />
        </div>
        <div>
          <img
            src={primeMinisterImage}
            alt="Prime Minister of India"
            className="w-36 h-36 rounded-lg border-2 border-slate-200"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
