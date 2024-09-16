import AllBstUsersIdsTables from "@/components/dashboard_components/tables/AllBstUsersIdsTables";
import { Button } from "@/components/ui/button";
import Loader from "@/helpers/Loader";
import { FetchUsersUniqueIds } from "@/services/features/bstUserUniqueIds/bstUserUniqueIdsSlice";

import { AppDispatch } from "@/store";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { RiUserAddFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

const UserBstIds = () => {
  const { isLoading, users } = useSelector((state: any) => state.bstIds);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchUsersUniqueIds());
  }, []);

  return (
    <div>
      <Box>
        <Box>
          <Link to="/dashboard/bstIds/addbstId">
            <Button variant="icon">
              <RiUserAddFill size={15} className="text-secondary font-bold" />
              <span
                className="text-black font-bold text-xs uppercase text-secondary"
                style={{ fontFamily: "eczar" }}>
                Add User Unique Ids
              </span>
            </Button>
          </Link>
        </Box>
        {isLoading ? (
          <Loader />
        ) : (
          <Box className="mt-5 border-gray-200 shadow-md border p-5 rounded-lg sm:overflow-x-auto overflow-x-scroll">
            <AllBstUsersIdsTables data={users} />
          </Box>
        )}
      </Box>
    </div>
  );
};

export default UserBstIds;
