import { TextTitleProps } from "@/types/commonTypes";
import { Typography } from "antd";

const TitleText = ({ title, description }: TextTitleProps) => {
  return (
    <>
      <Typography className="sm:text-[31px] text-[22px] text-center font-bold capitalize  ">
        {title}
      </Typography>
      <Typography className="text-[15px] text-center opacity-80 ">
        {description}
      </Typography>
    </>
  );
};

export default TitleText;
