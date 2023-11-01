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
  background-color: #f1f3f5;
  height: ${({ height }) => `${height}`};
  border-radius: ${({ height }) => `${height}`};
  overflow: hidden;
`;
interface ProgressBarFillProps {
  progress: number;
  barColor: string;
  animate: boolean;
}
export const ProgressBarFill = styled.div<ProgressBarFillProps>`
  height: 100%;
  background-color: ${({ barColor }) => barColor};
  width: ${({ progress }) => `${progress}%`};
  animation: ${({ progress, animate }) => animate && fillAnimation(progress)} 2s
    ease-in-out none;
  border-radius: 12px;
`;

export const ProgressBarTitle = styled.p`
  font-size: 24px;
  color: #262626;
  font-weight: 600;
  text-align: center;
`;

export const ProgressBarWrapper = styled.p`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
