import axiosClient from "@/services/api/axiosClient";
import {
  IForgotPassword,
  ILogin,
  IRegister,
  IVerify,
  IResetPassword,
} from "@/types/auth.types";

const login_admin = async (adminData: ILogin) => {
  const response = await axiosClient.post(`/auth/login`, adminData);

  if (response.data.success === true) {
    localStorage.setItem(
      "BST_Admin_access_Token",
      JSON.stringify(response.data.data.accessToken)
    );
    localStorage.setItem(
      "BST_Admin_refresh_Token",
      JSON.stringify(response.data.data.refreshToken)
    );
  }
  return response.data;
};

const register_admin = async (adminData: IRegister) => {
  const response = await axiosClient.post(`/auth/register`, adminData);

  if (response.data.success === true) {
    localStorage.setItem("BST_reg_data", JSON.stringify(response.data.data));
  }
  return response.data;
};

const verify_admin = async (adminData: IVerify) => {
  const response = await axiosClient.post(`/auth/verify/${adminData._id}`, {
    authCode: adminData.authCode,
  });

  if (response.data.success === true) {
    localStorage.setItem("BST_reg_data", JSON.stringify(response.data.data));
  }
  return response.data;
};

const forgot_password = async (adminData: IForgotPassword) => {
  const response = await axiosClient.post(`/auth/forgot-password`, {
    email: adminData.email,
  });

  return response.data;
};

const reset_password = async (adminData: IResetPassword) => {
  const response = await axiosClient.post(`/auth/reset-password`, adminData);

  return response.data;
};
const logout_admin = async () => {
  const refreshToken = localStorage.getItem("BST_Admin_refresh_Token");
  if (!refreshToken) {
    return;
  }

  const response = await axiosClient.post("/auth/logout", {
    refreshToken: JSON.parse(refreshToken),
  });

  if (response.data.success === true) {
    localStorage.removeItem("BST_Admin_access_Token");
    localStorage.removeItem("BST_Admin_refresh_Token");
    localStorage.removeItem("BST_admin_details");
  }

  return response.data;
};

const authService = {
  login_admin,
  logout_admin,
  register_admin,
  verify_admin,
  reset_password,
  forgot_password,
};

export default authService;
