import CenterContianer from "../../layout/Center.container";
import AgencyInfo from "./AgencyInfo";
import NDMAImg from "/images/agencies/NDMA.png";
// import IMDImg from "/images/agencies/IMD.png";
// import CWCImg from "/images/agencies/CWC.jpg";
// import FSIImg from "/images/agencies/FSI.jpg";
// import DRDOImg from "/images/agencies/DRDO.png";

const RegisteredAgencies = () => {
  type AgencyInfo = {
    width?: string;
    height?: string;
    imgUrl: string;
    alt: string;
    description: string;
  };
  const Agencies: Array<AgencyInfo> = [
    {
      imgUrl: NDMAImg,
      alt: "NDMA",
      description: `National Disaster Management Authority (India), abbreviated as NDMA,
      is an apex Body of Government of India, with a mandate to lay down
      policies for disaster management.`,
    },
    {
      imgUrl: NDMAImg,
      alt: "IMD",
      description: `The India Meteorological Department is an agency of the Ministry of Earth Sciences of the Government of India. It is the principal agency responsible for meteorological observations, weather forecasting and seismology.`,
      width: `4`,
    },
    {
      imgUrl: NDMAImg,
      alt: "FSI",
      description: `Forest Survey of India, founded in June 1981 and headquartered at Dehradun in Uttarkhand, is the Government of India Ministry of Environment, Forest and Climate Change organization which conducts forest surveys `,
    },
    {
      imgUrl: NDMAImg,
      alt: "DRDO",
      description: `The Defence Research and Development Organisation is the premier agency under the Department of Defence Research and Development in Ministry of Defence of the Government of India, charged with the military's research and development`,
    },
    {
      imgUrl: NDMAImg,
      alt: "CWC",
      description: `CWC stands for Central Water Commission, which is an autonomous sectoral regulatory body of the Government of India. It is responsible for the planning water resources in the country.`,
    },
  ];
  return (
    <div className="w-full py-16">
      <CenterContianer>
        <h1 className="pb-16 text-3xl font-bold text-center">
          REGISTERED AGENCIES
        </h1>
        <div className="flex flex-col justify-between items-start lg:gap-16 gap-6">
          {Agencies.map((agency) => {
            return (
              <AgencyInfo
                imgUrl={agency.imgUrl}
                alt={agency.alt}
                description={agency.description}
              />
            );
          })}
        </div>
      </CenterContianer>
    </div>
  );
};

export default RegisteredAgencies;
