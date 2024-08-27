import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { reset } from "@/services/features/auth/authSlice";
import { AppDispatch } from "@/store";
import useHandleResizeSidebar from "@/hooks/useHandleResizeSidebar";

const DashboardLayout = () => {
  const { isSidebar, setIsSidebar } = useHandleResizeSidebar();
  const { isSuccess, message } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isSuccess && message == "Login Successfully") {
      toast.success("Login Successfull");
      dispatch(reset());
    }
  }, [isSuccess]);

  return (
    <div>
      <Box
        className={`flex flex-wrap h-screen  ${
          isSidebar ? "overflow-y-hidden" : "overflow-y-scroll"
        }`}>
        <Box
          className={`sidebar transit  bg-white z-30 ${
            isSidebar ? "showSidebar  " : "sm:w-[0%]"
          }`}
          sx={{
            left: {
              xs: isSidebar ? "0" : "-100%",
              sm: isSidebar ? "0" : "-100%", // Keep sidebar hidden for small screens
            },
          }}>
          <Sidebar setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
        </Box>
        <Box
          className={`${
            isSidebar ? "header" : "sm:w-[100%]"
          } header transit  bg-white w-[100%]`}>
          <Header setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
          <Box className=" sm:p-5 p-1 h-screen w-full overflow-y-scroll bg-[#fafafa] ">
            <Outlet />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default DashboardLayout;
