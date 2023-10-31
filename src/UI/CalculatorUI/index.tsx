import Calculator from "../../Components/Calculator";
import { CommonTitle, CommonWrapper } from "../AppUI/App.styles";

const CalculatorUI = () => {
  return (
    <CommonWrapper>
      <CommonTitle>Calculator</CommonTitle>
      <Calculator />
    </CommonWrapper>
  );
};

export default CalculatorUI;
