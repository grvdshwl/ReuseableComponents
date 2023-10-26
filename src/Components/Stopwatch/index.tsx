import { useEffect, useState } from "react";
import {
  StopwatchButton,
  StopwatchButtonContainer,
  StopwatchContainer,
  StopwatchTimer,
  StopwatchTitle,
  StopwatchWrapper,
} from "./Stopwatch.styles";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    let timer: number;

    if (isRunning) {
      timer = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setTimeElapsed(0);
  };

  const seconds = timeElapsed % 60;
  const minutes = Math.floor((timeElapsed / 60) % 60);
  const hours = Math.floor(timeElapsed / 3600);
  const mainTitle = isRunning ? "Stop" : "Start";
  const mainColor = isRunning ? "#fa5252" : "#20c997";

  return (
    <StopwatchWrapper>
      <StopwatchTitle>Stop Watch</StopwatchTitle>

      <StopwatchContainer>
        <StopwatchTimer>
          {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </StopwatchTimer>
        <StopwatchButtonContainer>
          <StopwatchButton color={mainColor} onClick={startStopwatch}>
            {mainTitle}
          </StopwatchButton>
          <StopwatchButton color="#fcc419" onClick={resetStopwatch}>
            Reset
          </StopwatchButton>
        </StopwatchButtonContainer>
      </StopwatchContainer>
    </StopwatchWrapper>
  );
};

export default Stopwatch;
