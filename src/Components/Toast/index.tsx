import { ToastContainer } from "./Toast.styles";

interface ToastProps {
  message: string;
  visible: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, visible }) => {
  return <ToastContainer visible={visible}>{message}</ToastContainer>;
};

export default Toast;
