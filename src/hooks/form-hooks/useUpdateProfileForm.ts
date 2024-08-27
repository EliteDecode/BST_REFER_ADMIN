import { updateProfileSchema } from "@/lib/schemas";
import { reset } from "@/services/features/admin/adminSlice";
import { AppDispatch } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";

const useUpdateProfileForm = () => {
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state: any) => state.user
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullname: user?.fullname || "",
      phone: user?.phone || "",
      address: user?.address || "",
    },
    validationSchema: updateProfileSchema,
    enableReinitialize: true,
    onSubmit: () => {},
  });

  useEffect(() => {
    if (isSuccess) {
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

export default useUpdateProfileForm;
