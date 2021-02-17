import React from 'react';
import Header from '../components/common/Header';
import BrBlock from '../components/common/BrBlock';
import UploadButtonBlock from '../components/common/UploadButton';
import Post from '../components/common/Post';
import ShowCommentBlock from '../components/common/ShowCommentBlock';

const CommentPage = () => {
    return(
        <>
            <Header /> 
            <BrBlock />
            <Post />
            <ShowCommentBlock />
            <ShowCommentBlock />
            <UploadButtonBlock />
        </>
    );
};

export default CommentPage;