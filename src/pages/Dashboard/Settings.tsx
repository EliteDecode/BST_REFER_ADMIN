import { ChangeEmailForm } from "@/components/dashboard_components/forms/ChangeEmailForm";
import ChangePasswordForm from "@/components/dashboard_components/forms/ChangePasswordForm";
import useSettings from "@/hooks/useSettings";
import { Box } from "@mui/material";
import { Typography } from "antd";
import { FaRegCopy } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ButtonSpinners from "@/helpers/ButtonSpinners";

const Settings = () => {
  const { user, handleDelete, isLoading, copyReferralCode } = useSettings();

  return (
    <Box>
      <Box className="grid gap-4 sm:grid-cols-3 grid-cols-1">
        <Box className="border bg-white shadow-md rounded-md p-3">
          <Typography style={{ fontFamily: "eczar" }}>Referral Code</Typography>
          <Box className="shadow-inner p-3 flex justify-between rounded-md border shadow-primary">
            <Typography className="font-bold">{user?.referralCode}</Typography>
            <Box
              className="flex items-center border space-x-2 cursor-pointer rounded-md bg-green-100 text-green-600 px-2 py-0.5"
              onClick={copyReferralCode}>
              <FaRegCopy size={15} />
              <span className="text-[12px]">Copy code</span>
            </Box>
          </Box>
        </Box>

        <Box className="border bg-white shadow-md rounded-md p-3">
          <Typography style={{ fontFamily: "eczar" }}>Your Email</Typography>
          <Box className="shadow-inner p-3 flex justify-between rounded-md border shadow-primary">
            <Typography className="font-bold">{user?.email}</Typography>
            <ChangeEmailForm />
          </Box>
        </Box>

        <Box className="border bg-white shadow-md rounded-md p-3">
          <Typography style={{ fontFamily: "eczar" }}>Your Account</Typography>
          <Box className="shadow-inner p-3 flex justify-between rounded-md border shadow-primary">
            <Typography className="font-bold">{user?.fullname}</Typography>
            <Dialog>
              <DialogTrigger asChild>
                <Box className="flex items-center border space-x-2 cursor-pointer rounded-md bg-red-100 text-red-600 px-2 py-0.5 ">
                  <MdDeleteOutline size={15} />
                  <span className="text-[12px]">Delete Account</span>
                </Box>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle style={{ fontFamily: "eczar" }}>
                    Delete Account
                  </DialogTitle>
                  <DialogDescription>
                    Are you sure you want to delete your account? This action
                    cannot be undone
                  </DialogDescription>
                </DialogHeader>

                <DialogFooter>
                  <Button
                    disabled={isLoading}
                    variant="destructive"
                    onClick={handleDelete}
                    type="submit"
                    style={{ fontFamily: "eczar" }}>
                    {isLoading ? <ButtonSpinners /> : "Delete Account"}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Box>
        </Box>
      </Box>
      <Box className="sm:w-[35%] w-full border shadow-md mt-5 p-5 rounded-md">
        <Typography className="font-bold" style={{ fontFamily: "eczar" }}>
          Change Password
        </Typography>
        <ChangePasswordForm />
      </Box>
    </Box>
  );
};

export default Settings;
