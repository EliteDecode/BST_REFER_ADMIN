import AddStudentForm from "@/components/dashboard_components/forms/AddStuddentForm";
import { Box } from "@mui/material";
import { Typography } from "antd";

const AddStudent = () => {
  return (
    <Box className="sm:w-[40%] w-[100%] rounded-md shadow-md bg-white m-auto border p-5 mt-5 ">
      <Typography
        className="text-[17px] font-bold"
        style={{ fontFamily: "eczar" }}>
        Add New Referral.
      </Typography>
      <Typography className="text-[12px] font-semibold -mt-1 text-[#acaba9]">
        Please enter student details below
      </Typography>
      <Box>
        <AddStudentForm />
      </Box>
    </Box>
  );
};

export default AddStudent;
