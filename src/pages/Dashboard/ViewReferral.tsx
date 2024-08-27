import ReferralDetails from "@/components/dashboard_components/ReferralDetails";
import Loader from "@/helpers/Loader";
import { FetchSingleReferralDetails } from "@/services/features/referral/referralSlice";
import { AppDispatch } from "@/store";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewReferral = () => {
  const { referralId } = useParams();

  const { isLoading, singleReferral } = useSelector(
    (state: any) => state.referral
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (referralId) dispatch(FetchSingleReferralDetails(referralId));
  }, []);

  return (
    <Box>
      {isLoading && !singleReferral ? (
        <Loader />
      ) : (
        <Box className=" ">
          <Box className=" w-full  p-5 mt-5 ">
            <ReferralDetails />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ViewReferral;
