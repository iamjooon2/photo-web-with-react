import React from 'react';
import Header from '../components/common/Header';
import BrBlock from '../components/common/BrBlock';
import Post from '../components/common/Post';
import UploadComment from '../components/common/UploadComment';
import UploadPageButton from '../components/common/UploadPageButton';
import CommentBlock from '../components/common/CommentBlock';


const CommentPage = () => {
    return(
        <>
            <Header /> 
            <BrBlock />
            <Post />
            <UploadComment />
            <CommentBlock />
            <CommentBlock />
            <UploadPageButton/>
        </>
    );
};

export default CommentPage;