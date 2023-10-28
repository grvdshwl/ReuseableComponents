import { ProgressBarContainer, ProgressBarFill } from "./ProgressBar.styles";
interface ProgressBarProps {
  progress: number;
  barColor?: string;
  barWidth?: string;
  barHeight?: string;
  animate?: boolean;
}
const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const {
    progress,
    barColor = "#4bc6b9",
    barWidth = "400px",
    barHeight = "10px",
    animate = true,
  } = props;
  return (
    <ProgressBarContainer width={barWidth} height={barHeight}>
      <ProgressBarFill
        progress={progress}
        barColor={barColor}
        animate={animate}
      />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
