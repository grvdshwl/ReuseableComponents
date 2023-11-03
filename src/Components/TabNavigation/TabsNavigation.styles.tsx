import { ReactNode } from "react";
import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const Tab: React.FC<{
  active: boolean;
  children: ReactNode;
  onClick: () => void;
}> = styled.button`
  background-color: ${(props) => (props.active ? "#262626" : "transparent")};
  color: ${(props) => (props.active ? "white" : "black")};
  border: 1px solid #262626;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #262626;
    color: white;
  }
`;
