import axiosClient from "@/services/api/axiosClient";
import { IBstUserUniqueIds } from "@/types/referral.user.student.types";

const add_bst_user_unique_ids = async (userData: IBstUserUniqueIds) => {
  const response = await axiosClient.post(`/bstUserIds`, userData);
  return response.data;
};

const fetch_bst_user_unique_ids = async () => {
  const response = await axiosClient.get(`/bstUserIds`);

  if (response.data.success === true) {
    localStorage.setItem(
      "BST_Admin_Unique_Ids",
      JSON.stringify(response.data.data)
    );
  }
  return response.data;
};

const fetch_single_user_unique_id = async (userId: string) => {
  const response = await axiosClient.get(`/bstUserIds/${userId}`);
  return response.data;
};

const update_user_unique_id = async (user: IBstUserUniqueIds) => {
  const { _id, ...userData } = user;
  const response = await axiosClient.put(`/bstUserIds/${user?._id}`, userData);

  return response.data;
};

const delete_user_unique_id = async (userId: string) => {
  const response = await axiosClient.delete(`/bstUserIds/${userId}`);
  return response.data;
};
const authService = {
  delete_user_unique_id,
  fetch_single_user_unique_id,
  update_user_unique_id,
  add_bst_user_unique_ids,
  fetch_bst_user_unique_ids,
};

export default authService;
