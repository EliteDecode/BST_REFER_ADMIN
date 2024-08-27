import axiosClient from "@/services/api/axiosClient";

const fetch_users_wallet = async () => {
  const response = await axiosClient.get(`/wallet`);

  if (response.data.success === true) {
    localStorage.setItem(
      "BST_Admin_wallet",
      JSON.stringify(response.data.data)
    );
  }
  return response.data;
};

const fetch_users_withdrawals = async () => {
  const response = await axiosClient.get(`/withdrawal`);

  if (response.data.success === true) {
    localStorage.setItem(
      "BST_Admin_withdrawals",
      JSON.stringify(response.data.data)
    );
  }
  return response.data;
};

const fetch_single_user_withdrawal = async (withdrawalId: string) => {
  const response = await axiosClient.get(`/withdrawal/${withdrawalId}`);
  return response.data;
};

const approve_single_user_withdrawal = async (withdrawalId: string) => {
  const response = await axiosClient.put(
    `/withdrawal/approve-withdrawal/${withdrawalId}`
  );
  return response.data;
};

const decline_single_user_withdrawal = async (withdrawalId: string) => {
  const response = await axiosClient.put(
    `/withdrawal/decline-withdrawal/${withdrawalId}`
  );
  return response.data;
};

const authService = {
  fetch_users_wallet,
  fetch_users_withdrawals,
  fetch_single_user_withdrawal,
  approve_single_user_withdrawal,
  decline_single_user_withdrawal,
};

export default authService;
