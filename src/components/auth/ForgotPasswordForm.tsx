import ButtonSpinners from "@/helpers/ButtonSpinners";
import useForgotPasswordForm from "@/hooks/form-hooks/useForgotPasswordForm";
import { Box } from "@mui/material";
import { Typography } from "antd";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const ForgotPasswordForm = () => {
  const { formik, isLoading } = useForgotPasswordForm();

  return (
    <Box className="space-y-2 py-2">
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <Label className="text-[11px] text-[#0009]">Email</Label>
          <Input
            className={`text-[12px] ${
              formik.touched.email &&
              formik.errors.email &&
              "border-red-500 border"
            }`}
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your valid email"
          />
          <Box>
            {formik.touched.email && formik.errors.email && (
              <Typography className="text-[10px] text-red-600 mt-1">
                {formik.errors.email} (*)
              </Typography>
            )}
          </Box>
        </Box>

        <Box className="mt-5">
          <Button
            className="w-full"
            type="submit"
            disabled={isLoading}
            style={{ fontFamily: "eczar" }}>
            {isLoading ? <ButtonSpinners /> : "Continue"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ForgotPasswordForm;
