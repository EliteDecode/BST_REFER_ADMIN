import { getDashboardTitle } from "@/lib/functions";
import { LogoutAdmin, reset } from "@/services/features/auth/authSlice";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const useDashboardHeader = () => {
  const location = useLocation();
  const pathanme = location.pathname;
  const dashboardTitle = getDashboardTitle(pathanme);
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.auth
  );
  const { admin } = useSelector((state: any) => state.admin);

  const handleLogout = () => {
    dispatch(LogoutAdmin());
  };

  useEffect(() => {
    if (isSuccess && message == "Logout successfully") {
      toast.success(message);
      dispatch(reset());
    }

    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  return { handleLogout, dashboardTitle, isLoading, admin };
};

export default useDashboardHeader;
