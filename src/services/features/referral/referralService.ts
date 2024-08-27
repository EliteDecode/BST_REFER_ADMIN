import axiosClient from "@/services/api/axiosClient";

const fetch_referral_details = async () => {
  const response = await axiosClient.get(`/referrals`);

  if (response.data.success === true) {
    localStorage.setItem(
      "BST_Admin_referrals",
      JSON.stringify(response.data.data)
    );
  }
  return response.data;
};

const fetch_single_referral_details = async (referralId: string) => {
  const response = await axiosClient.get(`/referrals/${referralId}`);
  return response.data;
};
const authService = {
  fetch_referral_details,
  fetch_single_referral_details,
};

export default authService;
