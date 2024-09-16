import BstUserIdDetails from "@/components/dashboard_components/BstUserIdDetails";
import UpdateBstUserIdForm from "@/components/dashboard_components/forms/UpdateBstUserIdForm";
import Loader from "@/helpers/Loader";
import { FetchSingleUserUniqueId } from "@/services/features/bstUserUniqueIds/bstUserUniqueIdsSlice";
import { AppDispatch } from "@/store";
import { Box } from "@mui/material";
import { Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewUserBstId = () => {
  const { userId } = useParams();

  const { isLoading, singleUser } = useSelector((state: any) => state.bstIds);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userId) dispatch(FetchSingleUserUniqueId(userId));
  }, []);

  return (
    <Box>
      {isLoading && !singleUser ? (
        <Loader />
      ) : (
        <Box className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-2">
          <Box className="sm:w-[80%] w-full rounded-md shadow-md bg-white m-auto border p-5 mt-5 ">
            <Typography
              className="text-[17px] font-bold"
              style={{ fontFamily: "eczar" }}>
              User Details
            </Typography>
            <BstUserIdDetails />
          </Box>

          <Box className="sm:w-[80%] w-full rounded-md shadow-md bg-white m-auto border p-5 mt-5 ">
            <Typography
              className="text-[17px] font-bold"
              style={{ fontFamily: "eczar" }}>
              Edit Student.
            </Typography>
            <Typography className="text-[12px] font-semibold -mt-1 text-[#acaba9]">
              Please enter student details below to update
            </Typography>
            <Box>
              <UpdateBstUserIdForm />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ViewUserBstId;
