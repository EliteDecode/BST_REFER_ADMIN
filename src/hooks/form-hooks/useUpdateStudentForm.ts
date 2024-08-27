import { addStudentSchema } from "@/lib/schemas";
import { reset } from "@/services/features/referral/referralSlice";
import { UpdateStudent } from "@/services/features/student/studentSlice";
import { AppDispatch } from "@/store";
import { useFormik } from "formik";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useUpdateStudentForm = () => {
  const { isLoading, isSuccess, isError, message, singleStudent } = useSelector(
    (state: any) => state.student
  );

  const { studentId } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const formik = useFormik({
    initialValues: {
      fullname: singleStudent?.fullname || "",
      email: singleStudent?.email || "",
      phone: singleStudent?.phone || "",
      address: singleStudent?.address || "",
      course: singleStudent?.course || "",
    },
    validationSchema: addStudentSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(UpdateStudent({ ...values, _id: studentId }));
    },
  });

  useEffect(() => {
    if (isSuccess && message == "Student updated successfully") {
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

export default useUpdateStudentForm;
