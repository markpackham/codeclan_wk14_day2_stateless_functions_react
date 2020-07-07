import React from 'react'

const Comment = ({children}, {author}) => {
  return (
    <li className="comment">
    <h4>{children}</h4>
    <p>{author}</p>
  </li>
  );
}

export default Comment;
