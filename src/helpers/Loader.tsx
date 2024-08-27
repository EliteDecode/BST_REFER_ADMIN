import { Box } from "@mui/material";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <Box className="h-[50vh] flex items-center justify-center">
      {" "}
      <div>
        <RotatingLines
          visible={true}
          width="35"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          strokeColor="#000"
        />
      </div>
    </Box>
  );
};

export default Loader;
