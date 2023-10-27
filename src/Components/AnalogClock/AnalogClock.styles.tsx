import { ReactNode } from "react";
import styled, { css } from "styled-components";
const createArray = (num: number): number[] => {
  const result: number[] = [];
  for (let i = 1; i <= num; i++) {
    result.push(i);
  }
  return result;
};

const clockDefaultStyles = css`
  border-radius: 50% 50% 0 0;
  position: absolute;
  zindex: 5;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
  transform-origin: bottom;
`;

export const AnalogClockContainer = styled.div`
  background: #262626;
  width: 255px;
  height: 255px;
  border-radius: 50%;
  z-index: -2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AnalogClockMain = styled.div`
  background: #fff3bf;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  position: relative;
  z-index: -1;
`;

export const AnalogClockNumberContainer = styled.div``;

export const AnalogClockNumberMain: React.FC<{
  value: number;
  children: ReactNode;
}> = styled.p`
  padding: 16px;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 16px;
  transform: rotate(
    ${(props) => (props.value < 12 ? `${props.value * 30}deg` : "0deg")}
  );
`;

export const AnalogClockCentre = styled.div`
  width: 18px;
  height: 18px;
  position: absolute;
  background: #212529;
  z-index: 5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
`;

export const AnalogClockHourHand: React.FC<{
  value: number;
}> = styled.div`
  ${clockDefaultStyles};
  width: 6px;
  height: 35%;
  background: #212529;
  transform: rotate(${(props) => `${props.value}deg`});
`;

export const AnalogClockMinuteHand: React.FC<{
  value: number;
}> = styled.div`
  ${clockDefaultStyles};
  width: 4px;
  height: 40%;
  background: #343a40;
  transform: rotate(${(props) => `${props.value}deg`});
`;
export const AnalogClockSecondHand: React.FC<{
  value: number;
}> = styled.div`
  ${clockDefaultStyles};
  width: 2px;
  height: 45%;
  background: red;
  transform: rotate(${(props) => `${props.value}deg`});
`;
export const AnalogClockNumber = () => {
  let numbersArray = createArray(12);
  return (
    <AnalogClockNumberContainer>
      {numbersArray.map((num) => (
        <AnalogClockNumberMain key={num} value={num}>
          {num}
        </AnalogClockNumberMain>
      ))}
    </AnalogClockNumberContainer>
  );
};

export const AnalogClockDegreeMain: React.FC<{
  value: number;
  children: ReactNode;
}> = styled.p`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(${(props) => `${props.value * 6}deg`});
  display: flex;
  justify-content: center;
`;

export const AnalogClockDegreeIcon: React.FC<{
  value: number;
}> = styled.p`
  width: ${(props) => (props.value % 5 === 0 ? "4px" : "1px")};
  height: ${(props) => (props.value % 5 === 0 ? "8px" : "4px")};
  background: #343a40;
`;

export const AnalogClockDegree = () => {
  let numbersArray = createArray(60);
  return (
    <>
      {numbersArray.map((num) => (
        <AnalogClockDegreeMain key={num} value={num}>
          <AnalogClockDegreeIcon value={num} />
        </AnalogClockDegreeMain>
      ))}
    </>
  );
};

export const AnalogClockTitle = styled.p`
  font-size: 24px;
  color: #262626;
  font-weight: 600;
  text-align: center;
`;

export const AnalogClockWrapper = styled.p`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
