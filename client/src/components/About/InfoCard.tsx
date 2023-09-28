interface InfoCardProps {
  title: string;
  description: string;
}
const InfoCard = ({ title, description }: InfoCardProps) => {
  return (
    <div className="w-60 min-h-[25rem] rounded-sm bg-[#BED6FF] space-y-3 p-4">
      <h2 className="text-center py-4 bg-[#3848E0] text-xl font-semibold space-x-2">
        {title}
      </h2>
      <p className="text-[#3848E0] px-2">{description}</p>
    </div>
  );
};

export default InfoCard;
