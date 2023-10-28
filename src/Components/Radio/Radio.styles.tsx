import React, { ReactNode } from "react";
import styled from "styled-components";

export const RadioContainer: React.FC<{
  color: string;
  children: ReactNode;
}> = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${(props) => props.color};
  cursor: pointer;
  border-radius: 50%;
  width: 18px;
  height: 18px;
`;

export const RadioInput: React.FC<{
  color: string;
}> = styled.div`
  width: 10px;
  height: 10px;
  background: ${(props) => props.color};
  border-radius: 50%;
`;
