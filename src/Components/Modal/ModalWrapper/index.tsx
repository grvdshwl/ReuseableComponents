import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalWrapperProps {
  children: ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById("modal-root") as Element
  );
};

export default ModalWrapper;
