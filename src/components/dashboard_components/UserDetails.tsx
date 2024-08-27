import { Box } from "@mui/material";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import AllReferralsTables from "./tables/AllReferralsTables";
import { FaNairaSign } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import ButtonSpinners from "@/helpers/ButtonSpinners";
import useSuspendUser from "@/hooks/form-hooks/useSuspendUser";

const UserDetails = () => {
  const { singleUser } = useSelector((state: any) => state.user);
  const { isLoading, handleToggleSuspend } = useSuspendUser();

  const userDetails = [
    {
      key: "Fullname",
      value: singleUser?.user?.fullname,
    },
    {
      key: "Email",
      value: singleUser?.user?.email,
    },
    {
      key: "Phone",
      value: singleUser?.user?.phone || "Not Set",
    },
    {
      key: "Course",
      value: singleUser?.user?.course || "Not Set",
    },
    {
      key: "Address",
      value: singleUser?.user?.address || "Not Set",
    },
  ];

  const balance = singleUser?.wallet?.total - singleUser?.wallet?.withdrawn;

  const walletDetails = [
    {
      key: "Total",
      value: singleUser?.wallet?.total?.toLocaleString(),
    },
    {
      key: "Withdrawn",
      value: singleUser?.wallet?.withdrawn?.toLocaleString(),
    },
    {
      key: "Balance",
      value: balance?.toLocaleString(),
    },
  ];

  return (
    <Box className=" gap-4">
      <Box className="grid gap-4 sm:grid-cols-2 grid-cols-1">
        <Box className="space-y-2 w-full bg-white rounded-md shadow-lg p-3">
          <Typography
            className="text-[17px] font-bold"
            style={{ fontFamily: "eczar" }}>
            User Details
          </Typography>

          {userDetails?.map((item, index) => (
            <Box key={index} className="flex justify-between gap-2">
              <span className="text-[13px]">{item?.key}:</span>
              <span className="text-[13px] font-bold">{item?.value}</span>
            </Box>
          ))}
          <Box className="flex justify-between gap-2">
            {" "}
            {/* Changed classname to className */}
            <span className="text-[13px]"> Status:</span>
            {singleUser?.user?.isSuspended === false ? (
              <span className="text-green-500 bg-green-200 border px-2 py-0 rounded-md text-[11px] ">
                Active
              </span>
            ) : (
              <span className="text-orange-500 bg-orange-200 border px-2 py-0 rounded-md text-[11px] ">
                Suspended
              </span>
            )}
          </Box>
          <Box className="flex justify-between gap-2">
            {" "}
            {/* Changed classname to className */}
            <span className="text-[13px]">Account Status:</span>
            {singleUser?.user?.isProfileUpdated === true ? (
              <span className="text-purple-500 bg-purple-200 border px-2 py-0 rounded-md text-[11px] ">
                Account Updated
              </span>
            ) : (
              <span className="text-orange-500 bg-orange-200 border px-2 py-0 rounded-md text-[11px] ">
                Not Updated
              </span>
            )}
          </Box>
          <Dialog>
            <DialogTrigger asChild>
              {singleUser?.user?.isSuspended === false ? (
                <Button variant="destructive" size="sm">
                  {" "}
                  Suspend User{" "}
                </Button>
              ) : (
                <Button variant="default" size="sm">
                  {" "}
                  Activate User{" "}
                </Button>
              )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle style={{ fontFamily: "eczar" }}>
                  {singleUser?.user?.isSuspended === false
                    ? "Suspend User"
                    : "Activate User"}
                </DialogTitle>
                <DialogDescription>
                  Are you sure you want to{" "}
                  {singleUser?.user?.isSuspended === false
                    ? "suspend"
                    : "activate"}{" "}
                </DialogDescription>
              </DialogHeader>

              <DialogFooter>
                <Button
                  disabled={isLoading}
                  variant={
                    singleUser?.user?.isSuspended === false
                      ? "destructive"
                      : "default"
                  }
                  onClick={handleToggleSuspend}
                  type="button"
                  style={{ fontFamily: "eczar" }}>
                  {isLoading ? <ButtonSpinners /> : "Proceed"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Box>
        <Box className="space-y-2 w-full bg-white rounded-md shadow-lg p-3">
          <Typography
            className="text-[17px] font-bold"
            style={{ fontFamily: "eczar" }}>
            User Wallet Details
          </Typography>

          {walletDetails?.map((item, index) => (
            <Box key={index} className="flex justify-between gap-2">
              <span className="text-[13px]">{item.key}:</span>
              <span className="text-[13px] flex items-center gap-1 font-bold">
                <FaNairaSign /> <span>{item.value}</span>
              </span>
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="mt-5 border-gray-200 shadow-md border bg-white p-5 rounded-lg sm:overflow-x-auto overflow-x-scroll">
        <Typography
          className="text-[17px] font-bold"
          style={{ fontFamily: "eczar" }}>
          All Referrals
        </Typography>
        <AllReferralsTables data={singleUser?.referrals} />
      </Box>
    </Box>
  );
};

export default UserDetails;
