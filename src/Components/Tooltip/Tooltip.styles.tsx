import { ReactNode } from "react";
import styled from "styled-components";

export const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const TooltipText: React.FC<{
  show: boolean;
  children: ReactNode;
}> = styled.span`
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  background-color: #262626;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 6px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 50%;
  transform: translate(-50%, -115%);
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.3s;
  white-space: nowrap;
  font-size: 14px;
`;
