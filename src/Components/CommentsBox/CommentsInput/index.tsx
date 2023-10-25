import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  CommentsInputButton,
  CommentsInputContainer,
  CommentsInputName,
  CommentsInputTitle,
} from "./CommentsInput.styles";

type CommentsProps = {
  comment: string;
  id: string;
  user: string;
  reply: CommentsProps[];
};

interface CommentsInputProps {
  onSubmit: (value: CommentsProps) => void;
  initialInput?: string;
  initialUser?: string;
}

const CommentsInput: React.FC<CommentsInputProps> = ({
  onSubmit,
  initialInput = "",
  initialUser = "",
}) => {
  const [input, setInput] = useState(initialInput);
  const [user, setUser] = useState(initialUser);
  const inputRef = useRef(null);
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUser(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.length && user.length) {
      onSubmit({
        comment: input,
        user: user,
        id: uuidv4(),
        reply: [],
      });
      setInput("");
      setUser("");
    } else if (!input.length) {
      alert("Please provide a comment.");
    } else {
      alert("Please provide a user name.");
    }
  };

  return (
    <CommentsInputContainer onSubmit={handleSubmit}>
      <CommentsInputTitle>Comments Box</CommentsInputTitle>
      <CommentsInputName
        ref={inputRef}
        value={user}
        onChange={handleNameChange}
      />
      <CommentsInputName value={input} onChange={handleTextChange} />
      <CommentsInputButton type="submit">Submit</CommentsInputButton>
    </CommentsInputContainer>
  );
};

export default CommentsInput;
