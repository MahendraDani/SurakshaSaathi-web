interface AgencyInfoProps {
  width?: string;
  height?: string;
  imgUrl: string;
  alt: string;
  description: string;
}
const AgencyInfo = ({
  width,
  height,
  imgUrl,
  alt,
  description,
}: AgencyInfoProps) => {
  return (
    <div className="flex justify-start items-center gap-16">
      <div>
        <img src={imgUrl} alt={alt} />
      </div>
      <h3 className="lg:text-lg">{description}</h3>
    </div>
  );
};

export default AgencyInfo;
