import ProfileDetails from "@/components/dashboard_components/ProfileDetails";
import { Box } from "@mui/material";

const Profile = () => {
  return (
    <div>
      <Box className="h-[40vh] bg-gradient-to-br from-blue-800 via-sky-200 to-black rounded-lg border">
        <Box className="sm:w-[70%] w-[90%] m-auto mt-32 rounded-md shadow-md bg-white border py-4">
          <ProfileDetails />
        </Box>
      </Box>
    </div>
  );
};

export default Profile;
