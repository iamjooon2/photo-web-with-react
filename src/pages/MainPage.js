import React from 'react';
import Header from '../components/common/Header';
import BrBlock from '../components/common/BrBlock';
import Post from '../components/common/Post';
import UploadPageButton from '../components/common/UploadPageButton';

// import {db} from '../firebase';

const MainPage = () => {
    return (
        <>
            <Header />
            <BrBlock />
            <Post/>
            <UploadPageButton />
        </>
    );
};

export default MainPage;