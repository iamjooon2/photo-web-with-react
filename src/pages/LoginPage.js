import React from 'react';
import Header from '../components/common/Header';
import BrBlock from '../components/common/BrBlock';
import OAuth from '../components/common/OAuth';

const LoginPage = () => {
    return(
        <>
            <Header /> 
            <BrBlock />
            <OAuth /> 
        </>
    );
};

export default LoginPage;