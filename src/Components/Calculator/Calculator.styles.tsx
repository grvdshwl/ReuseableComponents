import { ReactNode } from "react";
import styled from "styled-components";

export const CalculatorContainer = styled.div`
  width: 400px;
  height: 600px;
  background: #000;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CalculatorDisplayContainer = styled.div`
  width: 100%;
  height: 30%;
`;

export const CalculatorButtonMainContainer = styled.div`
  width: 100%;
  height: 70%;
  display: grid;
  gap: 16px;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
`;

export const CalculatorButtonPrimaryContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 16px;
`;

export const CalculatorButtonSecondaryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
`;

export const CalculatorButtonTertiaryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: 16px;
`;

export const CalculatorButton: React.FC<{
  color?: string;
  inverted?: boolean;
  children: ReactNode;
}> = styled.div`
  background: ${(props) => (!!props.inverted ? "#3bc9db" : "#212529")};
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color ?? "#FFF"};
  font-size: 16px;
  text-transform: capitalize;
  cursor: pointer;
`;
