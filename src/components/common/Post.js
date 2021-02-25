import React, {useState, useEffect} from 'react';
import './Post.css';
import {NavLink} from "react-router-dom";
import firebase, { dbService } from '../../fbase';

const Post = () => {

  const [posts, setPosts] = useState([]);

  const getPosts = async() => {
    const dbPosts = await dbService.collection("posts").get();
    dbPosts.forEach((document) => {
        const postObject = {
        ...document.data(),
        id : document.id,
      };
      setPosts((prev)=> [postObject, ...prev]);
    });  
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className = 'container'>
      <br />
      {posts.map((posts) => 
        <div className = "post">
        <div 
              className = "post__username">
                {posts.username}
              </div>
                <NavLink to ={'/comment'} >
                  <img className ="post__image" 
                      src = {posts.imageUrl}
                      />  
                </NavLink>         
              <div className = "post__caption">
                {posts.caption}
              </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Post;