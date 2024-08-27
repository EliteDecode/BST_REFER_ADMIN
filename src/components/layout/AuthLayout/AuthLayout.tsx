import { Box } from "@mui/material";

import { Link, Outlet } from "react-router-dom";
import logo from "@/assets/images/Logo.png";

const AuthLayout = () => {
  return (
    <Box className="bg-[#e7e7e7] h-screen flex justify-center items-center ">
      <Box className="px-8 absolute top-5 sm:left-10 left-0 sm:py-2 py-8">
        <Link to="/">
          <img src={logo} alt="Logo of BST" className="sm:w-[12%] w-[45%]" />
        </Link>
      </Box>
      <Box className="w-full ">
        <Outlet />
      </Box>
    </Box>
  );
};

export default AuthLayout;
