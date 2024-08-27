import { RotatingLines } from "react-loader-spinner";
const ButtonSpinners = () => {
  return (
    <div>
      <RotatingLines
        visible={true}
        width="15"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        strokeColor="#fff"
      />
    </div>
  );
};

export default ButtonSpinners;
