import AllReferralsTables from "@/components/dashboard_components/tables/AllReferralsTables";
import { Button } from "@/components/ui/button";
import Loader from "@/helpers/Loader";
import { FetchReferralDetails } from "@/services/features/referral/referralSlice";
import { AppDispatch } from "@/store";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { RiUserAddFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Referrals = () => {
  const { isLoading, referrals } = useSelector((state: any) => state.referral);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchReferralDetails());
  }, []);

  return (
    <div>
      <Box>
        <Box>
          <Link to="/dashboard/add-referral">
            <Button variant="icon">
              <RiUserAddFill size={15} className="text-secondary font-bold" />
              <span
                className="text-black font-bold text-xs uppercase text-secondary"
                style={{ fontFamily: "eczar" }}>
                Add Referral
              </span>
            </Button>
          </Link>
        </Box>
        {isLoading ? (
          <Loader />
        ) : (
          <Box className="mt-5 border-gray-200 shadow-md border p-5 rounded-lg sm:overflow-x-auto overflow-x-scroll">
            <AllReferralsTables data={referrals} />
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Referrals;
