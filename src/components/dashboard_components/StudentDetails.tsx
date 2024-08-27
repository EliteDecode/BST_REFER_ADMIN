import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ButtonSpinners from "@/helpers/ButtonSpinners";
import useDeleteStudent from "@/hooks/form-hooks/useDeleteStudent";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";

const StudentDetails = () => {
  const { singleStudent } = useSelector((state: any) => state.student);
  const { isLoading, handleDeleteStudent } = useDeleteStudent();

  const studentDetails = [
    {
      key: "Fullname",
      value: singleStudent?.fullname,
    },
    {
      key: "Email",
      value: singleStudent?.email,
    },
    {
      key: "Phone",
      value: singleStudent?.phone || "Not Set",
    },
    {
      key: "Course",
      value: singleStudent?.course || "Not Set",
    },
    {
      key: "Address",
      value: singleStudent?.address || "Not Set",
    },
  ];

  return (
    <Box className="">
      <Box className="space-y-2">
        {studentDetails?.map((item, index) => (
          <Box key={index} className="flex justify-between gap-2">
            <span className="text-[13px]">{item.key}:</span>
            <span className="text-[13px] font-bold">{item.value}</span>
          </Box>
        ))}
        <Box className="flex justify-between gap-2">
          {" "}
          {/* Changed classname to className */}
          <span className="text-[13px]">Match Status:</span>
          {singleStudent?.isMatched === true ? (
            <span className="text-green-500 bg-green-200 border px-2 py-0 rounded-md text-[11px] ">
              Successful
            </span>
          ) : (
            <span className="text-orange-500 bg-orange-200 border px-2 py-0 rounded-md text-[11px] ">
              Pending
            </span>
          )}
        </Box>

        <Box className="mt-5">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive" size="sm">
                {" "}
                Delete Student{" "}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle style={{ fontFamily: "eczar" }}>
                  Delete Student Data
                </DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this student data?
                </DialogDescription>
              </DialogHeader>

              <DialogFooter>
                <Button
                  disabled={isLoading}
                  variant="destructive"
                  onClick={handleDeleteStudent}
                  type="button"
                  style={{ fontFamily: "eczar" }}>
                  {isLoading ? <ButtonSpinners /> : "Proceed"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Box>
      </Box>
    </Box>
  );
};

export default StudentDetails;
