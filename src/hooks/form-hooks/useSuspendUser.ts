import { reset, ToggleSuspendUser } from "@/services/features/user/userSlice";
import { AppDispatch } from "@/store";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const useSuspendUser = () => {
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state: any) => state.user
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleToggleSuspend = () => {
    userId && dispatch(ToggleSuspendUser(userId));
  };

  useEffect(() => {
    if (
      isSuccess &&
      (message == "User account suspended successfully" ||
        message == "User account activated successfully")
    ) {
      toast.success(message);
      dispatch(reset());
      navigate(0);
    }

    if (isError) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  return { isLoading, handleToggleSuspend };
};

export default useSuspendUser;
