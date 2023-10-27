import styled from "styled-components";

export const TodoListContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TodoListTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

export const TodoListInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const TodoListInput = styled.input`
  border: 1px solid #262626;
  padding: 8px 12px;
  outline: none;
`;

export const TodoListButton = styled.button`
  border: 1px solid transparent;
  background: #262626;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding: 6px 8px;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #262626;
    border: 1px solid #262626;
  }
`;

export const TodoListMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const TodoListItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  padding: 8px 12px;
  background: #c3fae8;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: #ffe3e3;
  }
`;
export const TodoListNoItem = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
