import { WithdrawalForm } from "@/components/dashboard_components/forms/WithdrawalForm";
import WithdrawalTable from "@/components/dashboard_components/tables/WithdrawalTable";
import WalletCardDisplay from "@/components/dashboard_components/WalletCardDisplay";
import Loader from "@/helpers/Loader";
import {
  FetchUsersrWallet,
  FetchUsersWithdrawals,
} from "@/services/features/wallet/walletSlice";
import { AppDispatch } from "@/store";
import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Withdrawals = () => {
  const { isLoading, Withdrawals } = useSelector((state: any) => state.wallet);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchUsersWithdrawals());
    dispatch(FetchUsersrWallet());
  }, []);
  return (
    <Box>
      {isLoading && !Withdrawals ? (
        <Loader />
      ) : (
        <>
          <Box className="mb-5">
            <WithdrawalForm />
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} md={3}>
              <WalletCardDisplay />
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
              <Box className=" border-gray-200  w-full  shadow-md border px-5 rounded-lg sm:overflow-x-auto overflow-x-scroll">
                <WithdrawalTable />
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default Withdrawals;
