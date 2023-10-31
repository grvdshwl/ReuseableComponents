import DigitalClock from "../../Components/DigitalClock";
import { CommonTitle, CommonWrapper } from "../AppUI/App.styles";

const DigitalClockUI = () => {
  return (
    <CommonWrapper>
      <CommonTitle>Digital Clock</CommonTitle>
      <DigitalClock />
    </CommonWrapper>
  );
};

export default DigitalClockUI;
