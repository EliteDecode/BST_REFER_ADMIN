import { confirmCodeSchema } from "@/lib/schemas";
import {} from "@/services/features/admin/adminSlice";
import { reset } from "@/services/features/auth/authSlice";
import { AppDispatch } from "@/store";
import { useFormik } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useConfirmCodeEmailForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state: any) => state.user
  );

  useEffect(() => {
    if (isSuccess && message == "Email successfully verified") {
      toast.success(message);
      dispatch(reset());
      navigate(-1);
    }

    if (isError) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isLoading, isSuccess, isError, message]);

  const formik = useFormik({
    initialValues: {
      pin: "",
    },
    validationSchema: confirmCodeSchema,
    onSubmit: () => {
      // dispatch(VerifyUserEmail({ authCode: parseInt(values.pin) }));
    },
  });

  return { formik, isLoading };
};

export default useConfirmCodeEmailForm;
