import { ChangeEvent, useEffect, useState } from "react";
import { mockUserData } from "../../helpers/mockData";
import {
  PollWidgetContainer,
  PollWidgetMainContainer,
  PollWidgetMainTitle,
  PollWidgetPollItem,
  PollWidgetTitle,
  PollWidgetTotalVotesContainer,
  PollWidgetTotalVotesCount,
  PollWidgetTotalVotesTitle,
  PollWidgetUserContainer,
  PollWidgetUserContainerTitle,
  PollWidgetUserOption,
  PollWidgetUserSelect,
} from "./PollWidget.styles";

export interface Poll {
  user: string;
  value: string;
}
const PollWidget = () => {
  const [selectedUser, setSelectedUser] = useState<string>("1");

  const [pollResult, setPollResult] = useState<Poll[]>([]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedUser(value);
  };

  const handleChangePoll = (value: string) => {
    const pollData = {
      user: selectedUser,
      value,
    };
    setPollResult((prevResult) => {
      const hasVoted = prevResult.find(
        (result) => result.user === selectedUser
      );

      if (hasVoted) {
        const finalResult = prevResult.map((result) => {
          if (result.user === selectedUser) {
            return pollData;
          } else {
            return result;
          }
        });
        return finalResult;
      } else {
        return [...prevResult, pollData];
      }
    });
  };

  return (
    <PollWidgetContainer>
      <PollWidgetTitle>Poll Widget</PollWidgetTitle>
      <PollWidgetUserContainer>
        <PollWidgetUserContainerTitle for="user">
          User :
        </PollWidgetUserContainerTitle>
        <PollWidgetUserSelect type="select" onChange={handleChange}>
          {mockUserData.map((user) => (
            <PollWidgetUserOption key={user.id} value={user.id}>
              {user.full_name}
            </PollWidgetUserOption>
          ))}
        </PollWidgetUserSelect>
      </PollWidgetUserContainer>
      <PollWidgetTotalVotesContainer>
        <PollWidgetTotalVotesTitle>Total Votes :-</PollWidgetTotalVotesTitle>
        <PollWidgetTotalVotesCount>
          {pollResult.length}
        </PollWidgetTotalVotesCount>
      </PollWidgetTotalVotesContainer>
      <PollWidgetMainContainer>
        <PollWidgetMainTitle>Choose below :-</PollWidgetMainTitle>
        <PollWidgetPollItem
          value="java"
          onChange={handleChangePoll}
          result={pollResult}
          user={selectedUser}
        />
        <PollWidgetPollItem
          value="python"
          onChange={handleChangePoll}
          result={pollResult}
          user={selectedUser}
        />
        <PollWidgetPollItem
          value="c++"
          onChange={handleChangePoll}
          result={pollResult}
          user={selectedUser}
        />
        <PollWidgetPollItem
          value="kotlin"
          onChange={handleChangePoll}
          result={pollResult}
          user={selectedUser}
        />
      </PollWidgetMainContainer>
    </PollWidgetContainer>
  );
};

export default PollWidget;
