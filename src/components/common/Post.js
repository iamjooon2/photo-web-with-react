import React from 'react';
import './Post.css';
import {NavLink} from "react-router-dom";

const Post = ({username, caption, imageUrl}) => {
  return (
    <>
    <div className = 'container'>
    <br />
      <div className = "post">
        <div className = "post__username">
           jamm {username}
        </div>
          <NavLink to ={'/comment'} >
            <img className ="post__image" 
                src = "https://avatars.githubusercontent.com/u/77920690?s=460&u=b5ef9f384e47c25a4bd10902f1b65b089608f84e&v=4"
                // {imageUrl} 
                />  
          </NavLink>         
        <div className = "post__caption">
          caption {caption}
        </div>
      </div>
      </div>
      <br />
    </>
  );
};

export default Post;