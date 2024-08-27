import RegisterForm from "@/components/auth/RegisterForm";
import { Box } from "@mui/material";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Box className="sm:w-[26%] w-[90%] border-white -mt-4 m-auto rounded-lg bg-white  p-5 flex flex-col items-center justify-center">
      <Box className="w-full">
        <Typography
          className="text-[22px] font-bold"
          style={{ fontFamily: "segoe ui" }}>
          Refer and Earn.
        </Typography>
        <Typography className="text-[20px] font-semibold -mt-1 text-[#acaba9]">
          Create an account with BST
        </Typography>
        {/* <SignUpOptions /> */}
        <RegisterForm />
        <Box>
          <Typography className="text-[14px]">
            Already have an account?{" "}
            <Link to="/auth/login">
              <span className="text-primary hover:underline font-bold cursor-pointer">
                Sign In
              </span>
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
