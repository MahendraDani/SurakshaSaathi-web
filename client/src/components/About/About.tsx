import InfoCard from "./InfoCard";

type InfoCardDetails = {
  title: string;
  description: string;
};
const About = () => {
  const InfoCardDetails: Array<InfoCardDetails> = [
    {
      title: "SURAKSHATSAATHI",
      description:
        "Our mission is simple yet profound: to empower communities and organizations to respond effectively to disasters. With years of dedicated service in the field of disaster management, we've harnessed cutting-edge technology and a passion for making a difference.",
    },
    {
      title: "WHO WE ARE?",
      description:
        "We are a team of experts in disaster management, technology, and community engagement. Our journey began with a vision of creating a safer world for everyone.",
    },
    {
      title: "WHAT WE DO?",
      description:
        "We've developed an innovative platform that bridges the gap between communities and response agencies. Suraksha Saathi offers real-time information, collaboration tools, and resources, transforming disaster response into a collective effort.",
    },
    {
      title: "WHY ChOOSE US?",
      description:
        "Our commitment to excellence, user-friendly solutions, and unwavering dedication set us apart. We're not just a platform; we're your trusted partner in disaster readiness and recovery.",
    },
  ];
  return (
    <div className="w-full bg-[#0F1B92] text-white p-4">
      <div className="p-4 py-8  lg:w-[80%] mx-auto space-y-4">
        <h1 className="text-3xl font-bold text-center pb-8">ABOUT US</h1>
        <div className="flex flex-wrap md:justify-between justify-center items-center gap-4">
          {InfoCardDetails.map((infoCard) => {
            return (
              <InfoCard
                title={infoCard.title}
                description={infoCard.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
