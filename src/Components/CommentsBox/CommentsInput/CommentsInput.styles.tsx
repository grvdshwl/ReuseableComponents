import styled from "styled-components";

export const CommentsInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const CommentsInputTitle = styled.p`
  font-size: 20px;
  color: #262626;
  font-weight: 600;
`;
export const CommentsInputName = styled.input.attrs({
  type: "text",
  placeholder: "Type name here",
})`
  width: 350px;
  border: none;
  padding: 4px 8px;
  border: 1px solid #262626;
  border-radius: 5px;
  line-height: 20px;
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.04);
`;
export const CommentsInputInput = styled.input.attrs({
  type: "text",
  placeholder: "Type comment here",
})`
  width: 350px;
  border: none;
  padding: 4px 8px;
  border: 1px solid #262626;
  border-radius: 5px;
  height: 55px;
  line-height: 20px;
  box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.04);
`;

export const CommentsInputButton = styled.button`
  border: 1px solid black;
  padding: 8px 12px;
  background: #262626;
  color: #fff;
  cursor: pointer;
  width: fit-content;
  align-self: flex-end;
`;
