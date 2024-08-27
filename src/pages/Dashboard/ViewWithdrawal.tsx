import WithdrawalActions from "@/components/dashboard_components/WithdrawalActions";
import WithdrawalDetails from "@/components/dashboard_components/WithdrawalDetails";
import Loader from "@/helpers/Loader";
import {
  FetchSingleUserWithdrawal,
  reset,
} from "@/services/features/wallet/walletSlice";
import { AppDispatch } from "@/store";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewWithdrawal = () => {
  const { withdrawalId } = useParams();

  const { isLoading, singleWithdrawal } = useSelector(
    (state: any) => state.wallet
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (withdrawalId) dispatch(FetchSingleUserWithdrawal(withdrawalId));

    setTimeout(() => {
      dispatch(reset());
    }, 3000);
  }, []);

  return (
    <Box>
      {isLoading && !singleWithdrawal ? (
        <Loader />
      ) : (
        <Box className="">
          <Box className=" w-full space-y-4 p-5 mt-5 ">
            {singleWithdrawal?.withdrawal?.status === "pending" && (
              <WithdrawalActions />
            )}
            <WithdrawalDetails />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ViewWithdrawal;
