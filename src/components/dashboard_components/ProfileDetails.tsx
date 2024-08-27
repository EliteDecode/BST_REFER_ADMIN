import { Box } from "@mui/material";
import { Typography } from "antd";
import { MdOutlineVerified } from "react-icons/md";
import { useSelector } from "react-redux";

const ProfileDetails = () => {
  const { admin } = useSelector((state: any) => state.admin);

  return (
    <Box>
      <Box>
        <Typography className="text-center text-[20px] font-semibold mt-4">
          {admin?.fullname}
        </Typography>
        <Typography className="text-center text-[13px]  text-gray-500">
          @{admin?.email}
        </Typography>
        <Box className="text-center text-[13px]  flex items-center justify-center space-x-2 text-gray-500">
          <span>Status</span> :{" "}
          {admin?.isSuspended ? (
            <Box className="flex items-center justify-center space-x-1">
              <span>InActive</span> <MdOutlineVerified color="red" />
            </Box>
          ) : (
            <Box className="flex items-center justify-center space-x-1">
              <span> Active</span> <MdOutlineVerified color="green" />
            </Box>
          )}
        </Box>
        <Typography className="text-center text-[13px]  text-gray-500">
          {admin?.phone}, {admin?.address}
        </Typography>
      </Box>

      {/* <Box className="flex items-center mt-10 justify-center">
        <Link to="/dashboard/profile/update-profile">
          <Button size="sm">Update Profile</Button>
        </Link>
      </Box> */}
    </Box>
  );
};

export default ProfileDetails;
