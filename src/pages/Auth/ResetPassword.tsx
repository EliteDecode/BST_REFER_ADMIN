import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import { Box } from "@mui/material";
import { Typography } from "antd";

const ResetPassword = () => {
  return (
    <Box className="sm:w-[26%] w-[90%] border-white -mt-4 m-auto rounded-lg bg-white p-5 flex flex-col items-center justify-center">
      <Box className=" w-full">
        <Typography
          className="text-[22px] font-bold"
          style={{ fontFamily: "segoe ui" }}>
          Password Reset
        </Typography>

        <Typography className="text-[12px] font-semibold -mt-1 text-[#acaba9]">
          Please enter your new password below.
        </Typography>

        <ResetPasswordForm />
      </Box>
    </Box>
  );
};

export default ResetPassword;
