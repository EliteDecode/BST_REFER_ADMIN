import InfoCardDisplay from "@/components/dashboard_components/InfoCardDisplay";
import Loader from "@/helpers/Loader";
import { FetchAdminDetails, reset } from "@/services/features/admin/adminSlice";
import { FetchReferralDetails } from "@/services/features/referral/referralSlice";
import { FetchStudentDetails } from "@/services/features/student/studentSlice";
import { FetchUserDetails } from "@/services/features/user/userSlice";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () => {
  const { isLoading, isError, isSuccess } = useSelector(
    (state: any) => state.admin
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchAdminDetails());
    dispatch(FetchReferralDetails());
    dispatch(FetchUserDetails());
    dispatch(FetchStudentDetails());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch(reset());
    }, 5000);
  }, [isError, isSuccess]);

  return <div>{isLoading ? <Loader /> : <InfoCardDisplay />}</div>;
};

export default Dashboard;
