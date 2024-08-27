import { lazy } from "react";

//Authentication Routes
export const Login = lazy(() => import("../pages/Auth/Login"));
export const Register = lazy(() => import("../pages/Auth/Register"));
export const ForgotPassword = lazy(
  () => import("../pages/Auth/ForgotPassword")
);
export const ResetPassword = lazy(() => import("../pages/Auth/ResetPassword"));

//Dashboard Routes
export const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
export const Settings = lazy(() => import("../pages/Dashboard/Settings"));

//referrals
export const Referrals = lazy(() => import("../pages/Dashboard/Referrals"));
export const ViewReferral = lazy(
  () => import("../pages/Dashboard/ViewReferral")
);

//withdrawals
export const Withdrawals = lazy(() => import("../pages/Dashboard/Withdrawals"));
export const ViewWithdrawal = lazy(
  () => import("../pages/Dashboard/ViewWithdrawal")
);

//users
export const Users = lazy(() => import("../pages/Dashboard/Users"));
export const ViewUser = lazy(() => import("../pages/Dashboard/ViewUser"));

//students
export const Students = lazy(() => import("../pages/Dashboard/Students"));
export const AddStudent = lazy(() => import("../pages/Dashboard/AddStudent"));
export const ViewStudent = lazy(() => import("../pages/Dashboard/ViewStudent"));

export const Wallet = lazy(() => import("../pages/Dashboard/Wallet"));

//Profile Routes
export const Profile = lazy(() => import("../pages/Dashboard/Profile"));
export const UpdateProfile = lazy(
  () => import("../pages/Dashboard/UpdateProfile")
);
export const VerifyEmail = lazy(() => import("../pages/Dashboard/VerifyEmail"));
