import styled from "styled-components";
import ProgressBar from "../../Components/ProgressBar";
export const ProgressBarUITitle = styled.p`
  font-size: 24px;
  color: #262626;
  font-weight: 600;
  text-align: center;
`;

export const ProgressBarUIWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ProgressBarUI = () => {
  return (
    <ProgressBarUIWrapper>
      <ProgressBarUITitle>Progress Bar</ProgressBarUITitle>
      <ProgressBar progress={65} />
    </ProgressBarUIWrapper>
  );
};

export default ProgressBarUI;
