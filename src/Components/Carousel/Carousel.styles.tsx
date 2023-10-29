import { ReactNode } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled, { css } from "styled-components";
const commonButtonStyles = css`
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  padding: 6px;
  top: 50%;
  border-radius: 50%;
  cursor: pointer;
  color: #262626;
  user-select: none;
  transition: all 0.3s ease;
  position: absolute;
`;
export const CarouselContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CarouselRelativeContainer = styled.div`
  width: 1000px;
  height: 600px;
  position: relative;
  box-shadow: 2px -1px 10px 2px rgba(0, 0, 0, 0.1);
`;

export const CarouselMainContainer: React.FC<{
  activeIndex: number;
  children: ReactNode;
}> = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  transition: all 0.3s ease-in-out;
  transform: translateX(-${(props) => props.activeIndex * 100}%);
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  flex: 0 0 100%;
  object-fit: fill;
`;

export const CarouselDotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-self: center;
`;

export const CarouselDots: React.FC<{
  isActive: boolean;
  onClick: (index: number) => void;
}> = styled.div`
  width: 8px;
  height: 8px;
  border: 1px solid ${(props) => (!props.isActive ? "#262626" : "transparent")};
  border-radius: 50%;
  cursor: pointer;
  background: ${(props) => (props.isActive ? "#262626" : "transparent")};
  transition: all 0.3s ease-in-out;
`;

export const CarouselLeftButton: React.FC<{
  isVisible: boolean;
  onClick: () => void;
}> = styled(AiOutlineLeft)`
  ${commonButtonStyles};
  left: 10px;
  user-select: none;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: all 0.3s ease;
  z-index: ${(props) => (props.isVisible ? 1 : -1)};
`;

export const CarouselRightButton: React.FC<{
  isVisible: boolean;
  onClick: () => void;
}> = styled(AiOutlineRight)`
  ${commonButtonStyles};
  right: 10px;
  user-select: none;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: all 0.3s ease;
  z-index: ${(props) => (props.isVisible ? 1 : -1)};
`;
