import React from 'react';
import Header from '../components/common/Header';
import UploadButtonBlock from '../components/common/UploadButton';

const CommentPage = () => {
    return(
        <>
            <Header /> 
            <div> 댓글 보기 창</div>
            <UploadButtonBlock />
        </>
    );
};

export default CommentPage;