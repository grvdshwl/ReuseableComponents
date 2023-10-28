import { ChangeEvent, ReactNode } from "react";
import styled from "styled-components";
import ProgressBar from "../ProgressBar";
import { Poll } from ".";
import Radio from "../Radio";

export const PollWidgetContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PollWidgetTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const PollWidgetTotalVotesContainer = styled.p`
  display: flex;
  flex-direction: gap;
  gap: 12px;
`;

export const PollWidgetTotalVotesTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const PollWidgetTotalVotesCount = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const PollWidgetUserContainer = styled.form`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const PollWidgetUserContainerTitle: React.FC<{
  children: ReactNode;
  for: string;
}> = styled.label`
  font-size: 16px;
  font-weight: 500;
`;

export const PollWidgetUserSelect: React.FC<{
  children: ReactNode;
  type: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}> = styled.select``;

export const PollWidgetUserOption: React.FC<{
  children: ReactNode;
  value: string;
}> = styled.option`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const PollWidgetMainContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 24px;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
`;

export const PollWidgetMainTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
`;

export const PollWidgetMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PollWidgetPollItemContainer = styled.div`
  border: 2px solid ${(props) => props.color};
  padding: 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
`;

export const PollWidgetPollItemPrimaryBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-item: center;
`;
export const PollWidgetPollItemPercentBox = styled.div``;
export const PollWidgetPollItemWrapperBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-item: center;
`;
export const PollWidgetPollItemRadio = styled.input`
  cursor: pointer;
`;
export const PollWidgetPollItemName = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const PollWidgetPollItem: React.FC<{
  value: string;
  result: Poll[];
  user: string;
  onChange: (value: string) => void;
}> = ({ value, onChange, result, user }) => {
  let count = 0;
  result.forEach((poll) => {
    if (poll.value === value) {
      count++;
    }
  });

  const resultPercent = !!result.length
    ? ((count / result.length) * 100).toFixed(2)
    : 0;

  const isSelected = !!result.find(
    (result) => result.user === user && result.value === value
  );
  const mainColor = isSelected ? "#a61e4d" : "#ced4da";

  return (
    <PollWidgetPollItemContainer
      color={mainColor}
      onClick={onChange.bind(null, value)}
    >
      <PollWidgetPollItemWrapperBox>
        <PollWidgetPollItemPrimaryBox>
          <Radio checked={isSelected} color={mainColor} />
          <PollWidgetPollItemName>{value}</PollWidgetPollItemName>
        </PollWidgetPollItemPrimaryBox>
        <PollWidgetPollItemPercentBox>
          {resultPercent}%
        </PollWidgetPollItemPercentBox>
      </PollWidgetPollItemWrapperBox>
      <ProgressBar
        progress={+resultPercent}
        barColor={mainColor}
        animate={false}
      />
    </PollWidgetPollItemContainer>
  );
};
