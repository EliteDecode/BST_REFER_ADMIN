import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InfoCardDisplayProps } from "@/types/majorTypes";
import { Box, Grid } from "@mui/material";

import approvedIcon from "@/assets/icons/check-mark.png";
import pendingIcon from "@/assets/icons/time-management.png";
import declinedIcon from "@/assets/icons/declined.png";

import { IWithdrawal } from "@/types/wallet.types";
import { IoIosTrendingDown, IoIosTrendingUp } from "react-icons/io";
import { useSelector } from "react-redux";

const WalletCardDisplay = () => {
  const { withdrawals } = useSelector((state: any) => state.wallet);

  const pendingWithdrawals = withdrawals
    ?.filter((withdrawal: IWithdrawal) => withdrawal?.status === "pending")
    ?.reduce((acc: number, curr: IWithdrawal) => acc + curr.amount, 0);
  const approvedWithdrawals = withdrawals
    ?.filter((withdrawal: IWithdrawal) => withdrawal?.status === "approved")
    ?.reduce((acc: number, curr: IWithdrawal) => acc + curr.amount, 0);
  const declinedWithdrawals = withdrawals
    ?.filter((withdrawal: IWithdrawal) => withdrawal?.status === "declined")
    ?.reduce((acc: number, curr: IWithdrawal) => acc + curr.amount, 0);
  const totalWithdrawals =
    pendingWithdrawals + approvedWithdrawals + declinedWithdrawals;

  const approvedPercentage =
    totalWithdrawals > 0
      ? ((approvedWithdrawals / totalWithdrawals) * 100)?.toFixed(2)
      : "0.00";
  const pendingPercentage =
    totalWithdrawals > 0
      ? ((pendingWithdrawals / totalWithdrawals) * 100)?.toFixed(2)
      : "0.00";
  const declinedPercentage =
    totalWithdrawals > 0
      ? ((declinedWithdrawals / totalWithdrawals) * 100)?.toFixed(2)
      : "0.00";

  const WalletCardContents: InfoCardDisplayProps[] = [
    {
      title: "Approved Transactions",
      description: `₦ ${approvedWithdrawals?.toLocaleString()}`,
      link: "/dashboard/teachers",
      buttonText: approvedPercentage || "0.00", // Total earnings is always 100%
      image: approvedIcon,
    },
    {
      title: "Pending Transactions",
      description: `₦ ${pendingWithdrawals?.toLocaleString()}`,
      link: "/dashboard/teachers",
      buttonText: `-${pendingPercentage}` || "0.00",
      image: pendingIcon,
    },
    {
      title: "Declined Transactions",
      description: `₦ ${declinedWithdrawals?.toLocaleString()}`,
      link: "/dashboard/students",
      buttonText: `-${declinedPercentage}%`,
      image: declinedIcon,
    },
  ];

  return (
    <Grid item sm={12} md={12} className="">
      <Grid container spacing={2}>
        {WalletCardContents.map((item, index) => (
          <Grid item xs={12} sm={12} md={12} key={index} className="">
            <Card className="border-none">
              <Box className="flex justify-between items-center">
                <CardHeader>
                  <CardTitle
                    className="text-[12px] text-gray-500"
                    style={{ fontFamily: "eczar" }}>
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-primary text-[22px] font-bold">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <Box className="p-6">
                  <img src={item.image} alt=" image" className="w-[22px]" />
                </Box>
              </Box>
              <CardFooter>
                <Box
                  className={` ${parseInt(item?.buttonText) < 0 ? "bg-red-50" : "bg-green-50"} border space-x-1 py-1 px-1 flex items-center justify-center rounded-md`}>
                  {parseInt(item?.buttonText) > 0 ? (
                    <IoIosTrendingUp className="text-green-500" size={10} />
                  ) : (
                    <IoIosTrendingDown className="text-red-500" size={10} />
                  )}
                  <span
                    className={`text-[9px] ${parseInt(item?.buttonText) < 0 ? "text-red-500" : "text-green-500"}`}>
                    {item?.buttonText}
                  </span>
                </Box>
              </CardFooter>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default WalletCardDisplay;
