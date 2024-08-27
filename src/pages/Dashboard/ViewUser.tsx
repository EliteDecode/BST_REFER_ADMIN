import UserDetails from "@/components/dashboard_components/UserDetails";
import Loader from "@/helpers/Loader";
import { FetchSingleUserDetails } from "@/services/features/user/userSlice";
import { AppDispatch } from "@/store";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewUser = () => {
  const { userId } = useParams();

  const { isLoading, singleUser } = useSelector((state: any) => state.referral);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userId) dispatch(FetchSingleUserDetails(userId));
  }, []);

  return (
    <Box>
      {isLoading && !singleUser ? (
        <Loader />
      ) : (
        <Box className=" ">
          <Box className=" w-full  p-5 mt-5 ">
            <UserDetails />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ViewUser;
