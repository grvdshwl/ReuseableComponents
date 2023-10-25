import { useState } from "react";
import { CommentsBoxContainer, CommentsBoxWrapper } from "./CommentsBox.styles";
import CommentsBoxMain from "./CommentsMain";
import CommentsInput from "./CommentsInput";

type CommentsProps = {
  comment: string;
  id: string;
  user: string;
  reply: CommentsProps[];
};

const CommentsBox = () => {
  const [comments, setComments] = useState<CommentsProps[]>([]);

  return (
    <CommentsBoxContainer>
      <CommentsInput
        onSubmit={(value) => {
          setComments((prev) => [...prev, value]);
        }}
      />
      <CommentsBoxWrapper>
        {comments.map((data) => (
          <CommentsBoxMain
            key={data.id}
            data={data}
            type="main"
            depth={0}
            setData={setComments}
          />
        ))}
      </CommentsBoxWrapper>
    </CommentsBoxContainer>
  );
};

export default CommentsBox;
