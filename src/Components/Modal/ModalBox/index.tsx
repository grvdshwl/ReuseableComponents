import React, { ReactNode } from "react";
import {
  ModalBoxCloseButton,
  ModalBoxContainer,
  ModalBoxContentContainer,
} from "./ModalBox.styles";
interface ModalBoxProps {
  children: ReactNode;
  closeModal: () => void;
}
const ModalBox: React.FC<ModalBoxProps> = ({ children, closeModal }) => {
  return (
    <ModalBoxContainer>
      <ModalBoxCloseButton onClick={closeModal} />
      <ModalBoxContentContainer>{children}</ModalBoxContentContainer>
    </ModalBoxContainer>
  );
};

export default ModalBox;
