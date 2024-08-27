import { resetPasswordSchema } from "@/lib/schemas";
import { reset } from "@/services/features/auth/authSlice";
import { AppDispatch } from "@/store";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const useResetPasswordForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state: any) => state.auth
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { resetToken } = useParams();

  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
      dispatch(reset());
      navigate("/auth/login");
    }

    if (isError) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
      token: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: () => {
      if (resetToken) {
        // dispatch(ResetPassword({ ...values, token: resetToken }));
      }
    },
  });

  return { formik, handleTogglePasswordVisibility, showPassword, isLoading };
};

export default useResetPasswordForm;
