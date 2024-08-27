import { addStudentSchema } from "@/lib/schemas";
import { useFormik } from "formik";
import { AppDispatch } from "@/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";

import { AddStudent, reset } from "@/services/features/student/studentSlice";

const useAddStudentForm = () => {
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state: any) => state.student
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      address: "",
      course: "",
    },
    validationSchema: addStudentSchema,
    onSubmit: (values) => {
      dispatch(AddStudent(values));
    },
  });

  useEffect(() => {
    if (isSuccess && message == "Student added successfully") {
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

export default useAddStudentForm;
