import axiosClient from "@/services/api/axiosClient";

const fetch_user_details = async () => {
  const response = await axiosClient.get(`/users`);

  if (response.data.success === true) {
    localStorage.setItem("BST_Admin_users", JSON.stringify(response.data.data));
  }
  return response.data;
};

const fetch_single_user_details = async (userId: string) => {
  const response = await axiosClient.get(`/users/${userId}`);
  return response.data;
};

const toggle_suspend_user = async (userId: string) => {
  const response = await axiosClient.put(`/users/toggle-suspend/${userId}`);
  return response.data;
};
const authService = {
  fetch_user_details,
  fetch_single_user_details,
  toggle_suspend_user,
};

export default authService;
