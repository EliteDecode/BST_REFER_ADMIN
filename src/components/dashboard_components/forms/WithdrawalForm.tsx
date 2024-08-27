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
import { PiHandWithdraw } from "react-icons/pi";

export function WithdrawalForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="icon">
          <PiHandWithdraw size={15} className="text-secondary font-bold" />{" "}
          <span
            className="text-black font-bold text-xs uppercase text-secondary"
            style={{ fontFamily: "eczar" }}>
            Withdrawal{" "}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle style={{ fontFamily: "eczar" }}>
            {" "}
            Withdraw Account
          </DialogTitle>
          <DialogDescription>
            Enter the amount you want to withdraw from your account.
          </DialogDescription>
        </DialogHeader>
        <div className="items-center gap-4">
          <Label
            htmlFor="name"
            className="text-right"
            style={{ fontFamily: "eczar" }}>
            Amount
          </Label>
          <Input id="name" value="" placeholder="Please enter amount" />
        </div>
        <DialogFooter>
          <Button type="submit" style={{ fontFamily: "eczar" }}>
            {" "}
            Withdraw
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
