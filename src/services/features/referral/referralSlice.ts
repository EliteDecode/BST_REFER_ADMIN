import { createAsyncThunkWithHandler } from "@/services/api/apiHandler";
import { initialReferralStateProps } from "@/types/referral.user.student.types";
import { createSlice } from "@reduxjs/toolkit";
import referralService from "./referralService";

const referral = localStorage.getItem("BST_Admin_referrals");

const initialState: initialReferralStateProps = {
  referrals: referral ? JSON.parse(referral) : null,
  singleReferral: null,
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};

export const FetchReferralDetails = createAsyncThunkWithHandler(
  "referral/fetchReferralDetails",
  async () => {
    return await referralService.fetch_referral_details();
  }
);

export const FetchSingleReferralDetails = createAsyncThunkWithHandler(
  "referral/FetchSingleReferralDetails",
  async (referralId: string) => {
    return await referralService.fetch_single_referral_details(referralId);
  }
);

const referralSlice = createSlice({
  name: "referral",
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
      .addCase(FetchReferralDetails.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchReferralDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.referrals = action.payload.data;
      })
      .addCase(FetchReferralDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      .addCase(FetchSingleReferralDetails.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchSingleReferralDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleReferral = action.payload.data;
      })
      .addCase(FetchSingleReferralDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      });
  },
});

export const { reset } = referralSlice.actions;
export default referralSlice.reducer;
