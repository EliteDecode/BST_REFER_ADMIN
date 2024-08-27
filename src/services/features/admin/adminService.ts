import axiosClient from "@/services/api/axiosClient";
// import { IChangePassword, IAdmin } from "@/types/admin.types";

const fetch_admin_details = async () => {
  const response = await axiosClient.get("/auth");

  if (response.data.success === true) {
    localStorage.setItem(
      "BST_admin_details",
      JSON.stringify(response.data.data)
    );
  }
  return response.data;
};

// const update_admin_email = async (data: { email: string }, adminId: string) => {
//   const response = await axiosClient.post(`/admin/update-email/${adminId}`, data);
//   return response.data;
// };

// const verify_admin_email = async (
//   data: { authCode: number },
//   adminId: string
// ) => {
//   const response = await axiosClient.put(`/admin/verify-email/${adminId}`, {
//     authCode: data.authCode,
//   });

//   return response.data;
// };

// const update_admin_details = async (adminData: IAdmin, adminId: string) => {
//   const response = await axiosClient.put(`/admin/${adminId}`, adminData);

//   if (response.data.success === true) {
//     localStorage.setItem(
//       "BST_admin_details",
//       JSON.stringify(response.data.data)
//     );
//   }
//   return response.data;
// };

// const update_admin_password = async (
//   adminData: IChangePassword,
//   adminId: string
// ) => {
//   const response = await axiosClient.put(
//     `/admin/change-password/${adminId}`,
//     adminData
//   );

//   return response.data;
// };

// const delete_admin_account = async (adminId: string) => {
//   const response = await axiosClient.delete(`/admin/delete-account/${adminId}`);

//   if (response.data.success === true) {
//     localStorage.removeItem("BST_Admin_access_Token");
//     localStorage.removeItem("BST_Admin_refresh_Token");
//     localStorage.removeItem("BST_admin_details");
//   }
//   return response.data;
// };

const authService = {
  fetch_admin_details,
  // update_admin_details,
  // update_admin_password,
  // delete_admin_account,
  // update_admin_email,
  // verify_admin_email,
};

export default authService;
