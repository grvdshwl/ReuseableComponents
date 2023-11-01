import { ReactNode, useState } from "react";
import { TooltipContainer, TooltipText } from "./Tooltip.styles";

interface TooltipProps {
  text: string;
  children: ReactNode;
}
const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <TooltipContainer
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {children}
      <TooltipText show={showTooltip}>{text}</TooltipText>
    </TooltipContainer>
  );
};

export default Tooltip;
