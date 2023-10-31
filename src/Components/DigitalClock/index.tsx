import {
  DigitalClockContainer,
  DigitalClockInnerContainer,
  DigitalClockLabel,
  DigitalClockTime,
} from "./DigitalClock.styles";

const DigitalClock = () => {
  return (
    <DigitalClockContainer>
      <DigitalClockInnerContainer>
        <DigitalClockTime>00:21:36</DigitalClockTime>
        <DigitalClockLabel>AM</DigitalClockLabel>
      </DigitalClockInnerContainer>
    </DigitalClockContainer>
  );
};

export default DigitalClock;
