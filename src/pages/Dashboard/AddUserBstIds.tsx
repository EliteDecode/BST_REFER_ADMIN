import AddUserBstIdForm from "@/components/dashboard_components/forms/AddUserBstIdForm";
import { Box } from "@mui/material";
import { Typography } from "antd";

const AddUserBstIds = () => {
  return (
    <Box className="sm:w-[40%] w-[100%] rounded-md shadow-md bg-white m-auto border p-5 mt-5 ">
      <Typography
        className="text-[17px] font-bold"
        style={{ fontFamily: "eczar" }}>
        Add New User BST Unique ID.
      </Typography>
      <Typography className="text-[12px] font-semibold -mt-1 text-[#acaba9]">
        Please enter user details below
      </Typography>
      <Box>
        <AddUserBstIdForm />
      </Box>
    </Box>
  );
};

export default AddUserBstIds;
