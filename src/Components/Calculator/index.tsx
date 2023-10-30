import {
  CalculatorButton,
  CalculatorButtonPrimaryContainer,
  CalculatorButtonMainContainer,
  CalculatorContainer,
  CalculatorDisplayContainer,
  CalculatorButtonSecondaryContainer,
  CalculatorButtonTertiaryContainer,
} from "./Calculator.styles";

const Calculator = () => {
  return (
    <CalculatorContainer>
      <CalculatorDisplayContainer />
      <CalculatorButtonMainContainer>
        <CalculatorButtonPrimaryContainer>
          <CalculatorButton color="#000" inverted={true}>
            clear
          </CalculatorButton>
          <CalculatorButton color="#000" inverted={true}>
            C
          </CalculatorButton>
          <CalculatorButton inverted={true}>/</CalculatorButton>
        </CalculatorButtonPrimaryContainer>
        <CalculatorButtonSecondaryContainer>
          <CalculatorButton>7</CalculatorButton>
          <CalculatorButton>8</CalculatorButton>
          <CalculatorButton>9</CalculatorButton>
          <CalculatorButton inverted={true}>X</CalculatorButton>
        </CalculatorButtonSecondaryContainer>
        <CalculatorButtonSecondaryContainer>
          <CalculatorButton>4</CalculatorButton>
          <CalculatorButton>5</CalculatorButton>
          <CalculatorButton>6</CalculatorButton>
          <CalculatorButton inverted={true}>-</CalculatorButton>
        </CalculatorButtonSecondaryContainer>
        <CalculatorButtonSecondaryContainer>
          <CalculatorButton>1</CalculatorButton>
          <CalculatorButton>2</CalculatorButton>
          <CalculatorButton>3</CalculatorButton>
          <CalculatorButton inverted={true}>+</CalculatorButton>
        </CalculatorButtonSecondaryContainer>
        <CalculatorButtonTertiaryContainer>
          <CalculatorButton>0</CalculatorButton>
          <CalculatorButton>.</CalculatorButton>
          <CalculatorButton color="#000" inverted={true}>
            =
          </CalculatorButton>
        </CalculatorButtonTertiaryContainer>
      </CalculatorButtonMainContainer>
    </CalculatorContainer>
  );
};

export default Calculator;
