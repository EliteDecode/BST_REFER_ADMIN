import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";
import useForgotPasswordForm from "@/hooks/form-hooks/useForgotPasswordForm";
import { Box } from "@mui/material";
import { Typography } from "antd";

const ForgotPassword = () => {
  const { isSentMail } = useForgotPasswordForm();

  return (
    <Box className="sm:w-[26%] w-[95%] border-white m-auto rounded-lg bg-white  p-5 flex flex-col items-center justify-center">
      {isSentMail ? (
        <Box className="w-full">
          <Typography
            className="text-[22px] font-bold"
            style={{ fontFamily: "segoe ui" }}>
            Check your email
          </Typography>
          <Typography className="text-[12px] text-[#acaba9]">
            We have sent a password reset link to your email
          </Typography>
        </Box>
      ) : (
        <Box className="">
          <Typography
            className="text-[22px] font-bold"
            style={{ fontFamily: "segoe ui" }}>
            Forgot Password?
          </Typography>
          <Typography className="text-[12px] text-[#acaba9]">
            Enter your email address and we'll send you a link to reset your
          </Typography>

          {/* <SignUpOptions /> */}
          <ForgotPasswordForm />
        </Box>
      )}
    </Box>
  );
};

export default ForgotPassword;
