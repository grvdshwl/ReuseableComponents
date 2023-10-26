import { AiFillStar } from "react-icons/ai";
import styled from "styled-components";

export const StarRatingsContainer = styled.div``;

export const StarRatingsMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin: 12px;
`;

export const StarIcon = styled(AiFillStar).attrs((props) => {
  const { color, size } = props;
  return { color, size };
})`
  cursor: pointer;
  transition: transform ease-in-out 0.2s;
  color: red;
  &:hover {
    transform: ${({ isEditable }) => (isEditable ? "scale(1.25)" : "unset")};
  }
`;
export const StarRatingsTitle = styled.p`
  font-size: 24px;
  color: #262626;
  font-weight: 600;
  text-align: center;
`;
