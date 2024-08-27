import facebookIcon from "@/assets/icons/facebook2.png";
import googleIcon from "@/assets/icons/google.png";
import { Box } from "@mui/material";
import { Button } from "../ui/button";

const SignUpOptions = () => {
  return (
    <Box className=" border-b py-4 border-gray-200 space-y-2">
      <Button className="flex items-center shadow-none border-[#e3e2e0] hover:bg-[#f3f3f3] border justify-center bg-white space-x-2">
        <img src={googleIcon} alt="google signup" className="w-[5%]" />
        <span className="text-[#000] text-[13px] opacity-70 ">
          Continue With Google
        </span>
      </Button>
      <Button className="flex items-center shadow-none border-[#e3e2e0] hover:bg-[#f3f3f3] border justify-center bg-white space-x-2">
        <img src={facebookIcon} alt="google signup" className="w-[5%]" />
        <span className="text-[#000] text-[13px] opacity-70 ">
          Continue With Facebook
        </span>
      </Button>
    </Box>
  );
};

export default SignUpOptions;
