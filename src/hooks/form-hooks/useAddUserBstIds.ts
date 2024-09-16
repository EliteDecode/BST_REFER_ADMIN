import { addUserBstIds } from "@/lib/schemas";
import { AppDispatch } from "@/store";
import { useFormik } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  AddUserUniqueId,
  reset,
} from "@/services/features/bstUserUniqueIds/bstUserUniqueIdsSlice";

const UseAddUserBstIds = () => {
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state: any) => state.bstIds
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      bstId: "",
    },
    validationSchema: addUserBstIds,
    onSubmit: (values) => {
      dispatch(AddUserUniqueId(values));
    },
  });

  useEffect(() => {
    if (isSuccess && message == "User added successfully") {
      toast.success(message);
      dispatch(reset());
      navigate(-1);
      formik.resetForm();
    }

    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  return { formik, isLoading };
};

export default UseAddUserBstIds;
