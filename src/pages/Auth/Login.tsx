import adminBg from "@/assets/images/admin.jpg";
import LoginForm from "@/components/auth/LoginForm";
import { Box } from "@mui/material";
import { Typography } from "antd";

const Login = () => {
  return (
    <Box className="w-full grid sm:grid-cols-2 grid- border-white m-auto rounded-lg ">
      <Box className="w-full bg-white p-5 rounded-md h-screen flex items-center justify-center flex-col">
        <Box className="sm:w-[70%] w-full m-auto">
          <Box className="w-full">
            <Typography
              className="text-[22px] font-bold"
              style={{ fontFamily: "segoe ui" }}>
              Admin Welcome Back.
            </Typography>
            <Typography className="text-[20px] font-semibold -mt-1 text-[#acaba9]">
              Please login to your account
            </Typography>
          </Box>
          {/* <SignUpOptions /> */}
          <LoginForm />
        </Box>
      </Box>
      <Box
        className="sm:block hidden"
        style={{
          background: `url(${adminBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundBlendMode: "overlay",
        }}></Box>
    </Box>
  );
};

export default Login;
