import { createAsyncThunkWithHandler } from "@/services/api/apiHandler";
import authService from "./authService";
import { createSlice } from "@reduxjs/toolkit";
import { ILogin, initialAuthStateProps } from "@/types/auth.types";

const token = localStorage.getItem("BST_Admin_access_Token");

const initialState: initialAuthStateProps = {
  token: token ? JSON.parse(token) : null,
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};

export const LoginAdmin = createAsyncThunkWithHandler(
  "auth/login",
  async (admin: ILogin, _) => {
    return await authService.login_admin(admin);
  }
);

// export const RegisterAdmin = createAsyncThunkWithHandler(
//   "auth/register",
//   async (admin: IRegister, _) => {
//     return await authService.register_admin(admin);
//   }
// );

// export const VerifyAdmin = createAsyncThunkWithHandler(
//   "auth/verify",
//   async (admin: IVerify, _) => {
//     return await authService.verify_admin(admin);
//   }
// );

// export const ForgotPassword = createAsyncThunkWithHandler(
//   "auth/forgot-password",
//   async (admin: IForgotPassword, _) => {
//     return await authService.forgot_password(admin);
//   }
// );

// export const ResetPassword = createAsyncThunkWithHandler(
//   "auth/reset-password",
//   async (admin: IResetPassword, _) => {
//     return await authService.reset_password(admin);
//   }
// );

export const LogoutAdmin = createAsyncThunkWithHandler(
  "auth/logout",
  async () => {
    return await authService.logout_admin();
  }
);

const authSlice = createSlice({
  name: "auth",
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
      .addCase(LoginAdmin.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(LoginAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Login Successfully";
        state.token = action.payload.data.accessToken;
      })
      .addCase(LoginAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      .addCase(LogoutAdmin.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(LogoutAdmin.fulfilled, (state, _) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = "Logout successfully";
        state.token = null;
      })
      .addCase(LogoutAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
