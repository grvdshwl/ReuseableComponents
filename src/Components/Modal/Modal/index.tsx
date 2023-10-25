import { ReactNode } from "react";
import ModalOverlay from "../ModalOverlay";
import ModalWrapper from "../ModalWrapper";
import ModalBox from "../ModalBox";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}
const Modal: React.FC<ModalProps> = ({ children, isOpen, closeModal }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <ModalWrapper>
      <ModalOverlay />
      <ModalBox closeModal={closeModal}>{children}</ModalBox>
    </ModalWrapper>
  );
};

export default Modal;
