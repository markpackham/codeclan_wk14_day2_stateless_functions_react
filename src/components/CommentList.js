import React from "react";
import Comment from "./Comment";

const CommentList = (props) => {

  const commentNodes = props.comments.map(comment => {
    return (
      <Comment author={comment.author} key={comment.id}>
        {comment.text}
      </Comment>
    );
  });

  return (
    <ul className="comment-list">
    {commentNodes}
  </ul>
  );
}

export default CommentList;
