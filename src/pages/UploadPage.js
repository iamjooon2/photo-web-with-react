import React from 'react';
import Header from '../components/common/Header';
import BrBlock from '../components/common/BrBlock';
import UploadPhotoBlock from '../components/common/UploadPhoto'

const UploadPage = () => {
    return (
            <>
                <Header />
                <BrBlock />
                <UploadPhotoBlock />
            </>    
    );
};

export default UploadPage;