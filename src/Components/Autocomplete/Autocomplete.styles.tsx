import { ReactNode } from "react";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

export const AutocompleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AutocompleteTitle = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 24px;
`;

export const AutocompleteInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;

export const AutocompleteInputIcon = styled(BsSearch)`
  width: 16px;
  height: 16px;
  color: #d3d3d3;
`;

export const AutocompleteMainContainer = styled.div`
  width: 450px;
`;

export const AutocompleteInputContainer = styled.div`
  outline: none;
  padding: 12px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.08);
`;

export const AutocompleteSuggestionBox: React.FC<{
  isVisible: boolean;
  children: ReactNode;
}> = styled.div`
  width: 100%;
  min-height: 160px;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.08);
  border-top: 1px solid transparent;
  margin-top: 4px;
  outline: none;
  padding: 12px 16px;
  flex-direction: column;
  gap: 12px;
`;

export const AutocompleteSuggestionBoxItem = styled.p`
  color: #262626;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

export const AutocompleteSuggestionBoxText = styled.p`
  color: #262626;
  font-size: 16px;
  font-weight: 500;
`;
