import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

export const ModalBoxContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background: #fff;
  max-width: 100%;
  max-height: 60%;
  z-index: 1001;
  min-width: 300px;
  min-height: 200px;
  transform: translate(-50%, -50%);
  @media (max-width: 600px) {
    max-width: 95%;
    max-height: 50%;
  }

  @media (max-width: 950px) {
    max-width: 90%;
    max-height: 50%;
  }
`;

export const ModalBoxContentContainer = styled.div`
  min-height: 100%;
  max-height: 100%;
  object-fit: contain;
  overflow: auto;
  margin: 16px;
  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-track {
    background: red;
  }
`;

export const ModalBoxCloseButtonContainer = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 24px 16px;
`;

export const ModalBoxCloseButtonIcon = styled(AiOutlineClose)`
  color: #262626;
  font-size: 24px;
  cursor: pointer;
  transition: all ease 0.2s;

  @media (max-width: 600px) {
    font-size: 16px;
  }

  @media (max-width: 950px) {
    font-size: 24px;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

export const ModalBoxCloseButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => (
  <>
    <ModalBoxCloseButtonContainer>
      <ModalBoxCloseButtonIcon onClick={onClick} />
    </ModalBoxCloseButtonContainer>
  </>
);
