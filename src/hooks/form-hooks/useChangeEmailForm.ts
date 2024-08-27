import { changeEmailSchema } from "@/lib/schemas";
import { reset } from "@/services/features/admin/adminSlice";
import { AppDispatch } from "@/store";
import { useFormik } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useChangeEmailForm = () => {
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state: any) => state.user
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess && message == "Verification code sent to your email") {
      toast.success(message);
      navigate("/dashboard/settings/verify-email");

      dispatch(reset());
    }

    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: changeEmailSchema,
    enableReinitialize: true,
    onSubmit: () => {
      formik.resetForm();
    },
  });

  return { formik, isLoading };
};

export default useChangeEmailForm;
