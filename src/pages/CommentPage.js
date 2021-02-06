import React from 'react';
import NavHeader from '../components/common/Header';
import UploadButtonBlock from '../components/common/UploadButton';

const CommentPage = () => {
    return(
        <>
            <NavHeader /> 
            <div> 댓글 보기 창</div>
            <UploadButtonBlock />
        </>
    );
};

export default CommentPage;