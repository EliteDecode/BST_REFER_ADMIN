import { createAsyncThunkWithHandler } from "@/services/api/apiHandler";
import { initialAdminStateProps } from "@/types/admin.types";
import { createSlice } from "@reduxjs/toolkit";
import adminService from "./adminService";

const admin = localStorage.getItem("BST_admin_details");

const initialState: initialAdminStateProps = {
  admin: admin ? JSON.parse(admin) : null,
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};

export const FetchAdminDetails = createAsyncThunkWithHandler(
  "admin/fetchAdminDetails",
  async () => {
    return await adminService.fetch_admin_details();
  }
);

// export const UpdateAdminDetails = createAsyncThunkWithHandler(
//   "admin/updateAdminDetails",
//   async (data: IAdmin, thunkAPi) => {
//     const adminId = thunkAPi.getState().admin.admin._id;
//     return await adminService.update_admin_details(data, adminId);
//   }
// );

// export const deleteAdminAccount = createAsyncThunkWithHandler(
//   "admin/deleteAdminAccount",
//   async (adminId: string, _) => {
//     return await adminService.delete_admin_account(adminId);
//   }
// );

// export const updateAdminPassword = createAsyncThunkWithHandler(
//   "admin/updateAdminPassword",
//   async (data: IChangePassword, thunkAPi) => {
//     const adminId = thunkAPi.getState().admin.admin._id;
//     return await adminService.update_admin_password(data, adminId);
//   }
// );

// export const UpdateAdminEmail = createAsyncThunkWithHandler(
//   "admin/UpdateAdminEmail",
//   async (data: { email: string }, thunkAPi) => {
//     const adminId = thunkAPi.getState().admin.admin._id;
//     return await adminService.update_admin_email(data, adminId);
//   }
// );

// export const VerifyAdminEmail = createAsyncThunkWithHandler(
//   "admin/VerifyAdminEmail",
//   async (data: { authCode: number }, thunkAPi) => {
//     const adminId = thunkAPi.getState().admin.admin._id;
//     return await adminService.verify_admin_email(data, adminId);
//   }
// );

const adminSlice = createSlice({
  name: "admin",
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
      .addCase(FetchAdminDetails.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchAdminDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.admin = action.payload.data;
      })
      .addCase(FetchAdminDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      });
    // .addCase(UpdateAdminDetails.pending, (state, _) => {
    //   state.isLoading = true;
    // })
    // .addCase(UpdateAdminDetails.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = false;
    //   state.isSuccess = true;
    //   state.message = action.payload.message;
    //   state.admin = action.payload.data;
    // })
    // .addCase(UpdateAdminDetails.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload as string;
    //   state.isSuccess = false;
    // })
    // .addCase(deleteAdminAccount.pending, (state, _) => {
    //   state.isLoading = true;
    // })
    // .addCase(deleteAdminAccount.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = false;
    //   state.isSuccess = true;
    //   state.message = action.payload.message;
    //   state.admin = null;
    // })
    // .addCase(deleteAdminAccount.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload as string;
    //   state.isSuccess = false;
    // })
    // .addCase(updateAdminPassword.pending, (state, _) => {
    //   state.isLoading = true;
    // })
    // .addCase(updateAdminPassword.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = false;
    //   state.isSuccess = true;
    //   state.message = action.payload.message;
    // })
    // .addCase(updateAdminPassword.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload as string;
    //   state.isSuccess = false;
    // })
    // .addCase(UpdateAdminEmail.pending, (state, _) => {
    //   state.isLoading = true;
    // })
    // .addCase(UpdateAdminEmail.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = false;
    //   state.isSuccess = true;
    //   state.message = action.payload.message;
    // })
    // .addCase(UpdateAdminEmail.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload as string;
    //   state.isSuccess = false;
    // })
    // .addCase(VerifyAdminEmail.pending, (state, _) => {
    //   state.isLoading = true;
    // })
    // .addCase(VerifyAdminEmail.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = false;
    //   state.isSuccess = true;
    //   state.message = action.payload.message;
    //   state.admin = action.payload.data;
    // })
    // .addCase(VerifyAdminEmail.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.isError = true;
    //   state.message = action.payload as string;
    //   state.isSuccess = false;
    // });
  },
});

export const { reset } = adminSlice.actions;
export default adminSlice.reducer;
