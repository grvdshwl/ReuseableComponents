import styled, { keyframes } from "styled-components";

const fillAnimation = (width: number) => keyframes`
  0% {
    width: 0%;
  }

  100% {
    width: ${width}%;
  }
`;
interface ProgressBarContainerProps {
  width: string;
  height: string;
}
export const ProgressBarContainer = styled.div<ProgressBarContainerProps>`
  width: ${({ width }) => `${width}`};
  background-color: #d4d4d4;
  height: ${({ height }) => `${height}`};
  border-radius: ${({ height }) => `${height}`};
  overflow: hidden;
`;
interface ProgressBarFillProps {
  progress: number;
  barColor: string;
}
export const ProgressBarFill = styled.div<ProgressBarFillProps>`
  height: 100%;
  background-color: ${({ barColor }) => `${barColor}`};
  width: ${({ progress }) => `${progress}%`};
  animation: ${({ progress }) => fillAnimation(progress)} 2s ease-in-out;
`;
