import { useEffect, useState } from "react";
import {
  AnalogClockCentre,
  AnalogClockContainer,
  AnalogClockDegree,
  AnalogClockHourHand,
  AnalogClockMain,
  AnalogClockMinuteHand,
  AnalogClockNumber,
  AnalogClockSecondHand,
  AnalogClockTitle,
  AnalogClockWrapper,
} from "./AnalogClock.styles";

const AnalogClock = () => {
  const [rotationData, setRotationData] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });

  const setTimeRotation = () => {
    const currentTime = new Date();

    const secondsDeg = currentTime.getSeconds() / 60;
    const minutesDeg = (secondsDeg + currentTime.getMinutes()) / 60;
    const hoursDeg = (minutesDeg + currentTime.getHours()) / 12;
    setRotationData({
      seconds: secondsDeg * 360,
      minutes: minutesDeg * 360,
      hours: hoursDeg * 360,
    });
  };

  useEffect(() => {
    setTimeRotation();
    const intervalId = setInterval(setTimeRotation, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <AnalogClockWrapper>
      <AnalogClockTitle>Analog Clock</AnalogClockTitle>
      <AnalogClockContainer>
        <AnalogClockMain>
          <AnalogClockDegree />
          <AnalogClockNumber />
          <AnalogClockCentre />

          <AnalogClockHourHand value={rotationData.hours} />
          <AnalogClockMinuteHand value={rotationData.minutes} />
          <AnalogClockSecondHand value={rotationData.seconds} />
        </AnalogClockMain>
      </AnalogClockContainer>
    </AnalogClockWrapper>
  );
};

export default AnalogClock;
