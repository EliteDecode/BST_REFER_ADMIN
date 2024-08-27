import { forgotPasswordSchema } from "@/lib/schemas";
import { reset } from "@/services/features/auth/authSlice";
import { AppDispatch } from "@/store";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const useForgotPasswordForm = () => {
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state: any) => state.auth
  );

  const [isSentMail, setIsSentMail] = useState<boolean>();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
      setIsSentMail(true);
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
    validationSchema: forgotPasswordSchema,
    onSubmit: () => {},
  });

  return {
    formik,
    isLoading,
    isSentMail,
  };
};

export default useForgotPasswordForm;
