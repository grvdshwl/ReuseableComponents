import { useState } from "react";
import {
  CalculatorButton,
  CalculatorButtonPrimaryContainer,
  CalculatorButtonMainContainer,
  CalculatorContainer,
  CalculatorDisplayContainer,
  CalculatorButtonSecondaryContainer,
  CalculatorButtonTertiaryContainer,
  CalculatorDisplay,
} from "./Calculator.styles";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    if (input !== "Error") {
      setInput((prevValue) => prevValue + value);
    } else {
      setInput(value);
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      const sanitizedExpression = input.replace(/\b0+(\d+)/g, "$1");
      const result = eval(sanitizedExpression).toFixed(2);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };
  return (
    <CalculatorContainer>
      <CalculatorDisplayContainer>
        <CalculatorDisplay>{input}</CalculatorDisplay>
      </CalculatorDisplayContainer>
      <CalculatorButtonMainContainer>
        <CalculatorButtonPrimaryContainer>
          <CalculatorButton color="#000" inverted={true} onClick={handleClear}>
            Clear
          </CalculatorButton>
          <CalculatorButton color="#000" inverted={true} onClick={handleClear}>
            C
          </CalculatorButton>
          <CalculatorButton
            inverted={true}
            onClick={handleClick.bind(null, "/")}
          >
            /
          </CalculatorButton>
        </CalculatorButtonPrimaryContainer>
        <CalculatorButtonSecondaryContainer>
          <CalculatorButton onClick={handleClick.bind(null, "7")}>
            7
          </CalculatorButton>
          <CalculatorButton onClick={handleClick.bind(null, "8")}>
            8
          </CalculatorButton>
          <CalculatorButton onClick={handleClick.bind(null, "9")}>
            9
          </CalculatorButton>
          <CalculatorButton
            inverted={true}
            onClick={handleClick.bind(null, "*")}
          >
            x
          </CalculatorButton>
        </CalculatorButtonSecondaryContainer>
        <CalculatorButtonSecondaryContainer>
          <CalculatorButton onClick={handleClick.bind(null, "4")}>
            4
          </CalculatorButton>
          <CalculatorButton onClick={handleClick.bind(null, "5")}>
            5
          </CalculatorButton>
          <CalculatorButton onClick={handleClick.bind(null, "6")}>
            6
          </CalculatorButton>
          <CalculatorButton
            inverted={true}
            onClick={handleClick.bind(null, "-")}
          >
            -
          </CalculatorButton>
        </CalculatorButtonSecondaryContainer>
        <CalculatorButtonSecondaryContainer>
          <CalculatorButton onClick={handleClick.bind(null, "1")}>
            1
          </CalculatorButton>
          <CalculatorButton onClick={handleClick.bind(null, "2")}>
            2
          </CalculatorButton>
          <CalculatorButton onClick={handleClick.bind(null, "3")}>
            3
          </CalculatorButton>
          <CalculatorButton
            inverted={true}
            onClick={handleClick.bind(null, "+")}
          >
            +
          </CalculatorButton>
        </CalculatorButtonSecondaryContainer>
        <CalculatorButtonTertiaryContainer>
          <CalculatorButton onClick={handleClick.bind(null, "0")}>
            0
          </CalculatorButton>
          <CalculatorButton onClick={handleClick.bind(null, ".")}>
            .
          </CalculatorButton>
          <CalculatorButton
            color="#000"
            inverted={true}
            onClick={calculateResult}
          >
            =
          </CalculatorButton>
        </CalculatorButtonTertiaryContainer>
      </CalculatorButtonMainContainer>
    </CalculatorContainer>
  );
};

export default Calculator;
