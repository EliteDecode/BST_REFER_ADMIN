import UpdateProfileForm from "@/components/dashboard_components/forms/UpdateProfileForm";
import { Box } from "@mui/material";
import { Typography } from "antd";

const UpdateProfile = () => {
  return (
    <Box className="sm:w-[40%] w-[90%] rounded-md shadow-md bg-white m-auto border p-5 mt-5 ">
      <Typography
        className="text-[17px] font-bold"
        style={{ fontFamily: "eczar" }}>
        Update Your Profile.
      </Typography>
      <Typography className="text-[12px] font-semibold -mt-1 text-[#acaba9]">
        Please enter your details below
      </Typography>
      <Box>
        <UpdateProfileForm />
      </Box>
    </Box>
  );
};

export default UpdateProfile;
