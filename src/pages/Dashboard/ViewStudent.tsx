import UpdateStudentForm from "@/components/dashboard_components/forms/UpdateStudentForm";
import StudentDetails from "@/components/dashboard_components/StudentDetails";
import Loader from "@/helpers/Loader";
import { FetchSingleStudentDetails } from "@/services/features/student/studentSlice";
import { AppDispatch } from "@/store";
import { Box } from "@mui/material";
import { Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewStudent = () => {
  const { studentId } = useParams();

  const { isLoading, singleStudent } = useSelector(
    (state: any) => state.student
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (studentId) dispatch(FetchSingleStudentDetails(studentId));
  }, []);

  return (
    <Box>
      {isLoading && !singleStudent ? (
        <Loader />
      ) : (
        <Box className="grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-2">
          <Box className="sm:w-[80%] w-full rounded-md shadow-md bg-white m-auto border p-5 mt-5 ">
            <Typography
              className="text-[17px] font-bold"
              style={{ fontFamily: "eczar" }}>
              Student Details
            </Typography>
            <StudentDetails />
          </Box>

          <Box className="sm:w-[80%] w-full rounded-md shadow-md bg-white m-auto border p-5 mt-5 ">
            <Typography
              className="text-[17px] font-bold"
              style={{ fontFamily: "eczar" }}>
              Edit Student.
            </Typography>
            <Typography className="text-[12px] font-semibold -mt-1 text-[#acaba9]">
              Please enter student details below to update
            </Typography>
            <Box>
              <UpdateStudentForm />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ViewStudent;
