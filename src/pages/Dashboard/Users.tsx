import AllUsersTables from "@/components/dashboard_components/tables/AllUserssTables";
import Loader from "@/helpers/Loader";
import { FetchUserDetails } from "@/services/features/user/userSlice";
import { AppDispatch } from "@/store";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {
  const { isLoading } = useSelector((state: any) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchUserDetails());
  }, []);

  return (
    <div>
      <Box>
        {isLoading ? (
          <Loader />
        ) : (
          <Box className="mt-5 border-gray-200 shadow-md border p-5 rounded-lg sm:overflow-x-auto overflow-x-scroll">
            <AllUsersTables />
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Users;
