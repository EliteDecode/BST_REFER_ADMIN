import { Button } from "@/components/ui/button";
import ButtonSpinners from "@/helpers/ButtonSpinners";
import useDashboardHeader from "@/hooks/useDashboardHeader";
import { DashboardNavbarProps } from "@/types/majorTypes";
import { Logout } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Typography } from "antd";
import { MdMenu } from "react-icons/md";

const Header = ({ setIsSidebar, isSidebar }: DashboardNavbarProps) => {
  const { handleLogout, dashboardTitle, isLoading, admin } =
    useDashboardHeader();

  return (
    <Box className="p-3 flex items-center justify-between sticky top-0 border-b bg-white z-10 border-gray-100">
      <Button
        className="flex space-x-2 items-center justify-center bg-white hover:bg-gray-100 shadow-primary shadow-sm cursor-pointer hover:shadow-sm  rounded-full"
        onClick={() => setIsSidebar(!isSidebar)}>
        <MdMenu size={17} className="text-secondary" />
        <span
          className="text-secondary text-[11px] font-bold mt-0.5"
          style={{ fontFamily: "eczar" }}>
          {dashboardTitle}
        </span>
      </Button>
      <Box className="flex sm:items-center justify-end flex-wrap space-x-2">
        <Typography
          className="sm:text-[15px] text-[12px] font-bold"
          style={{ fontFamily: "eczar" }}>
          Hi, {admin?.fullname} 👋{" "}
        </Typography>
        <Button
          size="sm"
          onClick={handleLogout}
          disabled={isLoading}
          variant="secondary"
          className="flex items-center bg-gray-200 hover:bg-gray-300 space-x-1">
          {isLoading ? (
            <ButtonSpinners />
          ) : (
            <>
              <Logout style={{ fontSize: 13, color: "red" }} />
              <Typography
                className="text-[12px]  text-black"
                style={{ fontFamily: "eczar" }}>
                Logout
              </Typography>
            </>
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
