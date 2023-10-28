import { ReactNode } from "react";
import styled from "styled-components";

export const ToastContainer: React.FC<{
  visible: boolean;
  children: ReactNode;
}> = styled.div`
  position: fixed;
  top: 50%;
  left: 60%;
  border: 1px solid #22b8cf;
  color: #22b8cf;
  padding: 10px 20px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-shadow: -1px 2px 10px 1px rgba(34, 187, 207, 0.4);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.6s ease-in-out;
`;
