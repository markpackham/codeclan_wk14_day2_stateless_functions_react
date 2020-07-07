import React from 'react'

const Comment = (props) => {
  return (
    <li className="comment">
    <h4>{props.children}</h4>
    <p>{props.author}</p>
  </li>
  );
}

export default Comment;
