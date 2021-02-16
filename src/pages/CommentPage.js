import React from 'react';
import Header from '../components/common/Header';
import BrBlock from '../components/common/BrBlock';
import UploadButtonBlock from '../components/common/UploadButton';

const CommentPage = () => {
    return(
        <>
            <Header /> 
            <BrBlock />
            <div>
                this is comment page!
            </div>
            <UploadButtonBlock />
        </>
    );
};

export default CommentPage;