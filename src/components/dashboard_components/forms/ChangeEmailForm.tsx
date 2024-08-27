import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ButtonSpinners from "@/helpers/ButtonSpinners";
import useChangeEmailForm from "@/hooks/form-hooks/useChangeEmailForm";
import { Box } from "@mui/material";
import { CiEdit } from "react-icons/ci";

export function ChangeEmailForm() {
  const { formik, isLoading } = useChangeEmailForm();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Box className="flex items-center border space-x-2 cursor-pointer rounded-md bg-purple-100 text-purple-600 px-2 py-0.5">
          <CiEdit size={15} />
          <span className="text-[12px]">Change Email</span>
        </Box>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle style={{ fontFamily: "eczar" }}>
            Change Your Email
          </DialogTitle>
          <DialogDescription>
            Please enter your new email address below.
          </DialogDescription>
        </DialogHeader>
        <div className="items-center gap-4">
          <Label
            htmlFor="email"
            className="text-right"
            style={{ fontFamily: "eczar" }}>
            Email
          </Label>
          <Input
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="text-[12px] outline-none"
            placeholder="Please enter your new email address"
          />
          {formik.touched.email && typeof formik.errors.email === "string" && (
            <p className="text-red-500 text-[12px]">{formik.errors.email}</p>
          )}
        </div>

        <DialogFooter>
          <Button
            disabled={isLoading}
            onClick={() => formik.handleSubmit()}
            type="button"
            style={{ fontFamily: "eczar" }}>
            {isLoading ? <ButtonSpinners /> : "Change Email"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
