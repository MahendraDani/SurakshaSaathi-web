import { ReactNode } from "react";
interface CenterContainerProps {
  children: ReactNode;
}
const CenterContianer: React.FC<CenterContainerProps> = ({ children }) => {
  return <div className="w-[70%] mx-auto">{children}</div>;
};

export default CenterContianer;
