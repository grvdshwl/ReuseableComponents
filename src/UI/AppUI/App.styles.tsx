import { ReactNode } from "react";
import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  gap: 36px;
`;

export const AppWrapperNavigation = styled.div`
  width: 300px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 24px;
  box-shadow: 1px -2px 6px 2px rgba(0, 0, 0, 0.05);
`;

export const AppWrapperNavigationBar: React.FC<{
  isSelected: boolean;
  children: ReactNode;
  onClick: () => void;
}> = styled.div`
  background: ${(props) => (props.isSelected ? "#262626" : "transparent")};
  padding: 12px 14px;
  margin: 0px 12px;
  border-radius: 5px;
  color: ${(props) => (props.isSelected ? "#fff" : "#262626")};
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.isSelected ? "#262626" : "#f1f3f5")};
  }
`;

export const AppUIComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  justify-content: center;
`;

export const Loader = styled.div`
  border: 2px solid #262626;
  border-top: 4px solid transparent;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const CommonTitle = styled.p`
  font-size: 24px;
  color: #262626;
  font-weight: 600;
  text-align: center;
`;

export const CommonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
