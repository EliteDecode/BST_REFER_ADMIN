import { createAsyncThunkWithHandler } from "@/services/api/apiHandler";
import userService from "./userService";
import { createSlice } from "@reduxjs/toolkit";
import { initialUserStateProps } from "@/types/referral.user.student.types";

const user = localStorage.getItem("BST_Admin_users");

const initialState: initialUserStateProps = {
  users: user ? JSON.parse(user) : null,
  singleUser: null,
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};

export const FetchUserDetails = createAsyncThunkWithHandler(
  "user/fetchUserDetails",
  async () => {
    return await userService.fetch_user_details();
  }
);

export const FetchSingleUserDetails = createAsyncThunkWithHandler(
  "user/FetchSingleUserDetails",
  async (userId: string) => {
    return await userService.fetch_single_user_details(userId);
  }
);

export const ToggleSuspendUser = createAsyncThunkWithHandler(
  "user/ToggleSuspendUser",
  async (userId: string) => {
    return await userService.toggle_suspend_user(userId);
  }
);

const userSlice = createSlice({
  name: "user",
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
      .addCase(FetchUserDetails.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.users = action.payload.data;
      })
      .addCase(FetchUserDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      .addCase(FetchSingleUserDetails.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchSingleUserDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleUser = action.payload.data;
      })
      .addCase(FetchSingleUserDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      .addCase(ToggleSuspendUser.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(ToggleSuspendUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(ToggleSuspendUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
