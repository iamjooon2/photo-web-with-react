import React from 'react';
import Header from '../components/common/Header';
import BrBlock from '../components/common/BrBlock';
import UploadPhoto from '../components/common/UploadPhoto';

const UploadPage = () => {
    return (
            <>
                <Header />
                <BrBlock />
                
                <UploadPhoto />
            </>    
    );
};

export default UploadPage;