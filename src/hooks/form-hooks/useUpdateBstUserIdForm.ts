import { addUserBstIds } from "@/lib/schemas";
import {
  reset,
  UpdateUserUniqueId,
} from "@/services/features/bstUserUniqueIds/bstUserUniqueIdsSlice";

import { AppDispatch } from "@/store";
import { useFormik } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useUpdateBstUserIdForm = () => {
  const { isLoading, isSuccess, isError, message, singleUser } = useSelector(
    (state: any) => state.bstIds
  );

  const { userId } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      fullname: singleUser?.fullname || "",
      email: singleUser?.email || "",
      phone: singleUser?.phone || "",
      bstId: singleUser?.bstId || "",
    },
    validationSchema: addUserBstIds,
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(UpdateUserUniqueId({ ...values, _id: userId }));
    },
  });

  useEffect(() => {
    if (isSuccess && message == "User updated successfully") {
      toast.success(message);
      dispatch(reset());
      formik.resetForm();
    }

    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  return { formik, isLoading };
};

export default useUpdateBstUserIdForm;
