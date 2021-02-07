import React from 'react';
import Header from '../components/common/Header';
import UploadButtonBlock from '../components/common/UploadButton';
import Body from '../components/common/Body';

const CommentPage = () => {
    return(
        <>
            <Header /> 
            <Body />
            <UploadButtonBlock />
        </>
    );
};

export default CommentPage;