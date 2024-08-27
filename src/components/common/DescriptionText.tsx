import { DescriptionTextProps } from "@/types/commonTypes";
import { Typography } from "antd";

const DescriptionText = ({ description }: DescriptionTextProps) => {
  return (
    <Typography className="text-[16px]  opacity-80 ">{description}</Typography>
  );
};

export default DescriptionText;
