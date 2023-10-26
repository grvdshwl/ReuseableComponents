import React, { ReactNode } from "react";
import styled from "styled-components";
import { AccordianDataProps } from ".";
import { BsChevronDown } from "react-icons/bs";

export const AccordianContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 650px;
`;

export const AccordianBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #d3d3d3;
`;

export const AccordianBoxPrimaryTitle = styled.p`
  font-size: 16px;
  color: #262626;
`;

export const AccordianBoxPrimaryIcon = styled(BsChevronDown)<{
  isOpen: boolean;
}>`
  font-size: 20px;
  transform: ${(props) => (props.isOpen ? "rotate(-180deg)" : "rotate(0deg)")};
  transition: all 0.5s ease-in-out;
`;

export const AccordianBoxPrimaryContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px 12px;
  border-radius: 8px;
  transition: all ease 0.2s;
  user-select: none;
`;

export const AccordianBoxSecondaryContainer: React.FC<{
  isOpen: boolean;
  children: ReactNode;
}> = styled.div`
  max-height: ${(props) => (props.isOpen ? "650px" : 0)};
  z-index: ${(props) => (props.isOpen ? 1 : -1)};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: all 0.5s ease-in-out;
`;

export const AccordianBoxSecondaryDescription = styled.p`
  padding: 12px 16px;
  font-size: 14px;
  color: #262626;
  text-align: justify;
`;

export const AccordianTitle = styled.p`
  font-size: 24px;
  color: #262626;
  font-weight: 600;
  text-align: center;
`;

interface AccordianBoxProps extends AccordianDataProps {
  isSelected: boolean;
  onPress: () => void;
}

export const AccordianBox: React.FC<AccordianBoxProps> = ({
  title,
  content,
  isSelected,
  onPress,
}) => (
  <AccordianBoxContainer>
    <AccordianBoxPrimaryContainer onClick={onPress}>
      <AccordianBoxPrimaryTitle>{title}</AccordianBoxPrimaryTitle>
      <AccordianBoxPrimaryIcon isOpen={isSelected} />
    </AccordianBoxPrimaryContainer>
    <AccordianBoxSecondaryContainer isOpen={isSelected}>
      <AccordianBoxSecondaryDescription>
        {content}
      </AccordianBoxSecondaryDescription>
    </AccordianBoxSecondaryContainer>
  </AccordianBoxContainer>
);
