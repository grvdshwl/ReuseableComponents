import styled from "styled-components";
import Calculator from "../../Components/Calculator";
export const CalculatorUITitle = styled.p`
  font-size: 24px;
  color: #262626;
  font-weight: 600;
  text-align: center;
`;

export const CalculatorUIWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CalculatorUI = () => {
  return (
    <CalculatorUIWrapper>
      <CalculatorUITitle>Calculator</CalculatorUITitle>
      <Calculator />
    </CalculatorUIWrapper>
  );
};

export default CalculatorUI;
