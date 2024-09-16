import ButtonSpinners from "@/helpers/ButtonSpinners";
import UseAddUserBstIds from "@/hooks/form-hooks/useAddUserBstIds";
import { addBstUsersIdInputs } from "@/utils/dashboardContents";
import { Box } from "@mui/material";
import { Typography } from "antd";
import { useState } from "react"; // Import useState to manage bstId
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

const AddUserBstIdForm = () => {
  const { formik, isLoading } = UseAddUserBstIds();
  const [bstId, setBstId] = useState("");

  const generateBstId = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newBstId = `BST-${randomNum}`;
    setBstId(newBstId);
    formik.setFieldValue("bstId", newBstId);
  };

  return (
    <Box className="py-2">
      <form onSubmit={formik.handleSubmit}>
        {addBstUsersIdInputs?.map((item, index) => (
          <Box key={index}>
            <Label className="text-[11px] text-[#0009]" htmlFor={item.name}>
              {item?.label}
            </Label>
            <Input
              className={`text-[12px] ${
                formik.touched[item.name as keyof typeof formik.touched] &&
                formik.errors[item.name as keyof typeof formik.errors] &&
                "border-red-500 border"
              }`}
              id={item?.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type={item.type}
              placeholder={item?.placeholder}
              readOnly={item.name === "bstId"} // Make bstId field read-only
              value={
                item.name === "bstId"
                  ? bstId
                  : formik.values[item.name as keyof typeof formik.values]
              } // Handle bstId value
            />
            <Box className="relative">
              {formik.touched[item.name as keyof typeof formik.touched] &&
                formik.errors[item.name as keyof typeof formik.errors] && (
                  <Typography className="text-[10px]  text-red-600 ">
                    {formik.errors[item.name as keyof typeof formik.errors]} (*)
                  </Typography>
                )}
            </Box>
          </Box>
        ))}

        {/* Button to generate BST ID */}
        <Box className="mt-2">
          <Button
            type="button"
            onClick={generateBstId} // Call function to generate bstId
            size="sm"
            className="bg-gray-500 hover:bg-gray-400"
            style={{ fontFamily: "eczar" }}
            disabled={isLoading}>
            Generate BST ID
          </Button>
        </Box>

        <Box className="mt-5">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full"
            style={{ fontFamily: "eczar" }}>
            {isLoading ? <ButtonSpinners /> : "Add User"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddUserBstIdForm;
