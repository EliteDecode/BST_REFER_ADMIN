import { DeleteStudent, reset } from "@/services/features/student/studentSlice";

import { AppDispatch } from "@/store";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const useDeleteStudent = () => {
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state: any) => state.student
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { studentId } = useParams();

  const handleDeleteStudent = () => {
    studentId && dispatch(DeleteStudent(studentId));
  };

  useEffect(() => {
    if (isSuccess && message == "Student deleted successfully") {
      navigate(-1);
      toast.success(message);
      dispatch(reset());
    }

    if (isError && message) {
      toast.error(message);
      dispatch(reset());
    }
  }, [isLoading, isError, isSuccess, message]);

  return { isLoading, handleDeleteStudent };
};

export default useDeleteStudent;
