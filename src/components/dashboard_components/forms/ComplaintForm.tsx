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
import { TbMessage2Up } from "react-icons/tb";

export function ComplaintForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="icon">
          <TbMessage2Up size={15} className="text-secondary font-bold" />{" "}
          <span
            className="text-black font-bold text-xs uppercase text-secondary"
            style={{ fontFamily: "eczar" }}>
            Make a Complaint{" "}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle style={{ fontFamily: "eczar" }}>
            Make a Complaint
          </DialogTitle>
          <DialogDescription>
            Enter the title and message of your complaint.
          </DialogDescription>
        </DialogHeader>
        <div className="items-center gap-4">
          <Label
            htmlFor="name"
            className="text-right"
            style={{ fontFamily: "eczar" }}>
            Title
          </Label>
          <Input
            id="name"
            value=""
            className="text-[12px] outline-none"
            placeholder="Please enter title of message"
          />
        </div>
        <div className="items-center gap-4">
          <Label
            htmlFor="name"
            className="text-right"
            style={{ fontFamily: "eczar" }}>
            Message
          </Label>
          <textarea
            className="w-full border p-2 text-[12px] outline-none border-gray-300 rounded-md"
            rows={8}
            placeholder="Please enter message here"
          />
        </div>
        <DialogFooter>
          <Button type="submit" style={{ fontFamily: "eczar" }}>
            Send Complaint
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
