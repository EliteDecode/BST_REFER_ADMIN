import adminSlice from "@/services/features/admin/adminSlice";
import authSlice from "@/services/features/auth/authSlice";
import referralSlice from "@/services/features/referral/referralSlice";
import studentSlice from "@/services/features/student/studentSlice";
import userSlice from "@/services/features/user/userSlice";
import walletSlice from "@/services/features/wallet/walletSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    admin: adminSlice,
    referral: referralSlice,
    wallet: walletSlice,
    user: userSlice,
    student: studentSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
