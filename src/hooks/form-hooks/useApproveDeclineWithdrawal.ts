import {
  ApproveSingleUserWithdrawal,
  DeclineSingleUserWithdrawal,
  reset,
} from "@/services/features/wallet/walletSlice";

import { AppDispatch } from "@/store";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useApproveDeclineWithdrawa = () => {
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.wallet
  );

  const dispatch = useDispatch<AppDispatch>();

  const { withdrawalId } = useParams();

  const handleDeclineWithdrawal = () => {
    withdrawalId && dispatch(DeclineSingleUserWithdrawal(withdrawalId));
  };

  const handleApproveWithdrawal = () => {
    withdrawalId && dispatch(ApproveSingleUserWithdrawal(withdrawalId));
  };

  useEffect(() => {
    if (isSuccess && message == "Withdrawal approved successfully") {
      toast.success(message);
      dispatch(reset());
      //   navigate(0);
    }

    if (isSuccess && message == "Withdrawal declined successfully") {
      toast.success(message);
      dispatch(reset());
    }

    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isLoading, isError, isSuccess, message]);

  return { isLoading, handleDeclineWithdrawal, handleApproveWithdrawal };
};

export default useApproveDeclineWithdrawa;
