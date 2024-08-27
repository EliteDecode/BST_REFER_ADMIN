import { Box } from "@mui/material";
import { Typography } from "antd";
import { useSelector } from "react-redux";

const WithdrawalDetails = () => {
  const { singleWithdrawal } = useSelector((state: any) => state.wallet);

  const withdrawalDetails = [
    {
      key: "Amount",
      value: singleWithdrawal?.withdrawal?.amount?.toLocaleString(),
    },

    {
      key: "Date",
      value: new Date(singleWithdrawal?.withdrawal?.date)?.toLocaleString(
        "en",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        }
      ),
    },
  ];

  const userDetails = [
    {
      key: "Fullname",
      value: singleWithdrawal?.user?.fullname,
    },
    {
      key: "Email",
      value: singleWithdrawal?.user?.email,
    },
    {
      key: "Phone",
      value: singleWithdrawal?.user?.phone || "Not Set",
    },
    {
      key: "Course",
      value: singleWithdrawal?.user?.course || "Not Set",
    },
    {
      key: "Address",
      value: singleWithdrawal?.user?.address || "Not Set",
    },
  ];

  return (
    <Box className="grid sm:grid-cols-2 grid-cols-1 gap-4">
      <Box className="space-y-2  bg-white rounded-md shadow-lg p-3">
        <Typography
          className="text-[17px] font-bold"
          style={{ fontFamily: "eczar" }}>
          Withdrawal Details
        </Typography>

        {withdrawalDetails?.map((item, index) => (
          <Box key={index} className="flex justify-between gap-2">
            <span className="text-[13px]">{item.key}:</span>
            <span className="text-[13px] font-bold">{item.value}</span>
          </Box>
        ))}
        <Box className="flex justify-between gap-2">
          {" "}
          {/* Changed classname to className */}
          <span className="text-[13px]">Transaction Status:</span>
          {singleWithdrawal?.withdrawal?.status === "approved" ? (
            <span className="text-white bg-green-600 border px-2 py-0 rounded-md text-[11px] ">
              Successful
            </span>
          ) : singleWithdrawal?.withdrawal?.status === "declined" ? (
            <span className="text-white bg-red-600 border px-2 py-0 rounded-md text-[11px] ">
              Declined
            </span>
          ) : (
            <span className="text-white bg-orange-600 border px-2 py-0 rounded-md text-[11px] ">
              Pending
            </span>
          )}
        </Box>
      </Box>
      <Box className="bg-white shadow-lg rounded-md p-3">
        <Typography
          className="text-[17px] font-bold"
          style={{ fontFamily: "eczar" }}>
          User Details
        </Typography>
        <Box className="space-y-2">
          {userDetails?.map((item, index) => (
            <Box key={index} className="flex justify-between gap-2">
              <span className="text-[13px]">{item?.key}:</span>
              <span className="text-[13px] font-bold">{item?.value}</span>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WithdrawalDetails;
