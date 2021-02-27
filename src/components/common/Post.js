import React, {useState, useEffect} from 'react';
import './Post.css';
import {NavLink} from "react-router-dom";
import firebase, { dbService } from '../../fbase';

const Post = ({isOwner, }) => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
      dbService.collection('posts').onSnapshot((snapshot)=> {
      const postArray = snapshot.docs.map(doc => ({
        id :doc.id,
        ...doc.data(),
      }));
      setPosts(postArray);
    })
  }, []);

  return (
    <>
      <div className = 'container'>
      <br />
      {posts.map((post) => 
        <div className = "post">
        <div 
              className = "post__username">
                {post.username}
              </div>
                <NavLink to ={'/comment'} >
                  <img className ="post__image" 
                      src = {post.attachmentUrl}
                      />  
                </NavLink>         
              <div className = "post__caption">
                {post.caption}
              </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Post;