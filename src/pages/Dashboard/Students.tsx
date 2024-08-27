import AllStudentTables from "@/components/dashboard_components/tables/AllStudentsTables";
import { Button } from "@/components/ui/button";
import Loader from "@/helpers/Loader";
import { FetchStudentDetails } from "@/services/features/student/studentSlice";

import { AppDispatch } from "@/store";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { RiUserAddFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Students = () => {
  const { isLoading, students } = useSelector((state: any) => state.student);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(FetchStudentDetails());
  }, []);

  return (
    <div>
      <Box>
        <Box>
          <Link to="/dashboard/students/add-student">
            <Button variant="icon">
              <RiUserAddFill size={15} className="text-secondary font-bold" />
              <span
                className="text-black font-bold text-xs uppercase text-secondary"
                style={{ fontFamily: "eczar" }}>
                Add Students
              </span>
            </Button>
          </Link>
        </Box>
        {isLoading ? (
          <Loader />
        ) : (
          <Box className="mt-5 border-gray-200 shadow-md border p-5 rounded-lg sm:overflow-x-auto overflow-x-scroll">
            <AllStudentTables data={students} />
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Students;
