import ButtonSpinners from "@/helpers/ButtonSpinners";
import useResetPasswordForm from "@/hooks/form-hooks/useResetPasswordForm";
import { resetPasswordInputs } from "@/utils/authContents";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, IconButton, InputAdornment } from "@mui/material";
import { Typography } from "antd";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const ResetPasswordForm = () => {
  const { formik, handleTogglePasswordVisibility, showPassword, isLoading } =
    useResetPasswordForm();
  return (
    <Box className=" py-2">
      <form onSubmit={formik.handleSubmit}>
        {resetPasswordInputs?.map((item, index) => (
          <Box key={index}>
            <Label className="text-[11px] text-[#0009]" htmlFor={item.id}>
              {item?.label}
            </Label>
            <Input
              className={`text-[12px] w-full ${
                formik.touched[item.id as keyof typeof formik.touched] &&
                formik.errors[item.id as keyof typeof formik.errors] &&
                "border-red-500 border"
              }`}
              id={item?.id}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type={
                item.type === "password" && showPassword ? "text" : item.type
              }
              placeholder={item?.placeholder}
              icon={
                item?.type === "password" && (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end">
                      {showPassword ? (
                        <VisibilityOff style={{ fontSize: "14px" }} />
                      ) : (
                        <Visibility style={{ fontSize: "14px" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                )
              }
            />
            <Box className="relative">
              {formik.touched[item.id as keyof typeof formik.touched] &&
                formik.errors[item.id as keyof typeof formik.errors] && (
                  <Typography className="text-[10px]  text-red-600 ">
                    {formik.errors[item.id as keyof typeof formik.errors]} (*)
                  </Typography>
                )}
            </Box>
          </Box>
        ))}
        <Box className="mt-5">
          <Button
            disabled={isLoading}
            className="w-full"
            style={{ fontFamily: "eczar" }}>
            {isLoading ? <ButtonSpinners /> : "Reset Password"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ResetPasswordForm;
