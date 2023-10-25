import styled from "styled-components";

export const CommentsBoxMainContainer = styled.div<{
  isMain: boolean;
  depth: number;
}>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  background: ${(props) => (props.isMain ? "#cdf5fd" : "#FFF")};
  padding: 8px 12px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.06);
  margin-left: ${(props) =>
    props.depth > 0 ? `${props.depth * 16}px` : "0px"};
`;

export const CommentsBoxMainUser = styled.div`
  font-size: 14px;
  color: #262626;
  font-weight: 600;
  text-transform: capitalize;
`;

export const CommentsBoxMainComment = styled.div`
  font-size: 14px;
  color: #262626;
  font-weight: 400;
`;

export const CommentsBoxMainButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 12px;
`;

export const CommentsBoxMainButton = styled.button`
  border: none;
  padding: 6px 8px;
  background: #00a9ff;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  width: fit-content;
`;
