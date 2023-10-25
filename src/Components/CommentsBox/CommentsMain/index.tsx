import React, { useState } from "react";

import {
  CommentsBoxMainButton,
  CommentsBoxMainButtonContainer,
  CommentsBoxMainComment,
  CommentsBoxMainContainer,
  CommentsBoxMainUser,
} from "./CommentsMain.styles";
import Modal from "../../Modal/Modal";
import CommentsInput from "../CommentsInput";
type CommentsProps = {
  comment: string;
  id: string;
  user: string;
  reply: CommentsProps[];
};

interface CommentsBoxMainProps {
  data: CommentsProps;
  type: string;
  depth: number;
  setData?: React.Dispatch<React.SetStateAction<CommentsProps[]>>;
  setReplyData?: React.Dispatch<React.SetStateAction<CommentsProps>>;
}
const CommentsBoxMain: React.FC<CommentsBoxMainProps> = ({
  data,
  type,
  depth,
  setData,
  setReplyData,
}) => {
  const [currentData, setCurrentData] = useState<CommentsProps>(data);
  const [initialInput, setInitialInput] = useState<string>("");
  const [initialUser, setInitialUser] = useState<string>("");

  const { user, comment, reply, id } = currentData;
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleReply = () => {
    setShowReplyModal(true);
  };

  const handleEdit = () => {
    setShowEditModal(true);
    setInitialInput(currentData.comment);
    setInitialUser(currentData.user);
  };

  const handleReplyInput = (value: CommentsProps) => {
    setCurrentData((prev) => ({ ...prev, reply: [...prev.reply, value] }));
    setShowReplyModal(false);
  };

  const handleEditInput = (value: CommentsProps) => {
    const { user, comment } = value;
    setCurrentData((prev) => ({ ...prev, user, comment }));
    setShowEditModal(false);
  };

  const closeModal = () => {
    setShowReplyModal(false);
    setShowEditModal(false);
  };
  const deleteReply = (repId: string) => {
    if (type !== "main") {
      if (setReplyData) {
        setReplyData((data) => {
          if (data?.reply) {
            return {
              ...data,
              reply: data.reply.filter(
                (replyData: CommentsProps) => replyData.id !== repId
              ),
            };
          } else {
            return data;
          }
        });
      }
    } else {
      if (setData) {
        setData((data) => {
          const filteredData = data.filter(
            (data: CommentsProps) => data.id !== repId
          );

          return filteredData;
        });
      }
    }
  };
  return (
    <>
      <CommentsBoxMainContainer isMain={type === "main"} depth={depth}>
        <CommentsBoxMainUser>{user}</CommentsBoxMainUser>
        <CommentsBoxMainComment>{comment}</CommentsBoxMainComment>
        <CommentsBoxMainButtonContainer>
          <CommentsBoxMainButton onClick={handleReply}>
            Reply
          </CommentsBoxMainButton>
          <CommentsBoxMainButton
            onClick={() => {
              handleEdit();
            }}
          >
            Edit
          </CommentsBoxMainButton>
          <CommentsBoxMainButton
            onClick={() => {
              deleteReply(id);
            }}
          >
            Delete
          </CommentsBoxMainButton>
        </CommentsBoxMainButtonContainer>
      </CommentsBoxMainContainer>
      {!!reply.length &&
        reply.map((data) => (
          <CommentsBoxMain
            key={data.id}
            data={data}
            type="other"
            depth={depth + 1}
            setReplyData={setCurrentData}
          />
        ))}
      <Modal isOpen={showReplyModal} closeModal={closeModal}>
        <CommentsInput onSubmit={handleReplyInput} />
      </Modal>

      <Modal isOpen={showEditModal} closeModal={closeModal}>
        <CommentsInput
          onSubmit={handleEditInput}
          initialInput={initialInput}
          initialUser={initialUser}
        />
      </Modal>
    </>
  );
};

export default CommentsBoxMain;
