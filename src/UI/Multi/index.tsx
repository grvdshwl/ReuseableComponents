import { useEffect, useState } from "react";
import Toast from "../../Components/Toast";
import {
  MultiButton,
  MultiContainer,
  MultiModalContent,
  MultiModalContentTitle,
  MultiToolTipButton,
  MultiToolTipContent,
} from "./Multi.styles";
import Modal from "../../Components/Modal/Modal";
import Tooltip from "../../Components/Tooltip";

const Multi = () => {
  const duration = 2000;
  const [toastVisible, setToastVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (toastVisible) {
      const timer = setTimeout(() => {
        setToastVisible(false);
      }, duration);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [duration, toastVisible]);
  const handleToast = () => {
    setToastVisible(true);
  };

  const handleModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <MultiContainer>
      <MultiToolTipContent>
        <Tooltip text="I am tooltip">
          <MultiToolTipButton />
        </Tooltip>
      </MultiToolTipContent>

      <MultiButton onClick={handleToast} color="#22b8cf">
        Toast
      </MultiButton>
      <Toast visible={toastVisible} message="Hi! How are you ?" />
      <MultiButton onClick={handleModal} color="#38d9a9">
        Modal
      </MultiButton>
      <Modal closeModal={closeModal} isOpen={modalVisible}>
        <MultiModalContent>
          <MultiModalContentTitle>Hi,How are you ?</MultiModalContentTitle>
          <MultiButton onClick={closeModal} color="#cc5de8">
            Okay
          </MultiButton>
        </MultiModalContent>
      </Modal>
    </MultiContainer>
  );
};

export default Multi;
