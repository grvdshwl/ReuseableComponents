import {
  ProgressBarContainer,
  ProgressBarFill,
  ProgressBarTitle,
  ProgressBarWrapper,
} from "./ProgressBar.styles";
interface ProgressBarProps {
  progress: number;
  barColor?: string;
  barWidth?: string;
  barHeight?: string;
}
const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const {
    progress,
    barColor = "#4bc6b9",
    barWidth = "400px",
    barHeight = "10px",
  } = props;
  return (
    <ProgressBarWrapper>
      <ProgressBarTitle>Progress Bar</ProgressBarTitle>
      <ProgressBarContainer width={barWidth} height={barHeight}>
        <ProgressBarFill progress={progress} barColor={barColor} />
      </ProgressBarContainer>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
