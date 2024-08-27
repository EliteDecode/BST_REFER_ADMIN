import { Box } from "@mui/material";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import useApproveDeclineWithdrawa from "@/hooks/form-hooks/useApproveDeclineWithdrawal";
import ButtonSpinners from "@/helpers/ButtonSpinners";

const WithdrawalActions = () => {
  const { handleDeclineWithdrawal, handleApproveWithdrawal, isLoading } =
    useApproveDeclineWithdrawa();
  return (
    <Box className="space-x-2">
      {" "}
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm" variant="destructive">
            Decline Withdrawal
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle style={{ fontFamily: "eczar" }}>
              Decline Transaction
            </DialogTitle>
            <DialogDescription>
              Please click proceed to continue
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button
              disabled={isLoading}
              onClick={handleDeclineWithdrawal}
              type="button"
              variant="destructive"
              style={{ fontFamily: "eczar" }}>
              {isLoading ? <ButtonSpinners /> : "Decline Request"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm" className="bg-green-800 hover:bg-green-700">
            Approve Withdrawal
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle style={{ fontFamily: "eczar" }}>
              Approve Transaction
            </DialogTitle>
            <DialogDescription>
              Please click proceed to continue
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button
              disabled={isLoading}
              className="bg-green-800 hover:bg-green-700"
              onClick={handleApproveWithdrawal}
              type="button"
              style={{ fontFamily: "eczar" }}>
              {isLoading ? <ButtonSpinners /> : "Approve Request"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default WithdrawalActions;
