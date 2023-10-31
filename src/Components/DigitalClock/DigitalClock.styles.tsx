import styled from "styled-components";

export const DigitalClockContainer = styled.div`
  border: 6px solid #495057;
  height: fit-content;
  border-radius: 12px;
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const DigitalClockInnerContainer = styled.div`
  width: 280px;
  height: 90px;
  background: #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 12px;
  border-radius: 5px;
`;

export const DigitalClockTime = styled.div`
  color: #51cf66;
  font-size: 36px;
  letter-spacing: 2px;
  font-family: "Orbitron", sans-serif;
  align-self: end;
`;

export const DigitalClockLabel = styled.div`
  color: #51cf66;
  font-size: 16px;
  letter-spacing: 1px;
  font-family: "Orbitron", sans-serif;
  font-weight: 600;
`;
