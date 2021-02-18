import React from 'react';
import Header from '../components/common/Header';
import BrBlock from '../components/common/BrBlock';
import UploadButtonBlock from '../components/common/UploadButton';
import Post from '../components/common/Post';
import CommentBlock from '../components/common/CommentBlock';
import UploadComment from '../components/common/UploadComment';

const CommentPage = () => {
    return(
        <>
            <Header /> 
            <BrBlock />
            <Post />
            <UploadComment />
            <CommentBlock />
            <UploadButtonBlock />
        </>
    );
};

export default CommentPage;