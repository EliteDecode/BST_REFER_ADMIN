import { registrationSchema } from "@/lib/schemas";
import { reset } from "@/services/features/auth/authSlice";
import { AppDispatch } from "@/store";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useRegisterForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state: any) => state.auth
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      toast.success(message);
      dispatch(reset());
      navigate("/auth/confirm");
    }

    if (isError) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registrationSchema,
    onSubmit: () => {
      // dispatch(RegisterUser(values));
    },
  });

  return { formik, handleTogglePasswordVisibility, showPassword, isLoading };
};

export default useRegisterForm;
