import styled from "styled-components";

export const MultiContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MultiButton = styled.div`
  border: 1px solid transparent;
  background: ${(props) => props.color};
  color: #fff;
  width: fit-content;
  height: fit-content;
  font-size: 16px;
  font-weight: 500;
  padding: 6px 8px;
  cursor: pointer;
  min-width: 120px;
  text-align: center;
  &:hover {
    background: #fff;
    color: ${(props) => props.color};
    border: 1px solid ${(props) => props.color};
  }
`;

export const MultiModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

export const MultiModalContentTitle = styled.p`
  text-align: center;
  font-weight: 600;
`;
