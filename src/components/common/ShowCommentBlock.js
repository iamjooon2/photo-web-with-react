import React from 'react';
import './CommentBlock.css';

const CommentBlock = (userId) => {
  return (
    <>
      <div className = 'comment_container'>
        <div className = 'comments'>
          <div className = 'user'>
              hansoonho
          </div>
          <div className ='comment'>
              comment
          </div>
        </div>
      </div>
    </>
  );
}; 

export default CommentBlock;