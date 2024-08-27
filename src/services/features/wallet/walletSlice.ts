import { createAsyncThunkWithHandler } from "@/services/api/apiHandler";
import { createSlice } from "@reduxjs/toolkit";
import walletService from "./walletService";
import { initialWalletStateProps } from "@/types/wallet.types";

const wallets = localStorage.getItem("BST_user_wallet");
const withdrawals = localStorage.getItem("BST_Admin_withdrawals");

const initialState: initialWalletStateProps = {
  wallets: wallets ? JSON.parse(wallets) : null,
  withdrawals: withdrawals ? JSON.parse(withdrawals) : null,
  singleWithdrawal: null,
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};

export const FetchUsersrWallet = createAsyncThunkWithHandler(
  "wallet/FetchUsersrWallet",
  async () => {
    return await walletService.fetch_users_wallet();
  }
);

export const FetchUsersWithdrawals = createAsyncThunkWithHandler(
  "wallet/FetchUsersWithdrawals",
  async () => {
    return await walletService.fetch_users_withdrawals();
  }
);

export const FetchSingleUserWithdrawal = createAsyncThunkWithHandler(
  "wallet/FetchSingleUserWithdrawal",
  async (withdrawalId: string) => {
    return await walletService.fetch_single_user_withdrawal(withdrawalId);
  }
);

export const ApproveSingleUserWithdrawal = createAsyncThunkWithHandler(
  "wallet/ApproveSingleUserWithdrawal",
  async (withdrawalId: string) => {
    return await walletService.approve_single_user_withdrawal(withdrawalId);
  }
);

export const DeclineSingleUserWithdrawal = createAsyncThunkWithHandler(
  "wallet/DeclineSingleUserWithdrawal",
  async (withdrawalId: string) => {
    return await walletService.decline_single_user_withdrawal(withdrawalId);
  }
);

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchUsersrWallet.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchUsersrWallet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.wallets = action.payload.data;
      })
      .addCase(FetchUsersrWallet.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(FetchUsersWithdrawals.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchUsersWithdrawals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.withdrawals = action.payload.data;
      })
      .addCase(FetchUsersWithdrawals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(FetchSingleUserWithdrawal.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchSingleUserWithdrawal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;

        state.singleWithdrawal = action.payload.data;
      })
      .addCase(FetchSingleUserWithdrawal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(ApproveSingleUserWithdrawal.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(ApproveSingleUserWithdrawal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.singleWithdrawal = action.payload.data;
      })
      .addCase(ApproveSingleUserWithdrawal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })
      .addCase(DeclineSingleUserWithdrawal.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(DeclineSingleUserWithdrawal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.singleWithdrawal = action.payload.data;
      })
      .addCase(DeclineSingleUserWithdrawal.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      });
  },
});

export const { reset } = walletSlice.actions;
export default walletSlice.reducer;
