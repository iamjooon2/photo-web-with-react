import React, {useState, useEffect} from 'react';
import './CommentBlock.css';
import firebase, { dbService } from '../../fbase';

const CommentBlock = (userId) => {

  const [comments, setComments] = useState([]);

  const getComments = async() => {
    const dbComments = await dbService.collection("comments").get();
    dbComments.forEach((document) => {
        const commentObject = {
        ...document.data(),
        id : document.id,
      };
      setComments((prev)=> [commentObject, ...prev]);
    });  
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <>
      <div className = 'comment_container'>
      {comments.map((comments) => 
        <div className = 'comments'>
          <div className = 'user'>
              {comments.username}
          </div>
          <div className ='comment'>
              {comments.comment}
          </div>
        </div>
        )}
      </div>
      <br />
    </>
  );
}; 

export default CommentBlock;