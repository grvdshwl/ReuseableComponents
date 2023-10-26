import styled from "styled-components";

export const StopwatchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StopwatchContainer = styled.div`
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05);
  height: 180px;
  width: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 36px;
  padding: 20px;
`;

export const StopwatchTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;
export const StopwatchTimer = styled.p`
  font-size: 36px;
  font-weight: 500;
`;

export const StopwatchButtonContainer = styled.p`
  display: grid;
  gap: 12px;
  place-items: center;
  grid-template-columns: 1fr 1fr;
`;

export const StopwatchButton = styled.div`
  background: ${(props) => props.color};
  padding: 8px 12px;
  border-radius: 6px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  transition: all ease 0.2s;
`;
