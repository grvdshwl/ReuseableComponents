import { useEffect, useState } from "react";
import {
  DigitalClockContainer,
  DigitalClockInnerContainer,
  DigitalClockLabel,
  DigitalClockTime,
} from "./DigitalClock.styles";

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();

      setCurrentTime(date);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const currentHour = currentTime.getHours();
  const hours = (currentHour % 12 || 12).toString().padStart(2, "0");
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");
  const seconds = String(currentTime.getSeconds()).padStart(2, "0");

  const label = currentTime.getHours() > 12 ? "PM" : "AM";
  return (
    <DigitalClockContainer>
      <DigitalClockInnerContainer>
        <DigitalClockTime>
          {hours}:{minutes}:{seconds}
        </DigitalClockTime>
        <DigitalClockLabel>{label}</DigitalClockLabel>
      </DigitalClockInnerContainer>
    </DigitalClockContainer>
  );
};

export default DigitalClock;
