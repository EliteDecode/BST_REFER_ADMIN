import {
  DeleteUserUniqueId,
  reset,
} from "@/services/features/bstUserUniqueIds/bstUserUniqueIdsSlice";

import { AppDispatch } from "@/store";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const useDeleteBstUserId = () => {
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.bstIds
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleDeleteBstUserId = () => {
    userId && dispatch(DeleteUserUniqueId(userId));
  };

  useEffect(() => {
    if (isSuccess && message == "User deleted successfully") {
      navigate(-1);
      toast.success(message);
      dispatch(reset());
    }

    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isLoading, isError, isSuccess, message]);

  return { isLoading, handleDeleteBstUserId };
};

export default useDeleteBstUserId;
