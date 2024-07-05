import { FunctionComponent } from "react";
import "./IPhone1415ProMaxHome.css";

export type IPhone1415ProMaxHomeType = {
  className?: string;
};

const IPhone1415ProMaxHome: FunctionComponent<IPhone1415ProMaxHomeType> = ({
  className = "",
}) => {
  return (
    <div className={`iphone-14-15-pro-max-home ${className}`}>
      <div className="iphone-14-15-pro-max-home-child" />
    </div>
  );
};

export default IPhone1415ProMaxHome;