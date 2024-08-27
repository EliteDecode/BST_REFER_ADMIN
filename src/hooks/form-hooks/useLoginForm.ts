import { loginSchema } from "@/lib/schemas";
import { LoginAdmin, reset } from "@/services/features/auth/authSlice";
import { AppDispatch } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useLoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state: any) => state.auth
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (isSuccess && message === "Login successfully") {
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
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(LoginAdmin(values));
    },
  });

  return {
    formik,
    handleTogglePasswordVisibility,
    showPassword,
    isLoading,
  };
};

export default useLoginForm;
