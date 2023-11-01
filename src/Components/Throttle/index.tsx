import { useEffect, useState } from "react";
import {
  ThrottleContainer,
  ThrottleDebounceText,
  ThrottleNormalText,
  ThrottleText,
  ThrottleTextContainer,
  ThrottleTextHeading,
} from "./Throttle.styles";
import { debounce, throttle } from "../../helpers/helper";

const Throttle = () => {
  const [input, setInput] = useState(0);
  const [debounceInput, setDebounceInput] = useState(0);

  const [throttleInput, setThrottleInput] = useState(0);

  const setThrottle = throttle(() => {
    setThrottleInput((prev) => prev + 1);
  }, 500);
  const setDebounce = debounce(() => {
    setDebounceInput((prev) => prev + 1);
  }, 500);
  const incrementCount = () => {
    setInput((prev) => prev + 1);
    setThrottle();
    setDebounce();
  };

  useEffect(() => {
    document.addEventListener("mousemove", incrementCount);
  }, []);

  return (
    <ThrottleContainer>
      <ThrottleTextContainer>
        <ThrottleTextHeading>Default text:</ThrottleTextHeading>
        <ThrottleNormalText>{input}</ThrottleNormalText>
      </ThrottleTextContainer>
      <ThrottleTextContainer>
        <ThrottleTextHeading>Debounce text:</ThrottleTextHeading>
        <ThrottleDebounceText>{debounceInput}</ThrottleDebounceText>
      </ThrottleTextContainer>
      <ThrottleTextContainer>
        <ThrottleTextHeading>Throttle text:</ThrottleTextHeading>
        <ThrottleText>{throttleInput}</ThrottleText>
      </ThrottleTextContainer>
    </ThrottleContainer>
  );
};

export default Throttle;
