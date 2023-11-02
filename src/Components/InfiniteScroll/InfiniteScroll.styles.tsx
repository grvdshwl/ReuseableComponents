import styled from "styled-components";
import { colorObject } from "../../helpers/helper";

export const InfiniteScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfiniteScrollBox: React.FC<{
  index: number;
  className: string;
}> = styled.div`
  height: 150px;
  width: 150px;
  transform: translateX(500px);
  opacity: 0;
  transition: all ease-in-out 0.3s;
  background: ${(props) => colorObject[props.index % 5]};
`;
