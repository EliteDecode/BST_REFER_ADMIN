import { Box } from "@mui/material";
import { Typography } from "antd";
import { useSelector } from "react-redux";

const ReferralDetails = () => {
  const { singleReferral } = useSelector((state: any) => state.referral);

  const referralDetails = [
    {
      key: "Fullname",
      value: singleReferral?.referral?.fullname,
    },
    {
      key: "Email",
      value: singleReferral?.referral?.email,
    },
    {
      key: "Phone",
      value: singleReferral?.referral?.phone || "Not Set",
    },
    {
      key: "Course",
      value: singleReferral?.referral?.course || "Not Set",
    },
    {
      key: "Address",
      value: singleReferral?.referral?.address || "Not Set",
    },
  ];

  const userDetails = [
    {
      key: "Fullname",
      value: singleReferral?.user?.fullname,
    },
    {
      key: "Email",
      value: singleReferral?.user?.email,
    },
    {
      key: "Phone",
      value: singleReferral?.user?.phone || "Not Set",
    },
    {
      key: "Course",
      value: singleReferral?.user?.course || "Not Set",
    },
    {
      key: "Address",
      value: singleReferral?.user?.address || "Not Set",
    },
  ];

  return (
    <Box className="grid grid-cols-2 gap-4">
      <Box className="space-y-2  bg-white rounded-md shadow-lg p-3">
        <Typography
          className="text-[17px] font-bold"
          style={{ fontFamily: "eczar" }}>
          Referral Details
        </Typography>

        {referralDetails?.map((item, index) => (
          <Box key={index} className="flex justify-between gap-2">
            <span className="text-[13px]">{item.key}:</span>
            <span className="text-[13px] font-bold">{item.value}</span>
          </Box>
        ))}
        <Box className="flex justify-between gap-2">
          {" "}
          {/* Changed classname to className */}
          <span className="text-[13px]">Match Status:</span>
          {singleReferral?.referral?.isMatched === true ? (
            <span className="text-green-500 bg-green-200 border px-2 py-0 rounded-md text-[11px] ">
              Successful
            </span>
          ) : (
            <span className="text-orange-500 bg-orange-200 border px-2 py-0 rounded-md text-[11px] ">
              Pending
            </span>
          )}
        </Box>
      </Box>
      <Box className="bg-white shadow-lg rounded-md p-3">
        <Typography
          className="text-[17px] font-bold"
          style={{ fontFamily: "eczar" }}>
          Referred By
        </Typography>
        <Box className="space-y-2">
          {userDetails?.map((item, index) => (
            <Box key={index} className="flex justify-between gap-2">
              <span className="text-[13px]">{item.key}:</span>
              <span className="text-[13px] font-bold">{item.value}</span>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ReferralDetails;
